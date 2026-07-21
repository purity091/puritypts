import { motion } from 'motion/react';
import { ArrowRight, BadgeCheck, Building2, Factory, Globe2, LineChart, Settings, ShieldCheck, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const proofStats = [
  { value: '2', label: 'Specialized brand portals' },
  { value: 'GCC', label: 'Commercial focus' },
  { value: 'Direct', label: 'Inquiry-driven sales path' },
  { value: 'Premium', label: 'Partner positioning' },
];

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Trusted Representation',
    text: 'We position selected international brands with a clear value proposition for GCC buyers and consultants.',
  },
  {
    icon: Globe2,
    title: 'Regional Commercial Clarity',
    text: 'The site now explains what Purity Brands does, who it serves, and where each visitor should go next.',
  },
  {
    icon: LineChart,
    title: 'Higher Conversion Structure',
    text: 'Dedicated pages and stronger CTAs reduce uncertainty and create cleaner paths toward inquiries.',
  },
];

const sectors = [
  { icon: Building2, title: 'Developers & Consultants', text: 'Need specification-ready architectural systems and a credible brand platform.' },
  { icon: Factory, title: 'Industrial Operators', text: 'Need efficient fluid and compressed air systems that justify investment with operational outcomes.' },
  { icon: Users2, title: 'Global Manufacturers', text: 'Need regional representation that can translate premium positioning into practical GCC demand.' },
];

const brandCards = [
  {
    title: 'Nichiha Japan',
    type: 'Architectural Systems',
    text: 'Japanese facade and cladding solutions for residential, commercial, education, and hospitality developments.',
    href: '/nichiha',
    accent: 'bg-emerald-600',
    icon: Building2,
  },
  {
    title: 'Prevost',
    type: 'Industrial Systems',
    text: 'Compressed air and fluid distribution solutions built around safety, leakage control, and long-term efficiency.',
    href: '/prevost',
    accent: 'bg-brand-600',
    icon: Settings,
  },
];

const processSteps = [
  'Understand the visitor type and requirement quickly.',
  'Route the visitor to the right solution path or brand portal.',
  'Offer a stronger proof layer around value, sectors, and partnership logic.',
  'Convert interest into direct calls, emails, and qualified inquiry briefs.',
];

export default function MainLanding() {
  return (
    <div className="bg-[#f4f7fb]">
      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,139,242,0.25),transparent_30%),radial-gradient(circle_at_left,rgba(16,185,129,0.18),transparent_26%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-300"
            >
              Purity Brands GCC
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Premium brands, clearer positioning, stronger inquiry paths.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300"
            >
              Purity Brands is now structured as a proper GCC-facing corporate site, helping project stakeholders,
              industrial buyers, and global manufacturers move toward the right conversation faster.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-500"
              >
                Explore Solutions
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-white/10"
              >
                Contact Corporate
              </Link>
            </motion.div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {proofStats.map((stat) => (
              <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-3 text-sm uppercase tracking-[0.18em] text-slate-300">{stat.label}</div>
              </div>
            ))}
            <div className="sm:col-span-2 rounded-[1.75rem] border border-brand-500/20 bg-brand-500/10 p-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-200">
                <BadgeCheck className="h-4 w-4" />
                Conversion Focus
              </div>
              <p className="text-lg leading-relaxed text-slate-200">
                The main site now frames Purity Brands as a commercial gateway with clear routes into architecture,
                industrial systems, and brand representation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-18 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <item.icon className="h-7 w-7" />
              </div>
              <h2 className="mb-4 text-2xl font-bold text-slate-950">{item.title}</h2>
              <p className="leading-7 text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-600">Brand Portals</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Route visitors directly into the right buying context.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {brandCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f7faff] shadow-sm"
              >
                <div className={`h-2 w-full ${card.accent}`} />
                <div className="p-8 lg:p-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
                    <card.icon className="h-8 w-8" />
                  </div>
                  <div className="mb-3 text-sm font-extrabold uppercase tracking-[0.25em] text-slate-500">{card.type}</div>
                  <h3 className="mb-4 text-3xl font-extrabold text-slate-950">{card.title}</h3>
                  <p className="mb-8 text-lg leading-relaxed text-slate-600">{card.text}</p>
                  <a
                    href={card.href}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-600"
                  >
                    Enter Portal
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-600">Who We Serve</p>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Different visitor types, clearer commercial intent.
            </h2>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <sector.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-950">{sector.title}</h3>
                <p className="text-slate-600 leading-7">{sector.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-300">How It Converts</p>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              A more deliberate path from visit to inquiry.
            </h2>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="text-brand-300 text-sm font-black tracking-[0.28em]">{String(index + 1).padStart(2, '0')}</div>
                <p className="text-slate-200">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-brand-600 px-8 py-10 text-white shadow-2xl shadow-brand-600/20 lg:px-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-100">Next Step</p>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Use the new site structure to turn interest into a qualified discussion.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-brand-50/90">
                Visitors can now choose a solution path, review sector relevance, evaluate partnership logic, and reach out through a more intentional contact flow.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-700"
              >
                Contact Purity Brands
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/partnership"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white"
              >
                Explore Partnership Model
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
