import { motion } from "motion/react";
import { CarFront, FlaskConical, Wrench, Factory } from "lucide-react";

export function Sectors() {
  const sectors = [
    {
      id: "automotive",
      title: "Automotive & Garages",
      description: "High-performance air networks for body shops, assembly lines, and mechanical repair.",
      icon: CarFront,
    },
    {
      id: "manufacturing",
      title: "Industrial Manufacturing",
      description: "Reliable distribution systems handling high demand across large-scale production facilities.",
      icon: Factory,
    },
    {
      id: "food-beverage",
      title: "Food & Beverage",
      description: "Clean, filtration-focused air supply meeting strict health and safety standards.",
      icon: FlaskConical,
    },
    {
      id: "crafts",
      title: "Crafts & Workshops",
      description: "Flexible, ergonomic tool ecosystems for precision work and small-scale operations.",
      icon: Wrench,
    }
  ];

  return (
    <section id="sectors" className="py-16 lg:py-32 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-3"
          >
            Applications
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6"
          >
            Powering every sector.
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Our pneumatic and fluid networks are designed to integrate seamlessly into diverse industrial environments, providing tailored efficiency.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 hover:border-brand-500 rounded-xl p-8 transition-all hover:shadow-xl hover:shadow-brand-500/10 text-center group"
            >
              <div className="w-16 h-16 mx-auto bg-brand-50 group-hover:bg-brand-600 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300">
                <sector.icon className="w-8 h-8 text-brand-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{sector.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {sector.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
