import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Layout from "@/components/Layout";

export default function Contact() {
  const containerRef = useScrollFadeIn();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    engraving: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "919831232374";

    const text = `Hello, I want to place an order.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Engraving Text: ${formData.engraving || "None"}

Message: ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  };

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="pt-32 pb-16 px-6 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl text-center font-light tracking-wide mb-4">
            Commission Your Piece
          </h1>
          <p className="text-center text-muted-foreground mb-16 max-w-md mx-auto">
            Tell us your vision — we'll bring it to life. <br />
            <span className="text-xs mt-2 block">(Minimum 30 pieces for Corporate/Bulk orders)</span>
          </p>

          {submitted ? (
            <div className="fade-in-section text-center py-20">
              <span className="text-4xl mb-4 block">✦</span>
              <h2 className="font-heading text-2xl mb-2">Thank you!</h2>
              <p className="text-muted-foreground">
                We'll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="fade-in-section space-y-6">
              
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    required
                    name="name"
                    type="text"
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    required
                    name="email"
                    type="email"
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* WhatsApp Number ONLY (Product Type removed) */}
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  WhatsApp Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Engraving */}
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Add Engraving <span className="normal-case tracking-normal text-muted-foreground/60">(optional)</span>
                </label>
                <input
                  name="engraving"
                  type="text"
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary outline-none transition-colors"
                  placeholder="Text or name to be engraved..."
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary outline-none transition-colors resize-none"
                  placeholder="Any special requests or details..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors duration-300"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Contact info (UNCHANGED) */}
        <section className="bg-dark-surface py-16 mt-16">
          <div className="max-w-3xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-2">WhatsApp</p>
              <p className="text-cream/80">+91 9330132374</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-2">Instagram</p>
              <a
                href="https://instagram.com/etch.luxury"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/80 hover:text-primary transition-colors"
              >
                @etch.luxury
              </a>
            </div>
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-cream/40 mb-2">Email</p>
              <p className="text-cream/80">hello@etch.luxury</p>
            </div>
          </div>
          <p className="text-center text-cream/30 text-xs tracking-widest uppercase mt-10">
            We respond within 24 hours · Delivery across India
          </p>
        </section>
      </div>
    </Layout>
  );
}