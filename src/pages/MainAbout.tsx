import { motion } from 'motion/react';
import { Award, Building2, Globe2, Users2 } from 'lucide-react';

const pillars = [
  {
    icon: Globe2,
    title: 'Regional Access',
    text: 'We shorten the path between global manufacturers and GCC decision-makers through local market knowledge and active commercial support.',
  },
  {
    icon: Building2,
    title: 'Specification Mindset',
    text: 'Our positioning is built around specification sales, project influence, and long-cycle opportunities instead of transactional distribution alone.',
  },
  {
    icon: Award,
    title: 'Premium Brand Discipline',
    text: 'We choose selective partnerships where product quality, technical confidence, and regional fit justify long-term investment.',
  },
  {
    icon: Users2,
    title: 'Execution Support',
    text: 'Developers, consultants, contractors, and facility teams get clear routes to product knowledge, support, and quotation readiness.',
  },
];

export default function MainAbout() {
  return (
    <div className="bg-white">
      <section className="bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-300">About Purity Brands</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Built to represent serious brands in serious markets.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Purity Brands operates as a focused GCC growth platform for architectural and industrial manufacturers
            that need more than shelf presence. We align market entry, project influence, and regional support.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-sm"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
                <pillar.icon className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-slate-950">{pillar.title}</h2>
              <p className="text-slate-600 leading-7">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
