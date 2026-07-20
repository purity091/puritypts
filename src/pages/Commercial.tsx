import { motion } from 'motion/react';
import { Building2, ShoppingBag, Stethoscope, GraduationCap, Building, ArrowRight } from 'lucide-react';

const applications = [
  {
    title: 'Retail & Mixed-Use',
    icon: ShoppingBag,
    description: 'Create inviting, distinctive storefronts that attract customers and stand up to high-traffic environments.',
    image: 'https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1965&q=80',
    features: ['High durability', 'Brand-aligned aesthetics', 'Quick installation'],
  },
  {
    title: 'Healthcare',
    icon: Stethoscope,
    description: 'Build calming, professional exteriors with low-maintenance materials that meet strict facility requirements.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: ['Low maintenance', 'Soothing designs', 'Weather resistant'],
  },
  {
    title: 'Education',
    icon: GraduationCap,
    description: 'Design inspiring campuses with durable, cost-effective cladding that withstands the test of time.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: ['Impact resistant', 'Cost-effective', 'Timeless look'],
  },
  {
    title: 'Office & Corporate',
    icon: Building2,
    description: 'Project professionalism and innovation with sleek, modern facades that define corporate identity.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: ['Modern aesthetics', 'Energy efficient', 'Premium finishes'],
  },
  {
    title: 'Hospitality',
    icon: Building,
    description: 'Welcome guests with stunning exteriors that deliver the look of natural materials without the upkeep.',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    features: ['Luxury appearance', 'Minimal upkeep', 'Design versatility'],
  },
  {
    title: 'Multi-Family',
    icon: Building2,
    description: 'Elevate residential developments with premium facades that attract tenants and reduce lifecycle costs.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
    features: ['High ROI', 'Tenant appeal', 'Fire-resistant options'],
  }
];

export default function Commercial() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-nichiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6">Commercial <span className="text-nichiha-blue">Applications</span></h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            From retail storefronts to healthcare facilities, Nichiha Architectural Wall Panels deliver the performance, durability, and design flexibility required for demanding commercial projects.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block bg-nichiha-light text-nichiha-blue px-3 py-1 font-bold uppercase tracking-widest text-xs rounded-sm mb-4">Why Nichiha</span>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-6">Built for <span className="text-nichiha-green">Business</span></h2>
            <p className="text-gray-600 leading-relaxed font-medium mb-6">
              Commercial projects demand materials that can withstand high traffic, harsh weather, and the test of time, all while maintaining a pristine appearance. Nichiha fiber cement panels offer the perfect balance of aesthetic versatility and robust engineering.
            </p>
            <p className="text-gray-600 leading-relaxed font-medium mb-8">
              Our concealed clip installation system ensures a clean, continuous look, while our built-in rainscreen technology protects your building envelope from moisture damage, reducing long-term maintenance costs.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Expedite construction with simple clip installation',
                'Reduce lifecycle costs with low-maintenance finishes',
                'Achieve any design vision with versatile textures and colors',
                'Ensure peace of mind with fire and moisture-resistant properties'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-nichiha-green mr-3 shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-nichiha-dark">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-nichiha-blue/10 transform translate-x-4 translate-y-4 rounded-xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
              alt="Commercial Building Interior" 
              className="rounded-xl shadow-xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>

        {/* Applications Grid */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-4">Explore by <span className="text-nichiha-blue">Sector</span></h2>
          <p className="text-gray-600 font-medium max-w-2xl mx-auto">Discover how our products are tailored to meet the unique demands of various commercial industries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {applications.map((app, idx) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col bg-nichiha-light rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-b-4 border-transparent hover:border-nichiha-green"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                  <img 
                    src={app.image} 
                    alt={app.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-nichiha-dark/90 backdrop-blur p-3 rounded-lg shadow-md">
                    <Icon className="w-6 h-6 text-nichiha-green" />
                  </div>
                </div>
                
                <div className="flex flex-col flex-grow p-8">
                  <h3 className="text-xl font-bold uppercase tracking-wider text-nichiha-dark mb-3 group-hover:text-nichiha-blue transition-colors">{app.title}</h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6 flex-grow">{app.description}</p>
                  
                  <div className="space-y-2 border-t border-gray-200 pt-4 mt-auto">
                    {app.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center text-xs font-bold text-nichiha-dark">
                        <div className="w-1.5 h-1.5 bg-nichiha-green rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
