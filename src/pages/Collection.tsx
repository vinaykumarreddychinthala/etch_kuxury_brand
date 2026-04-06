import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import Layout from "@/components/Layout";

import productBlackSilver from "@/assets/product-black-silver.jpg";
import productOceanBlue from "@/assets/product-ocean-blue.jpg";
import productMonochrome from "@/assets/product-monochrome.jpg";
import productRiverTable from "@/assets/product-river-table.jpg";
import productCoasters from "@/assets/product-coasters.jpg";
import productNamePlaque from "@/assets/product-name-plaque.jpg";

import item1 from "@/assets/item1.jpeg";
import item2 from "@/assets/item2.jpeg";
import item3 from "@/assets/item3.jpeg";
import item4 from "@/assets/item4.jpeg";

type Category = "All" | "Trays" | "Paddles & Boards" | "Coasters" | "Napkin Rings" | "Vases" | "Wall Art" | "Gift Bundles";

const products = [
  { name: "Midnight Silver Tray", price: "₹1", image: productBlackSilver, cat: "Trays" as Category },
  { name: "Ocean Drift Tray", price: "₹5,200", image: productOceanBlue, cat: "Trays" as Category },
  { name: "Monochrome Board", price: "₹3,800", image: productMonochrome, cat: "Boards" as Category },
  { name: "Resin River Table", price: "₹28,000", image: productRiverTable, cat: "Tables" as Category },
  { name: "Noir Coaster Set", price: "₹1,800", image: productCoasters, cat: "Gift Bundles" as Category },
  { name: "Custom Name Plaque", price: "₹2,500", image: productNamePlaque, cat: "Gift Bundles" as Category },

  // 🔥 Added items (same as index)
  { name: "Golden River Tray", price: "₹5,800", image: item1, cat: "Trays" as Category },
  { name: "Walnut Glow Board", price: "₹4,200", image: item2, cat: "Boards" as Category },
  { name: "Black Marble Resin Tray", price: "₹6,200", image: item3, cat: "Trays" as Category },
  { name: "Emerald Flow Tray", price: "₹6,500", image: item4, cat: "Trays" as Category },
];

const categories: Category[] = ["All" , "Trays" , "Paddles & Boards" , "Coasters" , "Napkin Rings" , "Vases" , "Wall Art" , "Gift Bundles"];

export default function Collection() {
  const [active, setActive] = useState<Category>("All");
  const containerRef = useScrollFadeIn();

  const filtered =
    active === "All" ? products : products.filter((p) => p.cat === active);

  return (
    <Layout>
      <div ref={containerRef}>
        <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl text-center font-light tracking-wide mb-4">
            The Collection
          </h1>

          <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-12">
            Each piece, a conversation starter
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-4 md:gap-8 mb-16 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-xs tracking-[0.2em] uppercase pb-1 border-b ${
                  active === cat
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 🔥 3 COLUMN GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filtered.map((p) => (
              <Link
                key={p.name}
                to={`/product/${p.name.replace(/\s+/g, "-").toLowerCase()}`}
                className="group block transition-opacity duration-300 hover:opacity-90"
              >
                <div className="relative overflow-hidden aspect-square bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="font-heading text-lg">{p.name}</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Starting {p.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}