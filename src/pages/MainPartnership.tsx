import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Globe2, LineChart, Users } from 'lucide-react';

const reasons = [
  'Structured market entry for brands targeting UAE and wider GCC growth.',
  'Commercial storytelling aligned to consultants, developers, contractors, and operators.',
  'Practical bridge between premium product positioning and project-level conversion.',
  'Direct lead handling with local contact channels and brand-specific portals.',
];

const journey = [
  { icon: Globe2, title: 'Brand Evaluation', text: 'We assess regional fit, category strength, and sales narrative before scaling market presence.' },
  { icon: Users, title: 'Channel Positioning', text: 'We define the right buyer segments and project types to target instead of chasing generic volume.' },
  { icon: LineChart, title: 'Growth Execution', text: 'We create clearer routes into specifications, product engagement, and serious inquiries.' },
];

export default function MainPartnership() {
  return (
    <div className="bg-slate-950 text-white">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-300">Partnership</p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              For manufacturers that need representation, not just reselling.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Purity Brands is positioned as a strategic commercial platform for selected global brands seeking
              stronger visibility and better-qualified opportunities in the GCC.
            </p>

            <div className="mt-10 space-y-4">
              {reasons.map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                  <p className="text-slate-300">{reason}</p>
                </div>
              ))}
            </div>

            <a
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-brand-500"
            >
              Discuss Representation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid gap-6">
            {journey.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-brand-300">
                  <item.icon className="h-7 w-7" />
                </div>
                <h2 className="mb-3 text-2xl font-bold">{item.title}</h2>
                <p className="leading-7 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
