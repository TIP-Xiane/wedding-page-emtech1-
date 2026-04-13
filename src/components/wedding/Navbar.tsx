import { useEffect, useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Programme", href: "#programme" },
  { label: "Location", href: "#location" },
  { label: "Attire", href: "#attire" },
  { label: "RSVP", href: "#rsvp" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavItemClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }, 120);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            handleNavItemClick("#home");
          }}
          className="font-script text-2xl text-foreground hover:text-accent transition-colors"
        >
          R & J
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(event) => {
                  event.preventDefault();
                  handleNavItemClick(item.href);
                }}
                className="font-body text-sm uppercase tracking-[0.2em] text-wedding-charcoal hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Return to landing page icon */}
          <a
            href="https://emtech-landing-fawn.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center rounded-lg border border-border/50 bg-background p-2 text-foreground shadow-sm hover:border-accent/60 transition-colors"
            aria-label="Return to landing page"
          >
            <Home size={20} />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg border border-border/50 bg-background p-2 text-foreground shadow-sm hover:border-accent/60 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-x-0 top-[4.75rem] z-50 bg-background border-b border-border/40 shadow-2xl"
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {navItems.map((item) => (
                <li key={item.href} className="w-full text-center">
                  <a
                    href={item.href}
                    onClick={(event) => {
                      event.preventDefault();
                      handleNavItemClick(item.href);
                    }}
                    className="font-body block text-sm uppercase tracking-[0.2em] text-wedding-charcoal hover:text-wedding-gold transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
