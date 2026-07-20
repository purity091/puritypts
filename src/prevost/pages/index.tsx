import { Hero } from '../components/Hero';
import { Stats, GlobalPresence, Sustainability, Certifications, Services as ServicesComponent, Testimonials, CalculatorCTA, VideoTour, News, FAQ } from '../components/ExtraSections';
import { Categories } from '../components/Categories';
import { Sectors as SectorsComponent } from '../components/Sectors';
import { Features } from '../components/Features';
import { TechInnovation } from '../components/TechInnovation';
import { motion } from 'motion/react';

function PageHero({ title, description, image }: { title: string, description: string, image: string }) {
  return (
    <div className="relative pt-40 pb-24 bg-slate-900 text-white overflow-hidden flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 mt-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight mb-6 text-white"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-brand-300 font-medium max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <News />
    </>
  );
}

export function Products() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero 
        title="Our Products" 
        description="Comprehensive solutions for fluid energy and compressed air networks."
        image="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000&auto=format&fit=crop"
      />
      <Categories />
      <CalculatorCTA />
    </div>
  );
}

export function Sectors() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero 
        title="Sectors We Serve" 
        description="Delivering high-performance pneumatic systems across all major industrial sectors."
        image="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2000&auto=format&fit=crop"
      />
      <SectorsComponent />
    </div>
  );
}

export function Innovation() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero 
        title="Innovation & Technology" 
        description="Pioneering the future of industrial safety and efficiency with cutting-edge engineering."
        image="https://images.unsplash.com/photo-1621609764015-385a4436f561?q=80&w=2000&auto=format&fit=crop"
      />
      <Features />
      <TechInnovation />
    </div>
  );
}

export function Services() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero 
        title="Our Services" 
        description="End-to-end support, from network design to installation and auditing."
        image="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2000&auto=format&fit=crop"
      />
      <ServicesComponent />
      <VideoTour />
    </div>
  );
}

export function Company() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHero 
        title="About Prevost" 
        description="Decades of excellence in manufacturing premium industrial solutions worldwide."
        image="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2000&auto=format&fit=crop"
      />
      <GlobalPresence />
      <Sustainability />
      <Certifications />
      <Testimonials />
      <FAQ />
    </div>
  );
}
