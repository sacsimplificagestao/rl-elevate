import { useState } from "react";
import { Heart, ChevronRight, Truck } from "lucide-react";
import { toast } from "sonner";
import { productData } from "@/data/productData";
import Header from "@/components/product/Header";
import Gallery from "@/components/product/Gallery";
import ColorSelector from "@/components/product/ColorSelector";
import SizeSelector from "@/components/product/SizeSelector";
import ProductAccordion from "@/components/product/ProductAccordion";
import StickyCTA from "@/components/product/StickyCTA";
import Newsletter from "@/components/product/Newsletter";
import Footer from "@/components/product/Footer";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState(productData.colors[1].id); // Black default
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [wishlisted, setWishlisted] = useState(false);

  const currentColor = productData.colors.find((c) => c.id === selectedColor)!;

  const handleAddToBag = () => {
    window.location.href = "https://uar6u4-z3.myshopify.com/checkouts/cn/hWNAjWXjVvXOCQ2UgmJXSYJF/pt-br?_r=AQABaH9nc-yBGWE4hYTRmI1_PKg3SXvHUGZ_VYx6AlHv";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Spacer for fixed header */}
      <div className="h-14 md:h-16" />

      {/* Gallery */}
      <Gallery images={currentColor.images} badge="SELLING FAST" />

      {/* Product Info */}
      <div className="px-4 md:px-8 max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="py-5">
          <div className="flex items-center gap-1.5 flex-wrap">
            {productData.breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-muted-foreground text-[10px]">/</span>}
                <button className="text-[10px] font-body tracking-luxury uppercase text-muted-foreground hover:text-primary transition-colors">
                  {crumb}
                </button>
              </span>
            ))}
          </div>
        </nav>

        {/* Title & Price */}
        <div className="space-y-2 pb-4">
          <div className="flex items-start justify-between gap-4">
            <h1 className="font-display text-2xl md:text-3xl leading-tight text-primary">
              {productData.name}
            </h1>
            <button
              onClick={() => setWishlisted(!wishlisted)}
              className="mt-1 flex-shrink-0"
              aria-label="Add to wishlist"
            >
              <Heart
                className={`w-6 h-6 transition-colors ${
                  wishlisted ? "fill-primary text-primary" : "text-primary"
                }`}
                strokeWidth={1.5}
              />
            </button>
          </div>
          <p className="text-sm font-body text-muted-foreground">{productData.brand}</p>
          <p className="text-lg font-body font-medium text-primary">
            {productData.price.toFixed(2).replace(".", ",")} {productData.currency}
          </p>
          <div className="flex flex-col gap-0.5 pt-1">
            {productData.badges.map((badge) => (
              <span
                key={badge}
                className="text-[10px] font-body font-bold tracking-luxury uppercase text-primary"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="py-6 border-t border-border">
          <ColorSelector
            colors={productData.colors}
            selectedColor={selectedColor}
            onColorChange={setSelectedColor}
          />
        </div>

        {/* Size Selector */}
        <div className="py-6 border-t border-border">
          <SizeSelector
            sizes={productData.sizes}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
        </div>

        {/* Personalization */}
        <div className="py-4 border-t border-border">
          <button className="w-full flex items-center justify-between group">
            <span className="text-[10px] font-body font-semibold tracking-luxury uppercase">
              {productData.personalization.label} ({productData.personalization.price.toFixed(2).replace(".", ",")} {productData.currency})
            </span>
            <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </button>
        </div>

        {/* Add to Bag (desktop) */}
        <div className="py-6 border-t border-border space-y-4">
          <button
            onClick={handleAddToBag}
            className="hidden md:block w-full bg-primary text-primary-foreground py-4 text-xs font-body font-semibold tracking-luxury uppercase transition-opacity hover:opacity-90"
          >
            Add to Bag
          </button>



          {/* Delivery */}
          <div className="flex items-start gap-3 pt-2">
            <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={1.5} />
            <div className="space-y-1">
              <p className="text-[10px] font-body font-semibold tracking-luxury uppercase">
                Free Standard Delivery on All Orders
              </p>
              <p className="text-xs font-body text-muted-foreground">
                Standard Delivery: Receive by Thursday, April 16
              </p>

            </div>
          </div>
        </div>

        {/* Editorial Image */}
        <div className="py-4">
          <div className="aspect-square w-full bg-secondary">
            <img
              src={currentColor.images[1] || currentColor.images[0]}
              alt="Product detail"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Description */}
        <div className="py-8">
          <p className="font-display text-base md:text-lg leading-relaxed text-primary">
            {productData.description}
          </p>
        </div>

        {/* Accordions */}
        <ProductAccordion product={productData} />
      </div>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />

      {/* Sticky CTA Mobile */}
      <StickyCTA onAddToBag={handleAddToBag} />

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Index;
