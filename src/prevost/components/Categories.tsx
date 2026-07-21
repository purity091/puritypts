import { motion } from "motion/react";
import { ArrowRight, Wind, Network, Settings2, Wrench, Cable } from "lucide-react";
import { Link } from "react-router-dom";

export function Categories() {
  const categories = [
    {
      id: "quick-couplings",
      title: "Quick Couplings",
      description: "PrevoS1 fittings combine technological performance with economic benefits to ensure safe connection and disconnection.",
      icon: Settings2,
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
      color: "from-brand-600/80 to-brand-900/90",
      link: "/products/quick-couplings"
    },
    {
      id: "compressed-air-network",
      title: "Compressed Air Network",
      description: "Our range Prevost Piping System (PPS), a modular concept of 100% aluminium tubes and fittings, optimises compressed air flows from the compressor room to the workstation.",
      icon: Network,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop",
      color: "from-slate-700/80 to-slate-950/90",
      link: "/products/compressed-air-network"
    },
    {
      id: "hoses-hose-reels",
      title: "Hoses & Hose Reels",
      description: "Prevost offers a wide selection of heavy-duty, easy-to-use automatic reels that are essential in every workshop.",
      icon: Cable,
      image: "https://images.unsplash.com/photo-1621609764015-385a4436f561?q=80&w=800&auto=format&fit=crop",
      color: "from-brand-600/80 to-brand-900/90",
      link: "/products/hoses-hose-reels"
    },
    {
      id: "pneumatic-tools",
      title: "Pneumatic Tools",
      description: "With its range of pneumatic tools, Prevost develops technical products adapted to the requirements of professionals.",
      icon: Wrench,
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=800&auto=format&fit=crop",
      color: "from-slate-700/80 to-slate-950/90",
      link: "/products/pneumatic-tools"
    },
    {
      id: "compressed-air-treatment",
      title: "Compressed Air Treatment",
      description: "A high-performance network must be equipped with efficient compressed air filtration systems adapted to compressor rooms and points of use.",
      icon: Wind,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=800&auto=format&fit=crop",
      color: "from-brand-600/80 to-brand-900/90",
      link: "/products/compressed-air-treatment"
    }
  ];

  return (
    <section id="products" className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3">
              Our Products
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Discover our range of products to optimise your compressed air installation.
            </h3>
          </div>
          <a href="#documents" className="flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-900 px-6 py-3 rounded-md text-sm font-bold transition-all group shrink-0">
            Consult Documents
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
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
                  <Link to={cat.link} className="inline-flex items-center gap-2 text-white text-sm font-bold group-hover:gap-3 transition-all uppercase tracking-wide">
                    <span>Discover the Range</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
