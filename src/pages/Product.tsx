import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Minus, Plus, Star } from "lucide-react";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Import sample images
import productOceanBlue from "@/assets/product-ocean-blue.jpg";
import productMonochrome from "@/assets/product-monochrome.jpg";
import productBlackSilver from "@/assets/product-black-silver.jpg";
import productRiverTable from "@/assets/product-river-table.jpg";
import productCoasters from "@/assets/product-coasters.jpg";
import productNamePlaque from "@/assets/product-name-plaque.jpg";
import item1 from "@/assets/item1.jpeg";
import item2 from "@/assets/item2.jpeg";
import item3 from "@/assets/item3.jpeg";
import item4 from "@/assets/item4.jpeg";
import lilac from "@/assets/lilac.png";
import navy from "@/assets/navy.png";
import slate from "@/assets/slate.png";
import greentable from "@/assets/greentable.png";
import orange from "@/assets/orange.png";
import seascape from "@/assets/seascape.png";


// ─────────────────────────────────────────────────────────────────────────────
// 🎨 COLOUR OPTIONS — now defined per-product inside productsDatabase below.
// Each colour carries its own `image` so clicking a swatch replaces the main view.
// The global `defaultColourOptions` is a fallback for products with no custom colours.
// ─────────────────────────────────────────────────────────────────────────────
const defaultColourOptions = [
  { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: productOceanBlue },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
];

// ─────────────────────────────────────────────────────────────────────────────
// 📦 PRODUCTS DATABASE
// Each product now has its own `colourOptions` array.
// `image` inside each colour is what appears in the main viewer when that swatch is clicked.
// 🔁 Replace image imports with real colour-variant assets per product.
// ─────────────────────────────────────────────────────────────────────────────
const productsDatabase: Record<string, any> = {
  // ── Collection ──
  "black-&-silver-serving-tray": {
    title: "Black & Silver Serving Tray",
    price: "₹4,500",
    images: [productBlackSilver, productMonochrome, productOceanBlue],
    colourOptions: [
    { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "ocean-blue-tray": {
    title: "Ocean Blue Tray",
    price: "₹5,200",
    images: [productOceanBlue, productMonochrome, productBlackSilver],
    colourOptions: [
     { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "monochrome-cheese-board": {
    title: "Monochrome Cheese Board",
    price: "₹3,800",
    images: [productMonochrome, productBlackSilver, productOceanBlue],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "resin-river-table": {
    title: "Resin River Table",
    price: "₹28,000",
    images: [productRiverTable, productMonochrome, productBlackSilver],
    colourOptions: [
   { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "coaster-set": {
    title: "Coaster Set",
    price: "₹1,800",
    images: [productCoasters, productMonochrome, productBlackSilver],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "custom-name-plaque": {
    title: "Custom Name Plaque",
    price: "₹2,500",
    images: [productNamePlaque, productMonochrome, productBlackSilver],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },

  // ── Index ──
  "midnight-silver-tray": {
    title: "Midnight Silver Tray",
    price: "₹4,500",
    images: [productBlackSilver, productMonochrome, productOceanBlue],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "ocean-drift-tray": {
    title: "Ocean Drift Tray",
    price: "₹5,200",
    images: [productOceanBlue, productMonochrome, productBlackSilver],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "monochrome-board": {
    title: "Monochrome Board",
    price: "₹3,800",
    images: [productMonochrome, productBlackSilver, productOceanBlue],
    colourOptions: [
   { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "noir-coaster-set": {
    title: "Noir Coaster Set",
    price: "₹1,800",
    images: [productCoasters, productMonochrome, productBlackSilver],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },

  // ── New items ──
  "golden-river-tray": {
    title: "Golden River Tray",
    price: "₹5,800",
    images: [item1, item2, item3, item4],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: navy },
  { name: "Slate",       hex: "#374754", image: slate },
  { name: "Powder Blue", hex: "#23b1d1", image: seascape },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: orange },
    ],
  },
  "walnut-glow-board": {
    title: "Walnut Glow Board",
    price: "₹4,200",
    images: [item2, item1, item3],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "black-marble-resin-tray": {
    title: "Black Marble Resin Tray",
    price: "₹6,200",
    images: [item3, item1, item2],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
  "emerald-flow-tray": {
    title: "Emerald Flow Tray",
    price: "₹6,500",
    images: [item4, item1, item2],
    colourOptions: [
 { name: "Teal",        hex: "#4ab3b0", image: item1 },
  { name: "Navy",        hex: "#3b3f8c", image: item2 },
  { name: "Olive",       hex: "#7a8c3b", image: item3 },
  { name: "Powder Blue", hex: "#a8c8d8", image: item4 },
  { name: "Lilac",       hex: "#7b5ea7", image: lilac },
  { name: "Terracotta",  hex: "#c07850", image: productMonochrome },
    ],
  },
};

const getProductDetails = (id: string | undefined) => {
  const found = id ? productsDatabase[id] : null;
  if (found) return { ...found, id, rating: 4.9, reviews: 101 };
  return {
    id: "not-found",
    title: "Resin Masterpiece",
    price: "₹3,500",
    rating: 4.9,
    reviews: 84,
    images: [productOceanBlue, productMonochrome, productBlackSilver],
    colourOptions: defaultColourOptions,
  };
};

import { useCart } from "@/contexts/CartContext";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductDetails(id);
  const colourOptions = product.colourOptions ?? defaultColourOptions;

  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage]   = useState(0);
  const [quantity, setQuantity]             = useState(1);
  const [isChatOpen, setIsChatOpen]         = useState(false);
  const [selectedColour, setSelectedColour] = useState<typeof colourOptions[0] | null>(null);

  // Touch-swipe state
  const touchStartX = useRef<number | null>(null);
  const touchEndX   = useRef<number | null>(null);

  const totalImages = selectedColour ? 1 : product.images.length;

  const goNext = () => {
    if (selectedColour) return;
    setSelectedImage(i => (i + 1) % product.images.length);
  };
  const goPrev = () => {
    if (selectedColour) return;
    setSelectedImage(i => (i - 1 + product.images.length) % product.images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 40) {
      delta > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
    touchEndX.current   = null;
  };

  // Clicking same colour deselects it
  const handleColourClick = (colour: typeof colourOptions[0]) => {
    setSelectedColour(prev => prev?.name === colour.name ? null : colour);
  };

  const displayImage = selectedColour ? selectedColour.image : product.images[selectedImage];

  const addRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const circle = document.createElement("span");
    circle.className = "ripple-circle";
    const rect = btn.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left - 30}px`;
    circle.style.top  = `${e.clientY - rect.top  - 30}px`;
    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  return (
    <Layout>
      <style>{`
        @keyframes imgFade {
          from { opacity: 0; transform: scale(1.03); }
          to   { opacity: 1; transform: scale(1);    }
        }
        .img-fade { animation: imgFade 0.32s ease forwards; }

        @keyframes rippleAnim {
          0%   { transform: scale(0); opacity: 0.45; }
          100% { transform: scale(5); opacity: 0;    }
        }
        .btn-buy          { position: relative; overflow: hidden; transition: transform 0.15s ease; }
        .btn-buy:hover    { transform: translateY(-1px); }
        .btn-buy:active   { transform: scale(0.98); }
        .ripple-circle    {
          position: absolute; border-radius: 50%;
          width: 60px; height: 60px;
          background: rgba(0,0,0,0.1);
          pointer-events: none;
          animation: rippleAnim 0.6s linear;
        }

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .btn-bulk { position: relative; overflow: hidden; transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .btn-bulk::after {
          content: "";
          position: absolute; inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.16) 50%, transparent 60%);
          background-size: 200% auto;
          opacity: 0;
          transition: opacity 0.15s;
        }
        .btn-bulk:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,0.22); }
        .btn-bulk:hover::after { opacity: 1; animation: shimmer 0.75s linear; }
        .btn-bulk:active { transform: translateY(0); box-shadow: none; }

        .colour-swatch { transition: transform 0.18s ease, box-shadow 0.18s ease; }
        .colour-swatch:hover  { transform: scale(1.14); }
        .colour-swatch.active {
          transform: scale(1.14);
          box-shadow: 0 0 0 2.5px #fff, 0 0 0 4.5px #2c2c2c;
        }

        /* Thumbnail scroll — hide scrollbar */
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }

        /* Dot indicators */
        .dot { transition: all 0.25s ease; }
        .dot.active { background-color: #2c2c2c; width: 20px; border-radius: 4px; }
      `}</style>

      <div className="pt-24 sm:pt-32 pb-24 px-4 sm:px-6 max-w-[1400px] mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          {/* ── LEFT: Image Gallery ── */}
          <div className="flex-1 flex flex-col gap-4">

            {/* Main image — touch swipe enabled */}
            <div
              className="relative w-full overflow-hidden bg-secondary"
              style={{ aspectRatio: "1 / 1", maxHeight: "600px" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                key={displayImage}
                src={displayImage}
                alt={product.title}
                className="img-fade w-full h-full object-cover"
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
                draggable={false}
              />

              {/* Arrow nav — hidden on mobile, shown from md up */}
              {!selectedColour && product.images.length > 1 && (
                <>
                  <button
                    className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/85 hover:bg-white rounded-full items-center justify-center shadow transition-all hover:scale-105"
                    onClick={goPrev}
                    aria-label="Previous"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button
                    className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/85 hover:bg-white rounded-full items-center justify-center shadow transition-all hover:scale-105"
                    onClick={goNext}
                    aria-label="Next"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                </>
              )}

              {/* Active colour label */}
              {selectedColour && (
                <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow text-xs font-medium text-[#2c2c2c]">
                  <span className="w-3 h-3 rounded-full border border-white/50" style={{ backgroundColor: selectedColour.hex }} />
                  {selectedColour.name}
                  <button
                    onClick={() => setSelectedColour(null)}
                    className="ml-1 text-[#2c2c2c]/40 hover:text-[#2c2c2c] transition-colors leading-none"
                    aria-label="Clear colour"
                  >✕</button>
                </div>
              )}

              {/* Dot indicators (mobile only) */}
              {!selectedColour && product.images.length > 1 && (
                <div className="md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {product.images.map((_: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      aria-label={`Image ${idx + 1}`}
                      className={`dot h-1.5 rounded-full ${selectedImage === idx ? "active bg-[#2c2c2c]" : "w-1.5 bg-[#2c2c2c]/30"}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnails — visible on md+, hidden when colour selected */}
            {!selectedColour && product.images.length > 1 && (
              <div className="hidden md:flex flex-row gap-3 overflow-x-auto no-scrollbar">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative shrink-0 w-20 h-20 lg:w-24 lg:h-24 overflow-hidden border-2 transition-all duration-200 ${
                      selectedImage === idx
                        ? "border-[#2c2c2c] scale-105 shadow-md"
                        : "border-transparent hover:border-[#2c2c2c]/30 hover:scale-105"
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Mobile strip — small scrollable thumbnails shown below main image, no colour selected */}
            {!selectedColour && product.images.length > 1 && (
              <div className="flex md:hidden flex-row gap-2 overflow-x-auto no-scrollbar px-1 pb-1">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`shrink-0 w-14 h-14 overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? "border-[#2c2c2c]" : "border-transparent opacity-60"
                    }`}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Product Details ── */}
          <div className="flex-1 max-w-full lg:max-w-md w-full">
            <h1 className="font-heading text-3xl sm:text-4xl mb-3 text-[#2c2c2c] leading-tight">{product.title}</h1>

            <div className="flex items-center gap-2 mb-5">
              <div className="flex text-[#8e9882]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{product.rating}</span>
              <span className="text-xs text-muted-foreground">| {product.reviews} reviews</span>
            </div>

            <p className="text-xl mb-7 text-[#2c2c2c] font-medium">{product.price}</p>

            {/* ── Colour Selector ── */}
            <div className="mb-7">
              <p className="text-sm text-[#2c2c2c] mb-3">
                <span className="font-medium">Colour:</span>{" "}
                <span className="text-muted-foreground">
                  {selectedColour ? selectedColour.name : "Select a colour"}
                </span>
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                {colourOptions.map((colour: { name: string; hex: string; image: string }) => (
                  <button
                    key={colour.name}
                    onClick={() => handleColourClick(colour)}
                    title={colour.name}
                    aria-label={colour.name}
                    aria-pressed={selectedColour?.name === colour.name}
                    className={`colour-swatch w-10 h-10 rounded-sm ${
                      selectedColour?.name === colour.name ? "active" : ""
                    }`}
                    style={{ backgroundColor: colour.hex }}
                  />
                ))}
              </div>
            </div>

            <button className="w-full py-4 bg-[#4a4a4a] hover:bg-[#3a3a3a] text-white text-sm font-medium transition-colors mb-5 tracking-wide">
              Add Engraving & Gift Note Here
            </button>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a3ab6c] text-white text-sm rounded-full mb-7 font-medium">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              In stock, ready to ship
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="flex items-center border border-[#d1d1d1] shrink-0">
                <button
                  onClick={() => quantity > 1 && setQuantity(q => q - 1)}
                  className="px-4 py-4 hover:bg-black/5 transition-colors"
                >
                  <Minus className="w-4 h-4 text-[#2c2c2c]" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-4 py-4 hover:bg-black/5 transition-colors"
                >
                  <Plus className="w-4 h-4 text-[#2c2c2c]" />
                </button>
              </div>

              <button
                className="btn-buy flex-1 py-4 bg-[#2c2c2c] hover:bg-[#1a1a1a] text-white text-sm font-medium transition-colors tracking-wide"
                onClick={(e) => {
                  addRipple(e);
                  addToCart({
                    id: `${product.id}-${selectedColour?.name || 'default'}`,
                    productId: product.id,
                    title: product.title,
                    price: product.price,
                    image: displayImage,
                    colorName: selectedColour?.name || null,
                    colorHex: selectedColour?.hex || null,
                    quantity: quantity
                  });
                }}
              >
                Add To Cart
              </button>
            </div>

            <button
              className="btn-buy w-full py-4 border border-[#d1d1d1] bg-[#f2f0ea] hover:bg-[#e8e6e0] text-[#2c2c2c] font-medium transition-colors mb-4 tracking-wide"
              onClick={(e) => {
                addRipple(e);
                setTimeout(() => navigate("/contact"), 220);
              }}
            >
              Add Engraving
            </button>

            <button
              className="btn-bulk w-full py-4 bg-[#2c2c2c] hover:bg-[#1a1a1a] text-white font-medium mb-10 tracking-wide text-sm"
              onClick={() => navigate("/contact")}
            >
              🧾 Buy in Bulk / Corporate Order
            </button>

            <div className="border-t border-[#d1d1d1]">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    value: "description",
                    label: "Description",
                    content: "Beautiful handcrafted resin bowl, perfect for your home decor. Each piece is unique and made with care, featuring mesmerizing swirls of color encased in high-quality resin and natural wood.",
                  },
                  {
                    value: "shipping",
                    label: "Need It Fast?",
                    content: "Express shipping options are available at checkout. Contact us for urgent requests.",
                  },
                  {
                    value: "timeframes",
                    label: "Shipping Timeframes",
                    content: "Standard shipping takes 5-7 business days. International shipping takes 10-15 business days depending on the destination.",
                  },
                  {
                    value: "returns",
                    label: "Returns & Exchanges",
                    content: "We accept returns within 14 days of delivery. Items must be in original condition. Custom engraved items are non-refundable.",
                  },
                ].map(item => (
                  <AccordionItem key={item.value} value={item.value} className="border-b border-[#d1d1d1]">
                    <AccordionTrigger className="hover:no-underline py-5 text-[15px] font-normal text-[#2c2c2c]">
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        <div className={`bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 transition-all duration-300 transform origin-right ${isChatOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}>
          <span className="text-sm font-medium text-gray-800">Chat with us</span>
          <span className="text-lg">👋</span>
        </div>
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          onMouseEnter={() => setIsChatOpen(true)}
          onMouseLeave={() => setIsChatOpen(false)}
          className="w-14 h-14 bg-[#7a855b] hover:bg-[#6a754b] rounded-full flex items-center justify-center text-white shadow-xl transition-transform hover:scale-105"
          aria-label="Open chat"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
          </svg>
        </button>
      </div>
    </Layout>
  );
}
