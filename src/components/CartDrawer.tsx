import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart, formatPrice } from "@/contexts/CartContext";
import { ScrollArea } from "@/components/ui/scroll-area";

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, cartTotal, totalItems } = useCart();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative group hover:bg-transparent">
          <ShoppingBag className="h-5 w-5 text-foreground/70 group-hover:text-primary transition-colors" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-border/40">
        <SheetHeader className="p-6 border-b border-border/40">
          <SheetTitle className="text-xl font-heading tracking-wide flex items-center gap-2">
            YOUR CART
            <span className="text-sm font-normal text-muted-foreground ml-2">
              ({totalItems} items)
            </span>
          </SheetTitle>
        </SheetHeader>

        <ScrollArea className="flex-1 w-full">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center p-6 text-muted-foreground space-y-4">
              <ShoppingBag className="h-12 w-12 opacity-20" />
              <p>Your cart is empty.</p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setOpen(false);
                  navigate("/collection");
                }}
                className="mt-4"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-6 p-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="h-24 w-24 rounded-sm overflow-hidden bg-secondary/50 shrink-0 border border-border/50">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="h-full w-full object-cover mix-blend-multiply transition-transform group-hover:scale-105" 
                    />
                  </div>
                  
                  <div className="flex flex-col flex-1 py-1 flex-wrap">
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-medium text-sm leading-tight text-foreground/90">
                        {item.title}
                      </h4>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {item.colorName && (
                      <div className="flex items-center gap-1.5 mt-1">
                        <span 
                          className="w-2.5 h-2.5 rounded-full border border-border/50 shadow-sm"
                          style={{ backgroundColor: item.colorHex || '#ccc' }}
                        />
                        <span className="text-xs text-muted-foreground">{item.colorName}</span>
                      </div>
                    )}
                    
                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity Control */}
                      <div className="flex items-center border border-border/60 rounded-sm">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-secondary/80 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-xs font-medium w-6 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-secondary/80 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      
                      <span className="text-sm font-medium">{item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        {items.length > 0 && (
          <div className="p-6 bg-secondary/30 border-t border-border/40 mt-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium">Subtotal</span>
              <span className="text-lg font-medium">{formatPrice(cartTotal)}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-6 text-center">
              Shipping & taxes calculated at checkout
            </p>
            <Button 
              className="w-full h-12 rounded-sm text-sm tracking-wide bg-[#2c2c2c] hover:bg-[#1a1a1a]"
              onClick={() => {
                setOpen(false);
                navigate("/contact");
              }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
