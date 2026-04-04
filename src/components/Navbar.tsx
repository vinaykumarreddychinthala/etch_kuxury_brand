import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartDrawer } from "./CartDrawer";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "ABOUT US", path: "/process" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/95 backdrop-blur-sm border-b border-primary/30"
        : "bg-background/80 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        <Link to="/" className="flex items-center">
          <img
            src="/logo2.png"
            alt="Etch Studio"
            className="h-11 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
            style={{
              mixBlendMode: "multiply",
              filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.06))",
            }}
          />
        </Link>


        {/* Desktop */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 text-sm tracking-[0.15em] uppercase font-body transition-all duration-300 ${location.pathname === link.path
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:bg-[#1a1a1a] hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <CartDrawer />
        </div>

        {/* Mobile toggle and Cart */}
        <div className="md:hidden flex items-center gap-2">
          <CartDrawer />
          <button
            className="text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background/98 backdrop-blur-sm ${mobileOpen ? "max-h-80" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`px-6 py-3 w-full text-center text-sm tracking-[0.2em] uppercase font-body transition-all duration-300 ${location.pathname === link.path
                ? "text-primary font-medium"
                : "text-foreground/70 hover:bg-[#1a1a1a] hover:text-white"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
