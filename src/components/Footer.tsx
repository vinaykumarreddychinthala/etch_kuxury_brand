import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-surface text-cream/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <Link to="/">
              <img
                src="/logo2.png"
                alt="Etch Studio"
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
                style={{
                  filter: "invert(1) brightness(0.9) sepia(0.15)",
                  mixBlendMode: "screen",
                }}
              />
            </Link>
            <p className="font-heading text-base italic text-cream/50 mt-1">
              Handcrafted with intention.
            </p>
          </div>

          <div className="flex items-center gap-8">
            {[
              { label: "Home", path: "/" },
              { label: "Collection", path: "/collection" },
              { label: "Process", path: "/process" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs tracking-[0.2em] uppercase text-cream/50 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 text-cream/50 text-sm">
            <a href="https://instagram.com/etch.luxury" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-xs tracking-widest text-cream/30 uppercase">
            © {new Date().getFullYear()} etch.luxury — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
