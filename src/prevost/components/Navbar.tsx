import { Menu, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Our Products", to: "/products" },
    { name: "Our Markets", to: "/sectors" },
    { name: "Videos", to: "/services" },
    { name: "Our Services", to: "/services" },
    { name: "Our Company", to: "/company" },
  ];

  return (
    <>
      <div className="relative z-50 flex min-h-[32px] w-full items-center justify-between border-b border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 sm:text-sm">
        <a href="/" className="flex items-center gap-1 whitespace-nowrap text-[10px] font-semibold text-slate-500 transition-colors hover:text-slate-900 sm:text-xs">
          &larr; Purity Brands
        </a>
        <div className="flex flex-1 items-center justify-center gap-2 text-center">
          <span className="hidden font-semibold text-brand-700 sm:inline">Regional update</span>
          <span className="hidden lg:inline">Visit our official GCC distribution branch <strong>Purity Premium</strong> in Dubai.</span>
          <span className="hidden sm:inline lg:hidden">Official GCC distributor: Purity Premium.</span>
        </div>
        <div className="hidden w-[100px] md:block"></div>
      </div>

      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "top-0 border-b border-slate-200 bg-white/95 py-2 shadow-sm backdrop-blur-lg"
            : "top-[32px] border-b border-slate-200/80 bg-white/95 py-3 backdrop-blur-lg sm:top-[36px]"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" title="Back to Purity Brands" className="group flex shrink-0 items-center gap-2">
              <img
                src="/logo_prevost.png"
                alt="Prevost"
                className="h-10 w-auto transition-transform group-hover:scale-[1.02] sm:h-11"
              />
            </a>

            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 p-1 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-950"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <button className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-500 transition-colors hover:text-slate-950">
                <Search className="h-5 w-5" />
              </button>
              <a href="#documents" className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-950">
                Documents
              </a>
              <a href="mailto:info@puritypts.com" className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-b border-slate-200 bg-white lg:hidden"
            >
              <div className="space-y-1 px-4 pb-6 pt-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-4 flex flex-col gap-4 border-t border-slate-100 px-3 pt-4">
                  <a href="#documents" className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 text-center font-medium text-slate-900 shadow-sm">
                    Documents
                  </a>
                  <a href="mailto:info@puritypts.com" className="w-full rounded-xl bg-slate-950 px-5 py-3 text-center font-semibold text-white shadow-sm">
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
