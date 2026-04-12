import { ProductSize } from "@/data/productData";

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: string | null;
  onSizeChange: (size: string) => void;
}

const SizeSelector = ({ sizes, selectedSize, onSizeChange }: SizeSelectorProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-body font-semibold tracking-luxury uppercase">
          Size:
        </span>
        <button className="text-xs font-body underline underline-offset-4 text-muted-foreground hover:text-primary transition-colors">
          Size Chart
        </button>
      </div>

      <button className="text-xs font-body text-primary underline underline-offset-4 flex items-center gap-1 mb-1">
        What's My Size?
      </button>

      <div className="grid grid-cols-6 gap-2">
        {sizes.map((size) => (
          <button
            key={size.label}
            onClick={() => size.available && onSizeChange(size.label)}
            disabled={!size.available}
            className={`h-12 flex items-center justify-center text-sm font-body font-medium border transition-all duration-200 ${
              !size.available
                ? "border-border text-muted-foreground/40 cursor-not-allowed line-through"
                : selectedSize === size.label
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-primary hover:border-primary"
            }`}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
