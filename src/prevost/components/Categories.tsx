import { motion } from "motion/react";
import { ArrowRight, Wind, Network, Settings2, Wrench } from "lucide-react";

export function Categories() {
  const categories = [
    {
      id: "connections",
      title: "Connection Systems",
      description: "Prevo S1 safety couplings, quick-release fittings, and hose connectors for secure industrial grids.",
      icon: Settings2,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      color: "from-brand-600/80 to-brand-900/90"
    },
    {
      id: "distribution",
      title: "Piping Networks",
      description: "100% aluminum compressed air networks (Prevost Piping System - PPS) for leak-free operations.",
      icon: Network,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
      color: "from-slate-700/80 to-slate-950/90"
    },
    {
      id: "treatment",
      title: "Air Treatment",
      description: "Advanced filtration, regulation, and lubrication units to guarantee optimal air quality.",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1621609764015-385a4436f561?q=80&w=800&auto=format&fit=crop",
      color: "from-brand-600/80 to-brand-900/90"
    },
    {
      id: "tools",
      title: "Pneumatic Tools",
      description: "Ergonomic blowguns, impact wrenches, and pneumatic equipment for intensive applications.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop",
      color: "from-slate-700/80 to-slate-950/90"
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">
              Our Expertise
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive solutions for fluid energy.
            </h3>
          </div>
          <button className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 px-6 py-3 rounded-md text-sm font-bold transition-all group shrink-0">
            View Full Catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-brand-500/10 transition-all border border-slate-100 flex flex-col h-[400px]"
            >
              <div className="absolute inset-0">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} mix-blend-multiply opacity-90 group-hover:opacity-80 transition-opacity duration-500 z-10`}></div>
              </div>
              
              <div className="relative z-20 p-8 flex flex-col h-full text-white">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center mb-auto border border-white/20">
                   <cat.icon className="w-6 h-6 text-white" />
                </div>
                
                <div className="mt-auto">
                  <h4 className="text-2xl font-bold mb-3">
                    {cat.title}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-white text-sm font-bold group-hover:gap-3 transition-all uppercase tracking-wide">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
