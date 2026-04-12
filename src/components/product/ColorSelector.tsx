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
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.id}
            onClick={() => onColorChange(color.id)}
            className={`w-14 h-14 rounded-sm border-2 transition-all duration-200 ${
              selectedColor === color.id
                ? "border-primary"
                : "border-transparent hover:border-border"
            }`}
            aria-label={color.name}
          >
            <div
              className="w-full h-full rounded-[1px]"
              style={{ backgroundColor: color.hex }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
