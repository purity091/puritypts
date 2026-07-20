import { motion } from 'motion/react';
import { Palette, Clock, ShieldCheck, PaintBucket, Layers, Droplets, Wind, Flame, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  { title: 'Wide-Ranging Upscale Aesthetics', icon: Palette, desc: 'Achieve the authentic look and feel of modern home materials including wood, stone, concrete, brick, metal, and more.' },
  { title: 'Time- and Cost-Efficient Installation', icon: Clock, desc: 'Eliminates the need for specialized trades. Installs with ordinary carpentry tools and universal concealed clips.' },
  { title: 'Exceptional Strength and Durability', icon: ShieldCheck, desc: 'Commercial-grade quality. No warping, rotting, bowing, or splitting. Highly resistant to pests and impacts.' },
  { title: 'Long Life Cycle and Low Maintenance', icon: PaintBucket, desc: 'Virtually no maintenance required. Exteriors maintain their beauty for decades without frequent re-painting.' },
  { title: 'Complete Cladding System', icon: Layers, desc: 'Single-source solution including panels, clip attachment hardware, flashing, and trim.' },
  { title: 'Advanced Moisture Management', icon: Droplets, desc: 'Rainscreen assembly with a wall cavity promotes rapid drainage and drying.' },
  { title: 'Excellent Wind Resistance', icon: Wind, desc: 'Compliant with Florida Building Code for High Velocity Hurricane Zones.' },
  { title: 'Superior Fire Resistance', icon: Flame, desc: 'Highly fire-resistant and qualify as a Class A building material under ASTM E84.' },
  { title: 'Tech Support and Training', icon: HelpCircle, desc: 'Value-added design reviews and hands-on installation guidance from Nichiha professionals.' },
];

export default function AwpResidential() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-nichiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=2065&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6">Architectural Wall <span className="text-nichiha-blue">Panel System</span></h1>
          <p className="text-xl text-nichiha-green font-bold uppercase tracking-widest mb-6">Pinnacle of Cladding | Low-Maintenance Longevity | Rainscreen Performance</p>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            Surround your home in extraordinary. Open new horizons for what a high-end custom home can be using our commercial-grade Architectural Wall Panel (AWP) system.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Intro */}
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-8 text-center">Nichiha <span className="text-nichiha-blue">AWP System</span></h2>
          <p className="text-gray-600 leading-relaxed font-medium text-lg max-w-4xl mx-auto text-center">
            The system’s cladding panels feature solid fiber composite construction, nearly an inch thick. Panels are molded under intense heat and pressure into distinctive profiles and textures. Then, each panel is artfully painted with lasting weather-resistant architectural coatings. The result is nothing short of remarkable.
          </p>
        </section>

        {/* Benefits Grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-12 text-center">Why Choose <span className="text-nichiha-green">Nichiha AWP</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-nichiha-light p-8 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-nichiha-blue">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold uppercase tracking-wider text-nichiha-dark mb-4">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-nichiha-dark text-white p-12 rounded-xl text-center">
          <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-6">Ready to see the difference?</h3>
          <Link to="/contact" className="inline-block px-8 py-4 bg-nichiha-green hover:bg-green-600 transition-colors text-white font-bold uppercase tracking-widest text-sm rounded-md shadow-xl">
            Order a Sample
          </Link>
        </section>

      </div>
    </div>
  );
}
