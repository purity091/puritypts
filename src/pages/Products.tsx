import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Wood Finish',
    description: 'The natural warmth and texture of wood, combined with the durability of fiber cement. Perfect for bringing an organic feel to any structure without the maintenance of real wood.',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
  },
  {
    name: 'Concrete Finish',
    description: 'Achieve a modern, industrial look with minimalist concrete textures. Ideal for contemporary commercial spaces and avant-garde residential designs.',
    image: 'https://images.unsplash.com/photo-1516046206121-72944b248a31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Stone Finish',
    description: 'The timeless elegance and solidity of natural stone. Bring sophisticated texture and depth to your facade with a fraction of the weight and installation time.',
    image: 'https://images.unsplash.com/photo-1518099074172-2e47ee6cb394?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    name: 'Brick Finish',
    description: 'Traditional charm meets modern engineering. Create a classic brick exterior with the high performance and moisture resistance of Nichiha panels.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
  }
];

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-nichiha-dark tracking-tight mb-6 uppercase">Facade <span className="text-nichiha-blue">Panels</span></h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed font-medium">
            NICHIHA's exterior lineup offers an unparalleled selection of sophisticated designs and rich textures. 
            Discover the perfect finish for your next architectural project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {categories.map((category, index) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col border-b-4 border-transparent hover:border-nichiha-green transition-all"
            >
              <div className="h-72 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-nichiha-dark mb-4 uppercase tracking-wider group-hover:text-nichiha-blue transition-colors">{category.name}</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-8 flex-grow font-medium">
                  {category.description}
                </p>
                <Link to="/contact" className="inline-flex items-center text-sm uppercase tracking-widest font-bold text-nichiha-green hover:text-nichiha-blue transition-colors">
                  Request Samples <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 rounded-2xl bg-nichiha-dark p-10 md:p-16 text-center text-white relative flex flex-col items-center overflow-hidden shadow-2xl">
           <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center pointer-events-none mix-blend-overlay" />
           <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full relative z-10"></div>
           <div className="relative z-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight mb-6">Can't find what you're <span className="text-nichiha-blue">looking for?</span></h2>
             <p className="text-lg text-gray-300 mb-10 leading-relaxed font-medium">
               Our collection includes hundreds of variations in color and texture. Contact our regional office in Dubai for the complete product catalog.
             </p>
             <Link 
                to="/contact" 
                className="bg-nichiha-blue text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-blue-700 transition-colors inline-block rounded-sm"
              >
                Contact Sales Team
              </Link>
           </div>
        </div>

      </div>
    </div>
  );
}
