import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const footerSections = [
  {
    title: "ABOUT",
    links: ["Our Story", "Careers", "Sustainability", "Corporate Responsibility"],
  },
  {
    title: "ACCOUNT",
    links: ["My Account", "Order History", "Wishlist", "Address Book"],
  },
  {
    title: "CUSTOMER SERVICE",
    links: ["Contact Us", "FAQs", "Shipping Information", "Returns & Exchanges", "Size Guide"],
  },
];

const socialLinks = ["Instagram", "Facebook", "YouTube", "X", "Pinterest"];

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        {footerSections.map((section) => (
          <div key={section.title} className="border-b border-border">
            <button
              onClick={() =>
                setOpenSection(openSection === section.title ? null : section.title)
              }
              className="w-full flex items-center justify-between px-4 py-4"
            >
              <span className="text-xs font-body font-semibold tracking-luxury uppercase">
                {section.title}
              </span>
              {openSection === section.title ? (
                <Plus className="w-4 h-4 text-primary rotate-45 transition-transform" strokeWidth={1.5} />
              ) : (
                <Plus className="w-4 h-4 text-primary transition-transform" strokeWidth={1.5} />
              )}
            </button>
            {openSection === section.title && (
              <div className="px-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-1 duration-200">
                {section.links.map((link) => (
                  <button
                    key={link}
                    className="block text-sm font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Social */}
        <div className="flex items-center justify-center gap-6 py-8">
          {socialLinks.map((name) => (
            <button
              key={name}
              aria-label={name}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs font-body font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {name[0]}
            </button>
          ))}
        </div>

        <div className="text-center pb-8 px-4">
          <p className="text-[10px] font-body tracking-luxury text-muted-foreground uppercase">
            © Copyright 2026 Ralph Lauren Media LLC
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
