import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MessageCircle, Minus, Plus, Star } from "lucide-react";
import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

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



const getProductDetails = (id: string | undefined) => {
  const productsDatabase: Record<string, any> = {
    // Collection
    "black-&-silver-serving-tray": { title: "Black & Silver Serving Tray", price: "₹4,500", images: [productBlackSilver, productMonochrome, productOceanBlue] },
    "ocean-blue-tray": { title: "Ocean Blue Tray", price: "₹5,200", images: [productOceanBlue, productMonochrome, productBlackSilver] },
    "monochrome-cheese-board": { title: "Monochrome Cheese Board", price: "₹3,800", images: [productMonochrome, productBlackSilver, productOceanBlue] },
    "resin-river-table": { title: "Resin River Table", price: "₹28,000", images: [productRiverTable, productMonochrome, productBlackSilver] },
    "coaster-set": { title: "Coaster Set", price: "₹1,800", images: [productCoasters, productMonochrome, productBlackSilver] },
    "custom-name-plaque": { title: "Custom Name Plaque", price: "₹2,500", images: [productNamePlaque, productMonochrome, productBlackSilver] },
    
    // Index
    "midnight-silver-tray": { title: "Midnight Silver Tray", price: "₹4,500", images: [productBlackSilver, productMonochrome, productOceanBlue] },
    "ocean-drift-tray": { title: "Ocean Drift Tray", price: "₹5,200", images: [productOceanBlue, productMonochrome, productBlackSilver] },
    "monochrome-board": { title: "Monochrome Board", price: "₹3,800", images: [productMonochrome, productBlackSilver, productOceanBlue] },
    "noir-coaster-set": { title: "Noir Coaster Set", price: "₹1,800", images: [productCoasters, productMonochrome, productBlackSilver] },
    // 🔥 YOUR NEW ITEMS

"golden-river-tray": {
  title: "Golden River Tray",
  price: "₹5,800",
  images: [item1, item2, item3, item4],
},

"walnut-glow-board": {
  title: "Walnut Glow Board",
  price: "₹4,200",
  images: [item2, item1, item3],
},

"black-marble-resin-tray": {
  title: "Black Marble Resin Tray",
  price: "₹6,200",
  images: [item3, item1, item2],
},

"emerald-flow-tray": {
  title: "Emerald Flow Tray",
  price: "₹6,500",
  images: [item4, item1, item2],
},
  };

  const found = id ? productsDatabase[id] : null;
  
  if (found) {
    return { ...found, id, rating: 4.9, reviews: 101, };
  }
  
  // Fallback if not found
  return { 
    id: "not-found",
    title: "Resin Masterpiece", 
    price: "₹3,500", 
    rating: 4.9, 
    reviews: 84, 
    images: [productOceanBlue, productMonochrome, productBlackSilver], 
    
  };
};

export default function Product() {
  const { id } = useParams();
  const product = getProductDetails(id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Layout>
      <div className="pt-32 pb-24 px-6 max-w-[1400px] mx-auto min-h-screen">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Images */}
          <div className="flex-1 flex flex-col-reverse md:flex-row gap-4 lg:gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar md:w-24 shrink-0">
              {product.images.map((img, idx) => (
               <button
  key={idx}
  onClick={() => setSelectedImage(idx)}
  className={`relative aspect-square shrink-0 md:w-full overflow-hidden border-2 transition-all duration-300 ease-in-out transform ${
    selectedImage === idx
      ? "border-foreground scale-105 shadow-lg"
      : "border-transparent hover:scale-105 hover:shadow-md"
  }`}
>
  <img
    src={img}
    alt={`${product.title} view ${idx + 1}`}
    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
  />
</button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 relative aspect-square md:aspect-auto md:h-[700px] bg-secondary overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation Arrows (Optional, based on generic ecomm design) */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors shadow-sm"
                onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                aria-label="Previous image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center transition-colors shadow-sm"
                onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
                aria-label="Next image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="flex-1 max-w-md w-full">
            <h1 className="font-heading text-4xl mb-3 text-[#2c2c2c]">{product.title}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-[#8e9882]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground mr-2">{product.rating}</span>
              <span className="text-xs text-muted-foreground">| {product.reviews} reviews</span>
            </div>

            <p className="text-xl mb-8 text-[#2c2c2c]">{product.price}</p>

           

            <button className="w-full py-4 bg-[#4a4a4a] hover:bg-[#3a3a3a] text-white text-sm font-medium transition-colors mb-6 tracking-wide">
              Add Engraving & Gift Note Here
            </button>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#a3ab6c] text-white text-sm rounded-full mb-8 font-medium">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              In stock, ready to ship
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex items-center border border-[#d1d1d1] bg-transparent">
                <button onClick={handleDecreaseQuantity} className="px-4 py-4 hover:bg-black/5 transition-colors">
                  <Minus className="w-4 h-4 text-[#2c2c2c]" />
                </button>
                <span className="w-8 text-center text-sm font-medium">{quantity}</span>
                <button onClick={handleIncreaseQuantity} className="px-4 py-4 hover:bg-black/5 transition-colors">
                  <Plus className="w-4 h-4 text-[#2c2c2c]" />
                </button>
              </div>
              
            </div>

            <button className="w-full py-4 border border-[#d1d1d1] bg-[#f2f0ea] hover:bg-[#e8e6e0] text-[#2c2c2c] font-medium transition-colors mb-12 tracking-wide">
              Buy it now
            </button>

            <div className="border-t border-[#d1d1d1]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="description" className="border-b border-[#d1d1d1]">
                  <AccordionTrigger className="hover:no-underline py-5 text-[15px] font-normal text-[#2c2c2c]">
                    Description
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    Beautiful handcrafted resin bowl, perfect for your home decor. Each piece is unique and made with care, featuring mesmerizing swirls of color encased in high-quality resin and natural wood.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping" className="border-b border-[#d1d1d1]">
                  <AccordionTrigger className="hover:no-underline py-5 text-[15px] font-normal text-[#2c2c2c]">
                    Need It Fast?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    Express shipping options are available at checkout. Contact us for urgent requests.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="timeframes" className="border-b border-[#d1d1d1]">
                  <AccordionTrigger className="hover:no-underline py-5 text-[15px] font-normal text-[#2c2c2c]">
                    Shipping Timeframes
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    Standard shipping takes 5-7 business days. International shipping takes 10-15 business days depending on the destination.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns" className="border-b border-[#d1d1d1]">
                  <AccordionTrigger className="hover:no-underline py-5 text-[15px] font-normal text-[#2c2c2c]">
                    Returns & Exchanges
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    We accept returns within 14 days of delivery. Items must be in original condition. Custom engraved items are non-refundable.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Expanded Chat prompt - Optional, but shown in some screenshots */}
        <div className={`bg-white px-4 py-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-2 transition-all duration-300 transform origin-right ${isChatOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
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
