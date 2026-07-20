import { motion } from 'motion/react';
import { ArrowRight, Building2, ShieldCheck, Zap, Settings, RefreshCw, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const sections = [
  {
    title: 'Aesthetics & Design Control',
    description: 'Nichiha fiber cement Architectural Wall Panels give design teams more control over building façade design. Clean lines, mixed textures, and modern color palettes can help break up large elevations while giving each area of the property a clear visual purpose. Create the look of warm wood, brick, natural stone, smooth concrete, or metal-inspired finishes.'
  },
  {
    title: 'High-Performance Systems',
    description: 'Nichiha cladding systems are designed to support commercial-grade siding durability while giving teams the aesthetic appeal expected in modern residential communities. This includes weather-resistant exterior panels for demanding climates, fire-resistant fiber cement siding, and rainscreen wall systems for drainage and ventilation.'
  },
  {
    title: 'Low-Maintenance Value',
    description: 'Nichiha fiber cement cladding helps reduce concerns tied to rot, pests, and many moisture-related exterior issues, ensuring long-term property value. This makes exterior upkeep more predictable for facility managers and helps protect the property’s visual appeal over time.'
  }
];

export default function Multifamily() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-nichiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6">Multifamily Apartment <span className="text-nichiha-blue">Exterior Solutions</span></h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            Nichiha helps multifamily project teams create modern apartment, condo, and mixed-use exteriors with durable, high-performance fiber cement cladding systems.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Intro/Features */}
        <section className="mb-24">
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-12 text-center">Exterior Materials That <span className="text-nichiha-green">Perform & Look Amazing</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {sections.map((section, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-nichiha-light p-8 rounded-xl shadow-md border border-gray-100"
                    >
                        <h3 className="text-xl font-bold uppercase tracking-wider text-nichiha-dark mb-4">{section.title}</h3>
                        <p className="text-sm text-gray-600 font-medium leading-relaxed">{section.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Multifamily Renovation */}
        <section className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-gray-50 p-12 rounded-xl">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="w-12 h-12 bg-nichiha-blue/10 rounded-full flex items-center justify-center mb-6 text-nichiha-blue">
                    <RefreshCw className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-6">Multifamily <span className="text-nichiha-green">Renovation</span></h2>
                <p className="text-gray-600 leading-relaxed font-medium mb-6">
                    Many older apartment communities and condo properties need exterior updates to modernize curb presence or reposition the asset in a competitive market. Nichiha offers renovation exterior materials for property teams looking to update older façades.
                </p>
                <p className="text-gray-600 leading-relaxed font-medium">
                    Fiber cement Architectural Wall Panels can help transform dated exteriors into a contemporary residential building façade with wood-look, concrete-look, brick-look, stone-look, and custom-color options.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <img 
                    src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                    alt="Multifamily Renovation" 
                    className="rounded-xl shadow-xl w-full"
                />
            </motion.div>
        </section>

        {/* Resources CTA */}
        <section className="bg-nichiha-dark text-white p-12 rounded-xl">
            <div className="text-center mb-12">
                <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-4">Feeling Resourceful?</h3>
                <p className="text-nichiha-green font-bold uppercase tracking-widest text-lg">We Can Help</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: "Full Line Catalog", icon: BookOpen, desc: "View our Commercial Full Line Catalog for product info and project photography." },
                    { title: "Price Catalog", icon: Settings, desc: "Detailed technical info, including pricing, SKUs, and hardware compatibility." },
                    { title: "Cost Estimator", icon: ShieldCheck, desc: "Enter your square footage, select a product, and get your estimate." }
                ].map((res, idx) => (
                    <div key={idx} className="bg-white/5 p-6 rounded-lg text-center">
                        <res.icon className="w-10 h-10 mx-auto mb-4 text-nichiha-blue" />
                        <h4 className="font-bold uppercase text-white mb-2">{res.title}</h4>
                        <p className="text-xs text-gray-300 mb-4">{res.desc}</p>
                    </div>
                ))}
            </div>
        </section>

      </div>
    </div>
  );
}
