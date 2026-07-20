import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-nichiha-dark text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="mb-8 bg-nichiha-green w-16 h-1.5 rounded-full"></div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-tight mb-8">About <span className="text-nichiha-blue">NICHIHA</span></h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium leading-relaxed">
            A trailblazer and one of the largest facade cladding manufacturers in the world, bringing Japanese cutting-edge technology to the UAE and Gulf Region.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-nichiha-light text-nichiha-blue px-4 py-2 font-bold uppercase tracking-widest text-sm rounded-sm mb-2">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-nichiha-dark">Our <span className="text-nichiha-green">Heritage</span></h2>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              With manufacturing experience dating back to 1974, Nichiha has established itself as a global leader in fiber cement exterior cladding. 
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              Our commitment to innovation, quality, and aesthetic perfection has driven us to produce over 53 million square meters of facade panels annually. We blend traditional Japanese craftsmanship with advanced engineering.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-medium mt-4">
              As Nichiha continues to grow, we want to ensure our mission, vision and core values define who we are as a company and focus on what we do—not only how we deliver superior products, but how we exemplify first-class service.
            </p>
            <div className="pt-8 flex gap-12 border-t-2 border-nichiha-light mt-8">
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-nichiha-blue">1974</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Established</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-nichiha-green">53M+</p>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Sq Meters Annually</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
              alt="Nichiha office and plant" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-nichiha-dark">
              Nichiha office and plant in Macon, GA
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision Section */}
        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-nichiha-dark text-white p-10 rounded-xl shadow-xl border-t-4 border-nichiha-blue relative overflow-hidden"
            >
               <div className="absolute top-0 right-0 w-32 h-32 bg-nichiha-green rounded-bl-full opacity-10" />
               <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-4 text-nichiha-blue">Mission</h3>
               <p className="text-gray-300 font-medium leading-relaxed">
                 We create better spaces for all to enjoy by providing a wide range of visually stunning, high-performing building materials and incomparable service to our partners in the building community.
               </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-nichiha-light p-10 rounded-xl shadow-lg border border-gray-100 border-t-4 border-nichiha-green"
            >
               <h3 className="text-2xl font-extrabold uppercase tracking-tight mb-4 text-nichiha-green">Vision</h3>
               <p className="text-gray-600 font-medium leading-relaxed">
                 Our vision is to create a more sustainable and beautiful world, together.
               </p>
            </motion.div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-nichiha-dark mb-4">Core <span className="text-nichiha-blue">Values</span></h2>
            <div className="w-16 h-1.5 bg-nichiha-green rounded-full mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "We're Relationship People",
                desc: "We feel this in the genuine friendships and care for each other, as well as in our long-term partnerships with our customers, who know and love us for our unparalleled dedication to delivering the best experience possible."
              },
              {
                title: "We're Idea Enthusiasts",
                desc: "We welcome ideas, knowing that the best ideas can come from anyone. Our workplace is one that fosters open communication, honesty, diversity, and stands against intolerance."
              },
              {
                title: "We're Looking Ahead",
                desc: "We strive to create an environment that encourages taking initiative, embracing change and working together as a team so that we can lead the way in innovation."
              },
              {
                title: "We're Corporate Citizens",
                desc: "As a good corporate citizen, we will comply with all laws and rules, respect their spirit, and act in accordance with social responsibility."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:border-nichiha-blue transition-colors flex flex-col"
              >
                <h4 className="text-xl font-bold text-nichiha-dark mb-4">{value.title}</h4>
                <p className="text-gray-600 text-sm font-medium leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:order-2"
          >
            <div className="inline-block bg-nichiha-light text-nichiha-blue px-4 py-2 font-bold uppercase tracking-widest text-sm rounded-sm mb-2">
              Presence
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-nichiha-dark">Serving the UAE & <span className="text-nichiha-green">Gulf Region</span></h2>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              Our regional branch in Dubai is dedicated to serving the unique architectural needs and climate challenges of the United Arab Emirates and the broader Gulf region.
            </p>
            <p className="text-base text-gray-600 leading-relaxed font-medium">
              We provide localized support, technical expertise, and rapid supply chain solutions to architects, developers, and contractors. Nichiha's ventilated facade systems are uniquely suited to protect buildings from intense heat while offering unparalleled design flexibility.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl lg:order-1"
          >
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Dubai skyline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg text-sm font-bold text-nichiha-dark">
              Product display in Johns Creek lobby
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
