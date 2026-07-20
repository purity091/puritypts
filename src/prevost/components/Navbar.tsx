import { Globe, Menu, Search, X, ChevronDown } from "lucide-react";
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
    { name: "Products", to: "/products" },
    { name: "Sectors", to: "/sectors" },
    { name: "Innovation", to: "/innovation" },
    { name: "Services", to: "/services" },
    { name: "Company", to: "/company" },
  ];

  return (
    <>
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm font-medium py-1.5 px-4 min-h-[32px] flex justify-between items-center z-50 relative w-full">
        <a href="/" className="font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-wider text-[10px] sm:text-xs whitespace-nowrap">
          &larr; Purity Brands
        </a>
        <div className="flex items-center gap-2 text-center flex-1 justify-center">
          <span className="text-brand-400 font-bold flex items-center gap-1">📍 REGIONAL UPDATE:</span> 
          <span className="hidden lg:inline">Visit our Official GCC Distribution Branch <strong>Purity Premium (بيورتي بريميزم)</strong> in Dubai.</span>
          <span className="hidden sm:inline lg:hidden">Official GCC Distributor: Purity Premium.</span>
        </div>
        <div className="w-[100px] hidden md:block"></div>
      </div>
      <nav className={`fixed left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'top-0 bg-white/90 backdrop-blur-lg border-b border-slate-200/50 shadow-sm py-2' : 'top-[32px] sm:top-[36px] bg-white py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" title="Back to Purity Brands" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
             <div className="w-9 h-9 bg-brand-600 rounded flex items-center justify-center group-hover:bg-brand-700 transition-colors">
                <div className="w-4 h-4 rounded-full border-[2.5px] border-white"></div>
             </div>
            <span className="font-bold text-2xl tracking-tight text-slate-900 uppercase ml-1">
              Prevost
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors flex items-center gap-1"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="text-slate-400 hover:text-brand-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="h-4 w-px bg-slate-200"></div>
            <button 
              className="flex items-center gap-2 text-slate-500 hover:text-brand-600 transition-colors cursor-pointer group"
            >
              <Globe className="w-4 h-4 text-slate-400 group-hover:text-brand-600 transition-colors" />
              <span className="text-xs font-bold uppercase tracking-wider">
                EN
              </span>
              <ChevronDown className="w-3 h-3 opacity-50" />
            </button>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-md text-sm font-bold transition-all shadow-md shadow-brand-500/20 hover:shadow-brand-500/40">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4 px-3">
                <button className="w-full bg-brand-600 text-white px-5 py-3 rounded-md font-bold shadow-sm">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </nav>
    </>
  );
}
