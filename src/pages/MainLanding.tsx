import { motion } from 'motion/react';
import { ArrowRight, Building2, Settings, ShieldCheck, Globe2, Award, ChevronRight } from 'lucide-react';

export default function MainLanding() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-900 selection:text-white">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 py-6 px-4 md:px-8 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-white tracking-tight uppercase">
          Purity <span className="text-blue-400">Brands</span>
        </div>
        <a href="#contact" className="text-xs md:text-sm font-bold text-white uppercase tracking-widest hover:text-blue-400 transition-colors">
          Contact Corporate
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512632578888-169bbbc64f33?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/80 to-slate-900"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-400 font-bold uppercase tracking-[0.3em] mb-6 text-xs md:text-sm"
          >
            The GCC's Premier Distribution Partner
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight"
          >
            Elevating Standards with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Global Excellence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            Purity Brands is the trusted gateway for world-class architectural and industrial solutions in the Middle East. We partner exclusively with industry leaders to shape the future of the GCC.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-sm transition-all rounded-sm shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)]">
              Explore Our Portfolio <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust & Authority */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-xl shadow-black/50 rotate-3 hover:rotate-0 transition-transform">
                <ShieldCheck className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Uncompromising Quality</h3>
              <p className="text-slate-400 leading-relaxed font-light">We carefully curate our brand partnerships, ensuring every product meets the highest international standards of durability and performance.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-xl shadow-black/50 -rotate-3 hover:rotate-0 transition-transform">
                <Globe2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">GCC Expertise</h3>
              <p className="text-slate-400 leading-relaxed font-light">Headquartered in Dubai, our deep understanding of the regional market ensures seamless supply, compliance, and strategic deployment.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 border border-slate-700 shadow-xl shadow-black/50 rotate-3 hover:rotate-0 transition-transform">
                <Award className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-wide">Exclusive Partnerships</h3>
              <p className="text-slate-400 leading-relaxed font-light">We act as the exclusive gateway for premier global manufacturers, bringing transformative technologies directly to developers and engineers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Our Elite Brands</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">World-Class Solutions.</h3>
            <div className="w-24 h-1.5 bg-slate-900 mx-auto mt-8"></div>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {/* Nichiha */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-emerald-600 translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Nichiha Architectural Panels" className="w-full h-[400px] md:h-[500px] object-cover shadow-2xl" />
                <div className="absolute top-6 left-6 bg-white px-4 py-2 font-bold text-sm tracking-widest uppercase shadow-lg text-emerald-700">Architecture</div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-emerald-600 text-white flex items-center justify-center shadow-lg">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-4xl font-extrabold text-slate-900 uppercase tracking-wide">Nichiha Japan</h4>
                </div>
                <p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
                  The global pioneer in advanced fiber cement cladding. Japanese precision engineered for extreme durability and breathtaking architectural aesthetics across the GCC.
                </p>
                <ul className="space-y-4 mb-12 text-slate-700 font-medium">
                  <li className="flex items-center gap-4"><div className="p-1 bg-emerald-100 rounded-full"><ChevronRight className="w-4 h-4 text-emerald-700" /></div> Premium exterior and interior facade panels</li>
                  <li className="flex items-center gap-4"><div className="p-1 bg-emerald-100 rounded-full"><ChevronRight className="w-4 h-4 text-emerald-700" /></div> NichiGuard&trade; self-cleaning technology</li>
                  <li className="flex items-center gap-4"><div className="p-1 bg-emerald-100 rounded-full"><ChevronRight className="w-4 h-4 text-emerald-700" /></div> Built for the harsh GCC climate</li>
                </ul>
                <a href="/nichiha" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-emerald-600 text-white font-bold uppercase tracking-widest text-sm transition-colors rounded-sm group">
                  Enter Nichiha Portal <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>

            {/* Prevost */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-blue-600 -translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:-translate-x-6 group-hover:translate-y-6"></div>
                <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Prevost Industrial Systems" className="w-full h-[400px] md:h-[500px] object-cover shadow-2xl" />
                <div className="absolute top-6 right-6 bg-white px-4 py-2 font-bold text-sm tracking-widest uppercase shadow-lg text-blue-700">Industrial</div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center shadow-lg">
                    <Settings className="w-7 h-7" />
                  </div>
                  <h4 className="text-4xl font-extrabold text-slate-900 uppercase tracking-wide">Prevost</h4>
                </div>
                <p className="text-xl text-slate-600 mb-8 font-light leading-relaxed">
                  The gold standard in compressed air networks and fluid distribution. Delivering uncompromising safety, efficiency, and innovation to industrial sectors worldwide.
                </p>
                <ul className="space-y-4 mb-12 text-slate-700 font-medium">
                  <li className="flex items-center gap-4"><div className="p-1 bg-blue-100 rounded-full"><ChevronRight className="w-4 h-4 text-blue-700" /></div> High-quality piping systems and couplings</li>
                  <li className="flex items-center gap-4"><div className="p-1 bg-blue-100 rounded-full"><ChevronRight className="w-4 h-4 text-blue-700" /></div> Zero leak guarantees for maximum ROI</li>
                  <li className="flex items-center gap-4"><div className="p-1 bg-blue-100 rounded-full"><ChevronRight className="w-4 h-4 text-blue-700" /></div> European engineering excellence</li>
                </ul>
                <a href="/prevost" className="inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-widest text-sm transition-colors rounded-sm group">
                  Enter Prevost Portal <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate CTA */}
      <section id="contact" className="py-20 lg:py-32 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight">Partner With Excellence</h2>
          <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
            Whether you are a global manufacturer looking to enter the GCC market, or a regional developer seeking premium materials, Purity Brands is your strategic ally.
          </p>
          <a href="mailto:info@puritypts.com" className="inline-flex items-center justify-center px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 rounded-sm">
            Contact Corporate Office
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-2xl font-extrabold text-white tracking-tight uppercase mb-6">
            Purity <span className="text-blue-500">Brands</span>
          </div>
          <p className="text-sm font-medium leading-loose">
            &copy; {new Date().getFullYear()} Purity Brands GCC. All rights reserved. <br/>
            Headquartered in Dubai, United Arab Emirates.
          </p>
        </div>
      </footer>
    </div>
  );
}
