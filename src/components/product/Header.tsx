import { Search, ShoppingBag, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="flex items-center justify-between px-4 h-14 md:h-16 max-w-7xl mx-auto">
        <span className="font-body text-sm md:text-base font-semibold tracking-luxury text-primary uppercase">
          Ralph Lauren
        </span>
        <div className="flex items-center gap-5">
          <button aria-label="Search" className="text-primary">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button aria-label="Shopping bag" className="text-primary">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <button aria-label="Menu" className="text-primary">
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
