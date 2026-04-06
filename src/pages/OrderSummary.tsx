import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useCart, formatPrice } from "@/contexts/CartContext";
import { loadRazorpay } from "@/utils/loadRazorpay";
import { toast } from "sonner";

export default function OrderSummary() {
  const { items, cartTotal, totalItems, clearCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  // If no shipping details, user refreshed or came here directly, send back to checkout
  const shippingDetails = location.state?.shippingDetails;

  if (!shippingDetails) {
    return <Navigate to="/checkout" replace />;
  }
  
  if (items.length === 0) {
    return <Navigate to="/collection" replace />;
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const res = await loadRazorpay();
      if (!res) {
        toast.error("Razorpay SDK failed to load. Are you online?");
        setIsProcessing(false);
        return;
      }

      // Create Order on Backend
      const orderRes = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: cartTotal }),
      });
      const orderData = await orderRes.json();
      
      if (!orderData || !orderData.id) {
        toast.error("Failed to initialize order");
        setIsProcessing(false);
        return;
      }

      const options = {
        key: orderData.key_id, 
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Etch Studio",
        description: "Premium Handcrafted Purchase",
        order_id: orderData.id,
        handler: async function (response: any) {
          const verifyRes = await fetch("/api/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              shippingDetails, // pass shipping details for email & db
              items, // pass items so backend knows what to email/store
              total: cartTotal
            }),
          });
          const verifyData = await verifyRes.json();

          if (verifyRes.ok) {
            clearCart();
            navigate("/success");
          } else {
            toast.error(verifyData.message || "Payment verification failed!");
          }
        },
        prefill: {
          name: `${shippingDetails.firstName} ${shippingDetails.lastName}`.trim(),
          email: shippingDetails.email,
          contact: shippingDetails.phone,
        },
        theme: {
          color: "#2c2c2c",
        },
      };

      // @ts-ignore
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong processing payment");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <Layout>
      <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
        <h1 className="text-3xl md:text-4xl font-heading mb-8 tracking-wide text-[#2c2c2c] text-center border-b pb-4">
          Order Summary
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Address Outline */}
          <div className="space-y-8 bg-secondary/30 p-8 rounded-sm">
            <h2 className="text-xl font-heading tracking-wide border-b border-border/60 pb-2">
              Delivery Details
            </h2>
            <div className="text-sm leading-relaxed text-muted-foreground space-y-2">
              <p><strong className="text-foreground font-medium">Name:</strong> {shippingDetails.firstName} {shippingDetails.lastName}</p>
              {shippingDetails.companyName && <p><strong className="text-foreground font-medium">Company:</strong> {shippingDetails.companyName}</p>}
              <p><strong className="text-foreground font-medium">Email:</strong> {shippingDetails.email}</p>
              <p><strong className="text-foreground font-medium">Phone:</strong> {shippingDetails.phone}</p>
              <p><strong className="text-foreground font-medium">Address:</strong><br/>
                {shippingDetails.streetAddress},<br/>
                {shippingDetails.townCity}, {shippingDetails.state} — {shippingDetails.pincode}<br/>
                {shippingDetails.country}
              </p>
            </div>

            <Button variant="outline" onClick={() => navigate("/checkout")} className="text-xs uppercase tracking-widest mt-4">
              Edit Details
            </Button>
          </div>

          {/* Right Column: Cart items */}
          <div className="space-y-6">
            <h2 className="text-xl font-heading tracking-wide border-b border-border/60 pb-2">
              Your Items ({totalItems})
            </h2>
            
            <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 bg-white border border-border/30 shadow-sm rounded-sm">
                  <div className="h-20 w-20 bg-secondary shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="text-sm font-medium">{item.title}</h4>
                    {item.colorName && <p className="text-xs text-muted-foreground mt-1">Color: {item.colorName}</p>}
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs">Qty: {item.quantity}</span>
                      <span className="text-sm font-medium">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-[#d1d1d1] pt-6 mt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-base text-muted-foreground font-medium uppercase tracking-widest">Total to pay</span>
                <span className="text-2xl font-heading text-[#2c2c2c]">{formatPrice(cartTotal)}</span>
              </div>

              <Button 
                onClick={handlePayment} 
                disabled={isProcessing}
                className="w-full h-14 rounded-sm text-sm tracking-widest uppercase bg-[#2c2c2c] hover:bg-[#1a1a1a]"
              >
                {isProcessing ? "PROCESSING PAYMENT..." : "BUY NOW"}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
