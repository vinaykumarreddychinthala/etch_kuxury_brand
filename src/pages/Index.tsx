import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Layout from "@/components/Layout";
import hero1 from "@/assets/hero1.png";
import yauuu from "@/assets/yauuu.jpeg";
import productBlackSilver from "@/assets/product-black-silver.jpg";
import productOceanBlue from "@/assets/product-ocean-blue.jpg";
import productMonochrome from "@/assets/product-monochrome.jpg";
import productCoasters from "@/assets/product-coasters.jpg";
import item1 from "@/assets/item1.jpeg";
import item2 from "@/assets/item2.jpeg";
import item3 from "@/assets/item3.jpeg";
import item4 from "@/assets/item4.jpeg";

const craftFeatures = [
  {
    icon: "✦",
    title: "One-of-a-Kind",
    desc: "Every pour creates a piece that can never be replicated.",
  },
  {
    icon: "💎",
    title: "Sustainable",
    desc: "Food Grade & Ecofriendly Materials Used",
  },
  {
    icon: "🪵",
    title: "Artisian Crafted",
    // desc: "Each slab is hand-selected for its natural character, grain, and raw beauty.",
    desc: "Hand Made With Care"
  },
];

const signaturePieces = [
  { name: "Midnight Silver Tray", price: "₹4,500", image: productBlackSilver },
  { name: "Ocean Drift Tray", price: "₹5,200", image: productOceanBlue },
  { name: "Monochrome Board", price: "₹3,800", image: productMonochrome },
  { name: "Noir Coaster Set", price: "₹1,800", image: productCoasters },
    { name: "Golden River Tray", price: "₹5,800", image: item1 },
  { name: "Walnut Glow Board", price: "₹4,200", image: item2 },
  { name: "Black Marble Resin Tray", price: "₹6,200", image: item3 },
  { name: "Emerald Flow Tray", price: "₹6,500", image: item4 },
];

export default function Index() {
  const containerRef = useScrollFadeIn();

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero */}
        <section className="hero-section relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={hero1}
              alt="Black and silver resin wood tray on white linen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/30" />
          </div>
          <div className="relative z-10 text-center px-6 max-w-3xl mt-[10vh]">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-cream tracking-wide leading-tight animate-fade-up">
              Carved in Wood.
              <br />
              Poured in Resin.
            </h1>
            <p className="mt-6 text-cream/80 text-sm md:text-base tracking-widest uppercase font-body animate-fade-up [animation-delay:200ms]">
              Luxury handcrafted pieces, made to order.
            </p>
            <Link
              to="/collection"
              className="inline-block mt-10 px-8 py-3 border border-cream/60 text-cream text-sm tracking-[0.2em] uppercase hover:bg-cream hover:text-foreground transition-all duration-500 animate-fade-up [animation-delay:400ms]"
            >
              Explore Collection
            </Link>
          </div>
        </section>

        {/* Gold divider */}
        <div className="py-8 flex justify-center">
          <div className="gold-divider" />
        </div>

        {/* The Craft */}
        <section className="fade-in-section max-w-6xl mx-auto px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl text-center font-light mb-4 tracking-wide">
            The Craft
          </h2>
          <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-16">
            What makes each piece extraordinary
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {craftFeatures.map((f) => (
              <div key={f.title} className="text-center">
                <span className="text-3xl block mb-4">{f.icon}</span>
                <h3 className="font-heading text-xl md:text-2xl mb-3 tracking-wide">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Editorial banner */}
        <section className="fade-in-section relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <img
            src={yauuu}
            alt="Dark resin close-up with silver swirls"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
          <p className="relative z-10 font-heading text-2xl md:text-4xl lg:text-5xl italic text-cream text-center px-6 max-w-3xl font-light leading-relaxed">
            "Crafted with intention, made to be timeless"
          </p>
        </section>

        {/* Signature Pieces */}
        <section className="fade-in-section py-16 md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl text-center font-light mb-4 tracking-wide">
            Signature Pieces
          </h2>
          <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-12">
            Our most coveted creations
          </p>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-8">
            {signaturePieces.map((p) => (
              <Link
                key={p.name}
                to={`/product/${p.name.replace(/\s+/g, '-').toLowerCase()}`}
                className="group block transition-opacity duration-300 hover:opacity-90"
              >
                <div className="relative overflow-hidden aspect-square bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 text-center sm:text-left">
                  <h3 className="font-heading text-lg tracking-wide">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Closing statement */}
        <section className="fade-in-section py-20 md:py-32 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="gold-divider mb-10" />
            <p className="font-heading text-2xl md:text-3xl italic font-light leading-relaxed text-foreground/80">
              Each piece begins as raw wood and liquid resin — and ends as a
              story etched in time.
            </p>
            <div className="gold-divider mt-10" />
          </div>
        </section>
      </div>
    </Layout>
  );
}
