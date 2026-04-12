interface StickyCTAProps {
  onAddToBag: () => void;
}

const StickyCTA = ({ onAddToBag }: StickyCTAProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border p-4">
      <button
        onClick={onAddToBag}
        className="w-full bg-primary text-primary-foreground py-4 text-xs font-body font-semibold tracking-luxury uppercase transition-opacity hover:opacity-90 active:opacity-80"
      >
        Add to Bag
      </button>
    </div>
  );
};

export default StickyCTA;
