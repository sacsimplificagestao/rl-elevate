import { useState } from "react";
import { ArrowRight, X, Tag, Truck, CreditCard, MessageSquare, Star } from "lucide-react";
import { ProductData } from "@/data/productData";

interface ProductAccordionProps {
  product: ProductData;
}

const sections = [
  { key: "details", label: "PRODUCT DETAILS", icon: Tag },
  { key: "delivery", label: "DELIVERY & RETURNS", icon: Truck },
  { key: "payments", label: "PAYMENT OPTIONS", icon: CreditCard },
  { key: "reviews", label: "PRODUCT REVIEWS", icon: MessageSquare },
] as const;

const ProductAccordion = ({ product }: ProductAccordionProps) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const renderContent = (key: string) => {
    switch (key) {
      case "details":
        return (
          <div className="space-y-6">
            <h3 className="text-sm font-body font-semibold tracking-luxury uppercase">Details</h3>
            <ul className="space-y-3">
              {product.details.map((detail, i) => (
                <li key={i} className="text-sm font-body leading-relaxed text-foreground/80 flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        );
      case "delivery":
        return (
          <div className="space-y-4">
            {product.delivery.split("\n\n").map((p, i) => (
              <p key={i} className="text-sm font-body leading-relaxed text-foreground/80">{p}</p>
            ))}
          </div>
        );
      case "payments":
        return (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-body font-semibold tracking-luxury uppercase mb-3">Credit Cards:</h4>
              <ul className="space-y-2">
                {product.payments.cards.map((c) => (
                  <li key={c} className="text-sm font-body text-foreground/80 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-body font-semibold tracking-luxury uppercase mb-3">Other Forms of Payment:</h4>
              <ul className="space-y-2">
                {product.payments.other.map((p) => (
                  <li key={p} className="text-sm font-body text-foreground/80 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" strokeWidth={1.5} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs font-body text-muted-foreground italic leading-relaxed">
              Please note that third party terms and conditions may apply for the use of Additional Methods. Please make sure you read them carefully at checkout before using the Additional Methods.
            </p>
          </div>
        );
      case "reviews":
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.reviews.average) ? "fill-primary text-primary" : "text-border"}`}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm font-body">{product.reviews.average} out of 5</span>
              <span className="text-xs font-body text-muted-foreground">({product.reviews.count} reviews)</span>
            </div>
            <div className="space-y-6">
              {product.reviews.items.map((review, i) => (
                <div key={i} className="border-t border-border pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3 h-3 ${j < review.rating ? "fill-primary text-primary" : "text-border"}`}
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                    {review.verified && (
                      <span className="text-[10px] font-body tracking-wider text-muted-foreground uppercase">Verified</span>
                    )}
                  </div>
                  <h4 className="text-sm font-body font-semibold">{review.title}</h4>
                  <p className="text-sm font-body text-foreground/80 leading-relaxed">{review.body}</p>
                  <p className="text-xs font-body text-muted-foreground">{review.author} · {review.date}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div className="border-t border-border">
        {sections.map((section) => (
          <button
            key={section.key}
            onClick={() => setOpenSection(section.key)}
            className="w-full flex items-center justify-between py-5 border-b border-border group"
          >
            <div className="flex items-center gap-3">
              <section.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-xs font-body font-semibold tracking-luxury uppercase">
                {section.label}
                {section.key === "reviews" && ` (${product.reviews.count})`}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </button>
        ))}
      </div>

      {/* Slide-over panel */}
      {openSection && (
        <div className="fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenSection(null)} />
          <div className="absolute inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="font-display text-lg">
                {sections.find((s) => s.key === openSection)?.label.replace(/ \(\d+\)/, "")}
              </h2>
              <button onClick={() => setOpenSection(null)} className="p-1">
                <X className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(100vh-60px)]">
              {renderContent(openSection)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductAccordion;
