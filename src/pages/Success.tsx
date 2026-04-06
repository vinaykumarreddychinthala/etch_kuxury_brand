import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <Layout>
      <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center text-center">
        <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
        <h1 className="text-4xl md:text-5xl font-heading mb-4 tracking-wide text-[#2c2c2c]">
          Order Placed Successfully!
        </h1>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg leading-relaxed">
          Thank you for choosing Etch. Your premium handcrafted piece is on its way to being carefully prepared for you.
          We've received your order and will email you the order details shortly.
        </p>
        <Link
          to="/collection"
          className="inline-block px-10 py-3 border border-[#2c2c2c] bg-[#2c2c2c] text-white text-sm tracking-[0.2em] uppercase hover:bg-white hover:text-[#2c2c2c] transition-all duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </Layout>
  );
}
