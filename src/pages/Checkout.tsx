import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const COUNTRIES = [
  "India", "United States", "United Kingdom", "Canada", "Australia",
  "Germany", "France", "Singapore", "UAE", "Other"
];

export default function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "India",
    streetAddress: "",
    townCity: "",
    state: "",
    pincode: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.streetAddress ||
        !formData.townCity || !formData.state || !formData.pincode || !formData.phone || !formData.email) {
      alert("Please fill in all required fields.");
      return;
    }
    navigate("/order-summary", { state: { shippingDetails: formData } });
  };

  const inputClass = "w-full bg-transparent border-b border-border py-3 text-foreground focus:border-[#2c2c2c] outline-none transition-colors text-sm";
  const labelClass = "block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2";

  return (
    <Layout>
      <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto min-h-screen">
        <h1 className="text-3xl md:text-4xl font-heading mb-2 tracking-wide text-[#2c2c2c] text-center">
          Shipping Details
        </h1>
        <p className="text-center text-muted-foreground text-sm mb-10 tracking-wide">
          Please fill in your delivery information below.
        </p>

        <form onSubmit={handleNext} className="space-y-7">

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>First Name *</label>
              <input name="firstName" type="text" required value={formData.firstName}
                onChange={handleChange} className={inputClass} placeholder="John" />
            </div>
            <div>
              <label className={labelClass}>Last Name *</label>
              <input name="lastName" type="text" required value={formData.lastName}
                onChange={handleChange} className={inputClass} placeholder="Doe" />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className={labelClass}>Company Name <span className="normal-case tracking-normal text-xs">(optional)</span></label>
            <input name="companyName" type="text" value={formData.companyName}
              onChange={handleChange} className={inputClass} placeholder="Your company" />
          </div>

          {/* Country */}
          <div>
            <label className={labelClass}>Country / Region *</label>
            <select name="country" value={formData.country} onChange={handleChange}
              className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-[#2c2c2c] outline-none transition-colors text-sm cursor-pointer">
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Street Address */}
          <div>
            <label className={labelClass}>Street Address *</label>
            <input name="streetAddress" type="text" required value={formData.streetAddress}
              onChange={handleChange} className={inputClass} placeholder="House number and street name" />
          </div>

          {/* Town / State / Pincode */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className={labelClass}>Town / City *</label>
              <input name="townCity" type="text" required value={formData.townCity}
                onChange={handleChange} className={inputClass} placeholder="Mumbai" />
            </div>
            <div>
              <label className={labelClass}>State *</label>
              <input name="state" type="text" required value={formData.state}
                onChange={handleChange} className={inputClass} placeholder="Maharashtra" />
            </div>
            <div>
              <label className={labelClass}>PIN Code *</label>
              <input name="pincode" type="text" required value={formData.pincode}
                onChange={handleChange} className={inputClass} placeholder="400001" />
            </div>
          </div>

          {/* Phone / Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Phone *</label>
              <input name="phone" type="tel" required value={formData.phone}
                onChange={handleChange} className={inputClass} placeholder="+91 9999900000" />
            </div>
            <div>
              <label className={labelClass}>Email Address *</label>
              <input name="email" type="email" required value={formData.email}
                onChange={handleChange} className={inputClass} placeholder="john@example.com" />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-14 rounded-sm text-sm tracking-widest uppercase bg-[#2c2c2c] hover:bg-[#1a1a1a] mt-8"
          >
            Review Order
          </Button>
        </form>
      </div>
    </Layout>
  );
}
