import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020b14]">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop"
          alt="Industrial Manufacturing"
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020b14] via-[#020b14]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b14] via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            Leading Fluid Distribution
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">invisible lines</span> of industry.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed"
          >
            Premium compressed air networks, safety couplings, and pneumatic tools designed for maximum efficiency, safety, and durability in modern manufacturing environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-md text-base font-bold transition-all shadow-lg shadow-brand-600/30 group">
              Explore Catalog
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-md text-base font-bold transition-all backdrop-blur-sm group">
              <Play className="w-5 h-5 fill-current" />
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>

      <div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: `40px 40px`
        }}
      ></div>
    </div>
  );
}
