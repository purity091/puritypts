import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, ThumbsUp, Wind, Sun, Droplets, Building2, Home as HomeIcon, Users, Leaf, Palette, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    name: 'Quick and Easy Installation',
    description: 'Time-saving clip installation system reduces construction time and minimizes mistakes.',
    icon: Clock,
  },
  {
    name: 'Low Maintenance',
    description: 'NichiGuard™ self-cleaning technology lets rain wash away dirt, keeping your facade pristine.',
    icon: Droplets,
  },
  {
    name: 'Moisture Management',
    description: 'Ventilated facade system keeps insulation dry, preventing mold and improving indoor air.',
    icon: Wind,
  },
  {
    name: 'Design Flexibility',
    description: 'Authentic textures of wood, stone, brick, and concrete offer limitless design possibilities.',
    icon: ThumbsUp,
  },
  {
    name: 'Color Protection',
    description: 'PlatinumCoat™ technology protects against UV damage and prevents color fade.',
    icon: Sun,
  },
  {
    name: 'Durability',
    description: 'High-quality fiber cement withstands harsh weather conditions, including extreme Gulf heat.',
    icon: Shield,
  },
];

const solutions = [
    { name: 'Custom Homes', icon: HomeIcon, href: '/residential', desc: 'Durable, stylish fiber cement for your dream home.' },
    { name: 'Multifamily', icon: Users, href: '/multifamily', desc: 'Modern exteriors for apartments and condos.' },
    { name: 'Commercial', icon: Building2, href: '/commercial', desc: 'High-performance facades for retail and corporate.' }
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row min-h-[75vh] lg:min-h-[85vh] bg-nichiha-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
        
        <div className="relative z-10 w-full flex flex-col justify-center p-8 md:p-16 lg:p-24 lg:w-3/5">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-nichiha-green text-white px-4 py-2 font-bold uppercase tracking-widest text-sm mb-6 rounded-sm">
              Premium Cladding
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-8 tracking-tight uppercase leading-[0.9]">
              Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-nichiha-green to-nichiha-blue">Future</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-xl mb-10 font-medium">
              High-performance fiber cement panels. Japanese cutting-edge technology engineered for the UAE and Gulf region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="inline-flex justify-center items-center px-8 py-4 bg-nichiha-blue hover:bg-blue-700 text-white font-bold uppercase tracking-wide text-sm rounded-sm transition-transform hover:-translate-y-1"
              >
                Explore Products
                <ArrowRight className="ml-3 w-5 h-5" />
              </Link>
              <Link 
                to="/gallery" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white hover:bg-gray-100 text-nichiha-dark font-bold uppercase tracking-wide text-sm rounded-sm transition-transform hover:-translate-y-1"
              >
                View Gallery
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Blocks */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-[40%] h-[80%]">
          <div className="absolute top-1/4 -left-12 w-24 h-24 bg-nichiha-green rounded-lg shadow-2xl animate-pulse opacity-80" />
          <div className="absolute top-1/2 right-24 w-32 h-32 bg-nichiha-blue rounded-full shadow-2xl opacity-60 mix-blend-screen blur-xl" />
        </div>
      </section>

      {/* Explore Our Solutions */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center uppercase tracking-tight text-nichiha-dark mb-16">Explore <span className="text-nichiha-blue">Our Solutions</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map(sol => (
                    <Link key={sol.name} to={sol.href} className="bg-white p-8 rounded-xl shadow-md border hover:border-nichiha-green transition-all group flex flex-col items-center text-center">
                        <sol.icon className="w-12 h-12 text-nichiha-blue mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-nichiha-dark mb-4">{sol.name}</h3>
                        <p className="text-gray-600 text-sm font-medium">{sol.desc}</p>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-6">
              Why Choose <span className="text-nichiha-blue">Nichiha?</span>
            </h2>
            <div className="w-24 h-1.5 bg-nichiha-green mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
              A global trailblazer and one of the largest facade cladding manufacturers in the world. Producing over 53 million m² of facade panels annually with unmatched Japanese precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-nichiha-light rounded-xl p-8 hover:shadow-2xl transition-all duration-300 border-b-4 border-transparent hover:border-nichiha-green group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-nichiha-blue" />
                </div>
                <h3 className="text-xl font-bold text-nichiha-dark mb-4">{feature.name}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Quality */}
      <section className="py-16 md:py-24 bg-nichiha-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left">
            <Leaf className="w-20 h-20 md:w-32 md:h-32 text-nichiha-green shrink-0" />
            <div>
                <h2 className="text-4xl font-extrabold uppercase tracking-tight mb-6">Commitment to <span className="text-nichiha-green">Quality</span></h2>
                <p className="text-lg text-gray-300 leading-relaxed font-medium">
                    We create a more sustainable and beautiful world, together. Our manufacturing process minimizes waste, and our products contribute to energy-efficient building envelopes, standing up to the test of weather and time.
                </p>
            </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-12 md:mb-16">Project <span className="text-nichiha-blue">Highlights</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Commercial" className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover" />
                <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80" alt="Residential" className="rounded-xl shadow-lg w-full h-64 md:h-80 object-cover" />
            </div>
        </div>
      </section>

      {/* Technical Resources */}
      <section className="py-16 md:py-24 bg-nichiha-light text-center">
        <div className="max-w-4xl mx-auto px-4">
            <BookOpen className="w-16 h-16 text-nichiha-blue mx-auto mb-8" />
            <h2 className="text-3xl font-bold text-nichiha-dark mb-6">Need Technical Resources?</h2>
            <p className="text-gray-600 mb-10 font-medium">Access our price catalogs, installation guides, and cost calculators to plan your project with precision.</p>
            <Link to="/pricing" className="inline-block bg-nichiha-blue hover:bg-blue-700 text-white px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-sm">View Resources</Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 md:py-24 bg-nichiha-blue overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')] bg-cover bg-center mix-blend-multiply opacity-20" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-nichiha-green/30 to-transparent mix-blend-overlay" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-8">
            Elevate Your Architecture
          </h2>
          <p className="text-xl text-blue-100 mb-12 font-medium">
            Bring your architectural vision to life with materials that offer unmatched durability, design flexibility, and structural integrity.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-nichiha-green hover:bg-green-600 text-white px-10 py-5 text-lg font-bold uppercase tracking-widest rounded-sm shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1"
          >
            Contact Our Experts
          </Link>
        </div>
      </section>
    </div>
  );
}
