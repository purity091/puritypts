import { motion } from 'motion/react';
import { ArrowRight, Droplets, Flame, Wind, Thermometer, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Aesthetics & Budgets',
    description: 'A forever home should be distinctively you by reflecting your tastes, aspirations, commitment to lasting quality, and timeless aesthetics. Nichiha’s architectural wall panels come in wide-ranging styles, variety of colors, and textures, ensuring that you get exactly what you want. Compared to alternative high-end materials such as real wood, Nichiha architectural wall panels are easier to freely mix and match. They install with greater time efficiency and minimize maintenance requirements. For an idea of what your project will cost, use our Cost Estimator.'
  },
  {
    title: 'Durability',
    description: 'Unlike other fiber cement siding brands, our Architectural Wall Panels and Premium Residential siding are manufactured through a dry process. This method produces siding that is thicker, denser, stronger, far more resistant to freeze-thaw cycling, and longer lasting than traditional fiber cement, while allowing for a far wider array of styles and textures.'
  },
  {
    title: 'The Better Alternative',
    description: 'Nichiha brand fiber cement products help to solve common maintenance and performance issues that plague traditional materials like brick, wood, or stucco. Over time, wood can weather, lose color, warp and split. It’s also susceptible to fire and critters like termites and other material damaging insects. With Nichiha fiber cement, these are non-issues. Brick and stucco exteriors also come with problems. Temperature fluctuations can cause brick and stucco to crack, exposing a home to potentially serious problems. Nichiha brand fiber cement siding is far more durable, holding up to the test of weather and time.'
  }
];

const protection = [
  {
    title: 'Moisture Resistant',
    icon: Droplets,
    desc: 'In southern, humid climates, Nichiha fiber cement is a better alternative to other building materials as it doesn\'t support the growth of fungi or the infestation of termites. Fiber cement can withstand high humidity without rotting or warping as wood products.'
  },
  {
    title: 'Fire Resistant',
    icon: Flame,
    desc: 'In dry climates where wildfires are a major concern, Nichiha fiber cement has excellent fire-resistant properties and many insurance companies offer discounted premiums to homeowners whose homes are built with fiber cement.'
  },
  {
    title: 'Wind Resistant',
    icon: Wind,
    desc: 'Along coastal regions, Nichiha clad homes are protected from sun exposure, salt spray, and high humidity. As wind damage is a major concern, fiber cement offers hurricane-resilience as it can withstand up to 130 mph or higher winds.'
  },
  {
    title: 'Temperature Resistant',
    icon: Thermometer,
    desc: 'In northern climates where temperatures can vary significantly, traditional architectural concrete becomes a problem due to cyclical freezing and warming. Nichiha fiber cement is a lasting solution. It can withstand extreme temperature fluctuations without cracking, weathering, or buckling.'
  }
];

export default function Residential() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-nichiha-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6">Create the Perfect <span className="text-nichiha-blue">Custom Home</span></h1>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed font-medium">
            Long-term durability in a variety of colors, finishes and textures that can be combined to create your dream home.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-12 text-center">Get To Know The Features of <span className="text-nichiha-green">Architectural Panels</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-nichiha-light p-8 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold uppercase tracking-wider text-nichiha-dark mb-4">{feature.title}</h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Protection Section */}
        <section className="mb-24 bg-gray-50 p-12 rounded-xl">
           <h2 className="text-3xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-12 text-center">Protection</h2>
           <p className="text-gray-600 leading-relaxed font-medium text-center mb-12 max-w-3xl mx-auto">
             Nichiha fiber cement Architectural Wall Panels and Premium Residential Siding is versatile, beautiful, and provides outstanding protective properties. It can be used in virtually any climate. Keeping homes protected is important to Nichiha.
           </p>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {protection.map((item, idx) => {
               const Icon = item.icon;
               return (
                 <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                   <div className="w-12 h-12 bg-nichiha-light rounded-full flex items-center justify-center mb-4 text-nichiha-blue">
                     <Icon className="w-6 h-6" />
                   </div>
                   <h4 className="text-lg font-bold text-nichiha-dark mb-2">{item.title}</h4>
                   <p className="text-xs text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                 </div>
               )
             })}
           </div>
        </section>

        {/* CTA Section */}
        <section className="bg-nichiha-dark text-white p-12 rounded-xl text-center">
            <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-6">Ready to Get Started?</h3>
            <p className="text-gray-300 font-medium mb-8 max-w-2xl mx-auto">
              You've heard all the benefits, now see the difference for yourself. Order a sample or start budgeting for your dream home.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-nichiha-blue text-white font-bold uppercase tracking-widest text-sm rounded-md hover:bg-blue-700 transition-colors">
                Order Sample
              </Link>
              <Link to="/pricing" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest text-sm rounded-md hover:bg-white hover:text-nichiha-dark transition-colors">
                Pricing
              </Link>
            </div>
        </section>
      </div>
    </div>
  );
}
