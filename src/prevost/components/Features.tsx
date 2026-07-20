import { motion } from "motion/react";
import { ShieldCheck, Zap, Factory, CheckCircle2 } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Patented Non-Scratch Safety",
      description: "Our Prevo S1 technology guarantees one-push disconnection with zero whiplash, ensuring maximum operator safety."
    },
    {
      icon: Zap,
      title: "Optimal Flow & Efficiency",
      description: "PPS (Prevost Piping System) aluminum profiles reduce pressure drop, lowering energy consumption and operational costs."
    },
    {
      icon: Factory,
      title: "Built for Heavy Industry",
      description: "Durable composite materials and pure structural aluminum designed to withstand the harshest manufacturing environments."
    }
  ];

  return (
    <section className="py-16 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest mb-6">
                Why Prevost
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Innovation that powers productivity.
              </h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed max-w-lg">
                Since 1978, we have been engineering the future of compressed air. We don't just supply parts; we design intelligent networks that protect your people and boost your line efficiency.
              </p>

              <div className="space-y-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-slate-50 group-hover:bg-brand-600 transition-colors duration-300 rounded-xl flex items-center justify-center border border-slate-200 group-hover:border-brand-600 shadow-sm text-brand-600 group-hover:text-white mt-1">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden aspect-[4/5] object-cover shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=1200&auto=format&fit=crop" 
                alt="Precision Engineering" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020b14]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-[#020b14]/60 backdrop-blur-xl rounded-xl p-6 border border-white/10">
                  <div className="flex items-center gap-5 text-white">
                    <div className="w-14 h-14 bg-brand-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-xl mb-1">ISO 9001 Certified</h5>
                      <p className="text-slate-300 text-sm">Ensuring global quality standards across all production sites.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div 
              className="absolute -bottom-8 -right-8 w-40 h-40 text-brand-600/10 -z-10"
              style={{
                backgroundImage: `radial-gradient(currentColor 3px, transparent 3px)`,
                backgroundSize: `20px 20px`
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
