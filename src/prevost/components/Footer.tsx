import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="company" className="bg-[#020b14] text-slate-300 pt-24 pb-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 mb-20">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-9 h-9 bg-brand-600 rounded flex items-center justify-center">
                <div className="w-4 h-4 rounded-full border-[2.5px] border-white"></div>
              </div>
              <span className="font-bold text-2xl tracking-tight text-white uppercase ml-1">
                Prevost
              </span>
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
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Compressed Air Network</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Compressed Air Treatment</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Pneumatic Tools</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Hoses & Hose Reels</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">News & Events</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Quality & Certifications</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Global Presence</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-sm">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest product innovations and industry insights.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Business Email"
                className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-brand-600 hover:bg-brand-500 text-white rounded px-4 flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Prevost. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6 justify-center">
            <a href="#" className="hover:text-white transition-colors">Legal Mentions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Sales</a>
            <button className="flex items-center gap-2 ml-4 hover:text-white transition-colors">
              <Globe className="w-3.5 h-3.5" />
              <span className="uppercase tracking-wider">Global (EN)</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
