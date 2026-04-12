import { ProductColor } from "@/data/productData";

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: string;
  onColorChange: (colorId: string) => void;
}

const ColorSelector = ({ colors, selectedColor, onColorChange }: ColorSelectorProps) => {
  const selected = colors.find((c) => c.id === selectedColor);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xs font-body font-semibold tracking-luxury uppercase">
          Colour:
        </span>
        <span className="text-xs font-body tracking-wide">{selected?.name}</span>
      </div>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onColorChange(color.id)}
            className={`w-12 h-12 rounded-sm overflow-hidden transition-all duration-200 ${
              selectedColor === color.id
                ? "ring-2 ring-primary ring-offset-2"
                : "hover:ring-1 hover:ring-border hover:ring-offset-1"
            }`}
            aria-label={color.name}
          >
            <img
              src={color.swatchImage}
              alt={color.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
