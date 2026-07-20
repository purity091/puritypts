import { motion } from 'motion/react';

const projects = [
  {
    title: 'Modern Residential Complex',
    category: 'Wood & Concrete Finish',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
  },
  {
    title: 'Commercial Office Tower',
    category: 'Stone Finish',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Luxury Villa',
    category: 'Concrete Finish',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Boutique Hotel',
    category: 'Brick & Wood Finish',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  },
  {
    title: 'Retail Center',
    category: 'Seamless Panels',
    image: 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80',
  },
  {
    title: 'Cultural Pavilion',
    category: 'Custom Texture',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
  },
];

export default function Gallery() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-6">Project <span className="text-nichiha-blue">Gallery</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl font-medium leading-relaxed">
            Buildings clad in Nichiha Facade Panels. Discover how our products bring architectural visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer flex flex-col bg-nichiha-light rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border-b-4 border-transparent hover:border-nichiha-blue"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10 duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-sm shadow-sm">
                   <span className="text-xs font-bold text-nichiha-dark uppercase tracking-widest">0{idx + 1}</span>
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg font-bold uppercase tracking-wider text-nichiha-dark mb-2 leading-snug group-hover:text-nichiha-blue transition-colors">{project.title}</h3>
                <p className="text-xs font-bold text-nichiha-green tracking-widest uppercase">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
