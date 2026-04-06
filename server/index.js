import express from 'express';
import Razorpay from 'razorpay';
import cors from 'cors';
import crypto from 'crypto';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import { createClient } from '@supabase/supabase-js';

// Load environment variables from the root .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
app.use(cors());
app.use(express.json());

// Ensure keys are available
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.warn("WARNING: Razorpay keys are missing from .env file!");
}

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

// Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/api/create-order', async (req, res) => {
  try {
    const { amount, currency = "INR", receipt = `receipt_${Date.now()}` } = req.body;

    const options = {
      amount: Math.round(amount * 100), // amount in smallest currency unit (paise)
      currency,
      receipt,
    };

    const order = await razorpay.orders.create(options);
    
    if (!order) {
      return res.status(500).json({ error: "Some error occured creating the order" });
    }

    res.json({
      ...order,
      key_id: process.env.RAZORPAY_KEY_ID || '', // Frontend needs this public key to open checkout
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

app.post('/api/verify-payment', async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      shippingDetails,
      items,
      total
    } = req.body;

    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET || '')
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      
      try {
        // Stringify products for email & DB
        const productsStr = items?.map((i) => `${i.quantity}x ${i.title} ${i.colorName ? `(${i.colorName})` : ''}`).join(', ') || 'None';
        const fullName = `${shippingDetails?.firstName || ''} ${shippingDetails?.lastName || ''}`.trim();
        const fullAddress = [
          shippingDetails?.streetAddress,
          shippingDetails?.townCity,
          shippingDetails?.state,
          shippingDetails?.pincode,
          shippingDetails?.country
        ].filter(Boolean).join(', ');
        
        // 1. Insert into Supabase
        const { error: dbError } = await supabase
          .from('orders')
          .insert([{
            razorpay_order_id,
            razorpay_payment_id,
            first_name: shippingDetails?.firstName || '',
            last_name: shippingDetails?.lastName || '',
            company_name: shippingDetails?.companyName || '',
            country: shippingDetails?.country || '',
            street_address: shippingDetails?.streetAddress || '',
            town_city: shippingDetails?.townCity || '',
            state: shippingDetails?.state || '',
            pincode: shippingDetails?.pincode || '',
            email: shippingDetails?.email || '',
            phone: shippingDetails?.phone || '',
            products: productsStr,
            total_amount: total,
          }]);
          
        if (dbError) {
          console.error("Supabase insert error (continuing anyway):", dbError);
        }

        // 2. Send email via Nodemailer (Gmail)
        await transporter.sendMail({
          from: `"Etch Studio Orders" <${process.env.GMAIL_USER}>`,
          to: 'etchluxury@gmail.com',
          subject: `New Order Received — ${fullName}`,
          html: `
            <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #fafaf9; padding: 40px; border: 1px solid #e5e5e5;">
              <h1 style="font-size: 22px; letter-spacing: 4px; text-transform: uppercase; color: #2c2c2c; border-bottom: 1px solid #d1d1d1; padding-bottom: 16px; margin-bottom: 24px;">New Order Received</h1>
              
              <h3 style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin-bottom: 12px;">Payment Details</h3>
              <table style="width:100%; border-collapse: collapse; margin-bottom: 28px;">
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px;">Order ID</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${razorpay_order_id}</td></tr>
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px;">Payment ID</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${razorpay_payment_id}</td></tr>
              </table>

              <h3 style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin-bottom: 12px;">Customer Details</h3>
              <table style="width:100%; border-collapse: collapse; margin-bottom: 28px;">
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px; width: 140px;">Name</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${fullName}</td></tr>
                ${shippingDetails?.companyName ? `<tr><td style="padding: 6px 0; color: #555; font-size: 13px;">Company</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${shippingDetails.companyName}</td></tr>` : ''}
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px;">Email</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${shippingDetails?.email}</td></tr>
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px;">Phone</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${shippingDetails?.phone}</td></tr>
              </table>

              <h3 style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin-bottom: 12px;">Delivery Address</h3>
              <table style="width:100%; border-collapse: collapse; margin-bottom: 28px;">
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px; width: 140px;">Street</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${shippingDetails?.streetAddress}</td></tr>
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px;">Town / City</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${shippingDetails?.townCity}</td></tr>
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px;">State</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${shippingDetails?.state}</td></tr>
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px;">PIN Code</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${shippingDetails?.pincode}</td></tr>
                <tr><td style="padding: 6px 0; color: #555; font-size: 13px;">Country</td><td style="padding: 6px 0; color: #2c2c2c; font-size: 13px;">${shippingDetails?.country}</td></tr>
              </table>

              <h3 style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #888; margin-bottom: 12px;">Order Items</h3>
              <p style="font-size: 14px; color: #2c2c2c; margin-bottom: 28px;">${productsStr}</p>

              <table style="width:100%; background: #2c2c2c; color: #fff; padding: 0; border-collapse: collapse;">
                <tr>
                  <td style="padding: 16px 20px; font-size: 13px; letter-spacing: 2px; text-transform: uppercase;">Total Paid</td>
                  <td style="padding: 16px 20px; font-size: 16px; font-weight: bold; text-align: right;">&#8377;${total}</td>
                </tr>
              </table>

              <p style="font-size: 11px; color: #aaa; margin-top: 32px; text-align: center; letter-spacing: 1px;">ETCH STUDIO — This is an automated order notification.</p>
            </div>
          `,
        });
        console.log('Order email sent successfully');
      } catch (err) {
        console.error("Post-verification action error:", err);
      }

      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    console.error("Verify Payment Error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Razorpay Server listening on port ${PORT}`));
}

export default app;
