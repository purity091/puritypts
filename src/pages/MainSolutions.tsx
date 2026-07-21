import { motion } from 'motion/react';
import { ArrowRight, Building2, Settings, ShieldCheck, Sparkles } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: 'Architectural Envelope Solutions',
    text: 'Facade systems and design-forward materials for residential, commercial, education, and hospitality projects.',
    link: '/nichiha',
  },
  {
    icon: Settings,
    title: 'Industrial Efficiency Solutions',
    text: 'Compressed air and fluid distribution systems that reduce leakage, improve safety, and support operational uptime.',
    link: '/prevost',
  },
  {
    icon: ShieldCheck,
    title: 'Specification & Technical Support',
    text: 'Pre-sales guidance, product positioning, and technical framing that help buyers move toward confident approvals.',
    link: '/contact',
  },
];

export default function MainSolutions() {
  return (
    <div className="bg-[#f4f7fb]">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-600">Solutions</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              High-value product categories supported by real commercial intent.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              The main site now guides visitors into solution paths instead of making them infer what Purity Brands
              actually sells or supports.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <motion.a
                key={solution.title}
                href={solution.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white group-hover:bg-brand-600 transition-colors">
                  <solution.icon className="h-8 w-8" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-slate-950">{solution.title}</h2>
                <p className="mb-8 text-slate-600 leading-7">{solution.text}</p>
                <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-700">
                  Open Path
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.a>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] border border-brand-100 bg-brand-50 p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-700">
                  <Sparkles className="h-4 w-4" />
                  Conversion Upgrade
                </div>
                <h3 className="text-3xl font-extrabold text-slate-950">Each route now points to a buyer-relevant next step.</h3>
              </div>
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
                Discuss Your Requirement
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
