import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-cream/80">
      <div className="max-w-7xl mx-auto px-8 md:px-12 py-20 md:py-24">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo2.png"
                alt="Etch Studio"
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
                style={{
                  filter: "invert(1) brightness(0.9) sepia(0.15)",
                  mixBlendMode: "screen",
                }}
              />
            </Link>
            <p className="font-heading text-lg italic text-cream/70 mb-4 max-w-sm">
              Handcrafted with intention.
            </p>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Explore Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-heading tracking-[0.25em] uppercase mb-8 text-cream/90 font-medium">
              Explore
            </h4>
            <div className="flex flex-col gap-5 items-center md:items-start">
              <Link to="/" className="text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-white transition-colors duration-300">Home</Link>
              <Link to="/collection" className="text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-white transition-colors duration-300">Collection</Link>
              <Link to="/process" className="text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-white transition-colors duration-300">Our Process</Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h4 className="text-xs font-heading tracking-[0.25em] uppercase mb-8 text-cream/90 font-medium">
              Support
            </h4>
            <div className="flex flex-col gap-5 items-center md:items-start">
              <Link to="/product-care" className="text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-white transition-colors duration-300">Product Care</Link>
              <Link to="/faq" className="text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-white transition-colors duration-300">FAQ</Link>
              <Link to="/contact" className="text-xs tracking-[0.2em] uppercase text-cream/40 hover:text-white transition-colors duration-300">Contact Us</Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-cream/10 gap-6">
          <p className="text-[10px] tracking-[0.25em] text-cream/30 uppercase text-center md:text-left">
            © {new Date().getFullYear()} etch.luxury — All rights reserved
          </p>
          
          <div className="flex items-center gap-8 text-cream/50 text-[10px] tracking-[0.2em] uppercase">
            <a href="https://instagram.com/etch.luxury" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
