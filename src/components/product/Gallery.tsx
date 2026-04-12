import { useState, useRef, useEffect, useCallback } from "react";

interface GalleryProps {
  images: string[];
  badge?: string;
}

const Gallery = ({ images, badge }: GalleryProps) => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  const goTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(index, images.length - 1)));
  }, [images.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && current < images.length - 1) goTo(current + 1);
      else if (diff < 0 && current > 0) goTo(current - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-secondary" ref={containerRef}>
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((img, i) => (
          <div key={`${img}-${i}`} className="w-full flex-shrink-0">
            <div className="aspect-[3/4] w-full">
              <img
                src={img}
                alt={`Product view ${i + 1}`}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>

      {badge && (
        <span className="absolute top-4 right-4 bg-background text-primary text-[10px] font-body font-semibold tracking-luxury px-3 py-1.5 uppercase">
          {badge}
        </span>
      )}

      <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm text-primary text-xs font-body tracking-wider px-3 py-1.5">
        {current + 1} | {images.length}
      </div>

      {/* Dot indicators for desktop */}
      <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-primary scale-110" : "bg-primary/30"
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
