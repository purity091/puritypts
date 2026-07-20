import { motion } from "motion/react";
import { FileText, ArrowRight } from "lucide-react";

export function TechInnovation() {
  const points = [
    "3D CAD Libraries for all fittings", 
    "Pressure drop calculation tools", 
    "Energy efficiency audits"
  ];

  return (
    <section id="innovation" className="py-16 lg:py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200 flex flex-col lg:flex-row">
          
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-widest mb-6 w-fit">
              Knowledge Hub
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Access 45 years of pneumatic engineering expertise.
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              We provide comprehensive CAD models, 3D network blueprints, and technical whitepapers to help you design the most efficient fluid distribution systems possible.
            </p>
            
            <div className="space-y-5 mb-12">
              {points.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-brand-600"></div>
                  <span className="text-slate-700 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-md font-bold transition-all w-fit group">
               <FileText className="w-5 h-5" />
               View Technical Resources
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="lg:w-1/2 relative bg-slate-100 min-h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1200&auto=format&fit=crop" 
              alt="CAD Blueprint Design" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-70"
            />
            <div className="absolute inset-0 bg-brand-900/10 mix-blend-color"></div>
            {/* Grid overlay for tech feel */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
                backgroundSize: `40px 40px`
              }}
            ></div>
          </div>

        </div>
      </div>
    </section>
  );
}
