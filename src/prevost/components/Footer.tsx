import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="company" className="bg-[#020b14] text-slate-300 pt-24 pb-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 mb-20">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img
                src="/logo_prevost.png"
                alt="Prevost"
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              Global leader in compressed air piping networks, fluid distribution, and pneumatic safety equipment. Innovating for industry since 1978.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1">Global HQ (France)</strong>
                  <p>15 Rue du Pré Faucon<br/>74940 Annecy-le-Vieux, France</p>
                </div>
              </div>
              <div className="flex items-start gap-4 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-white block mb-1">GCC Branch - Purity Premium (بيورتي بريميزم)</strong>
                  <p>Showroom 4, Jebel Ali Free Zone (JAFZA)<br/>Dubai, United Arab Emirates</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Products</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link to="/products/quick-couplings" className="hover:text-brand-400 transition-colors">Quick Couplings</Link></li>
              <li><Link to="/products/compressed-air-network" className="hover:text-brand-400 transition-colors">Compressed Air Network</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Compressed Air Treatment</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Pneumatic Tools</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Hoses & Hose Reels</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Quality & Certifications</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Global Presence</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Contact Sales</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Speak directly with our sales team on WhatsApp for product support, pricing, and project inquiries.
            </p>
            <a
              href="https://wa.me/971554330532"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-500"
            >
              WhatsApp Sales: +971 55 433 0532
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Prevost. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <a href="#" className="hover:text-white transition-colors">Legal Mentions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Sales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
