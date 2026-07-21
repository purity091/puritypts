import { Hero } from '../components/Hero';
import { Stats, IntroShowcase, BuyerConfidence, ConversionJourney, ROIBooster, ServiceCommitment, DirectContactStrip, DocumentsCTA, GlobalPresence, Sustainability, Certifications, Services as ServicesComponent, Testimonials, CalculatorCTA, VideoTour, News, FAQ } from '../components/ExtraSections';
import { Categories } from '../components/Categories';
import { Sectors as SectorsComponent } from '../components/Sectors';
import { Features } from '../components/Features';
import { TechInnovation } from '../components/TechInnovation';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Settings2, Wind, Waves, Droplets, Network, Blocks, SquareStack, PanelTop, LayoutGrid, CircleOff } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import compressedAirImage from '../../../prevost/Quick-couplings/Compressed air.png';
import breathingAirImage from '../../../prevost/Quick-couplings/Breathing air.png';
import coolingCircuitImage from '../../../prevost/Quick-couplings/Cooling circuit.png';
import waterImage from '../../../prevost/Quick-couplings/Water.png';

const quickCouplingProducts = [
  {
    slug: 'compressed-air',
    title: 'Compressed Air',
    subtitle: 'PrevoS1, CSM, Prolac and IRM',
    image: compressedAirImage,
    icon: Settings2,
    intro:
      'Quick couplings and fittings for compressed air applications designed to guarantee safe connection and disconnection while improving day-to-day operational efficiency.',
    details: [
      'PrevoS1, CSM, Prolac and IRM ranges support multiple profiles and diameters for different compressed air requirements.',
      'The range combines technological performance with economic advantages for professional workshops and industrial systems.',
      'Designed for teams that need reliable sealing, robust handling, and straightforward adaptation to site conditions.',
    ],
  },
  {
    slug: 'breathing-air',
    title: 'Breathing Air',
    subtitle: 'BAC and BAP',
    image: breathingAirImage,
    icon: Wind,
    intro:
      'Dedicated quick couplings and fittings for breathing air circuits, where connection security and dependable product behavior are essential.',
    details: [
      'BAC quick couplings and BAP fittings support breathing air installations with application-focused connection logic.',
      'The family is intended for professionals who need confidence during both connection and disconnection operations.',
      'Available in practical configurations to align with operational and safety-driven site requirements.',
    ],
  },
  {
    slug: 'cooling-circuit',
    title: 'Cooling Circuit',
    subtitle: 'CPI and PREOL',
    image: coolingCircuitImage,
    icon: Waves,
    intro:
      'Quick couplings for mold cooling circuits built to support adaptable, efficient, and professional cooling-line management.',
    details: [
      'CPI and PREOL quick couplings are positioned for mold cooling circuit applications where connection speed matters.',
      'The range helps teams manage recurring production changeovers with cleaner, faster coupling workflows.',
      'Suitable for users who need durable couplings that adapt to cooling requirements across different installations.',
    ],
  },
  {
    slug: 'water',
    title: 'Water Circuits',
    subtitle: 'ELS and ELP',
    image: waterImage,
    icon: Droplets,
    intro:
      'Quick couplings and fittings for water circuits, offering fluid-specific options that can be adapted to multiple industrial needs.',
    details: [
      'ELS quick couplings and ELP fittings are designed for water applications where ease of use and reliable operation are priorities.',
      'The family helps buyers classify and select products faster according to fluid type and practical site conditions.',
      'Built for applications that require repeatable handling, adaptable sizing, and dependable fitting performance.',
    ],
  },
] as const;

const compressedAirNetworkProducts = [
  {
    slug: 'fittings',
    title: 'Fittings',
    subtitle: 'piece-raccordement-air-comprime',
    icon: Blocks,
    accent: 'bg-brand-600',
    intro:
      'Compact, light, and resistant fittings designed to integrate smoothly into professional compressed air network installations.',
    details: [
      'Built to connect compressed air sections with reliable handling and efficient installation logic.',
      'Suitable for installation, replacement, repair, or retrofit projects where connection quality matters.',
      'Supports cleaner network configuration across compressor room outlets and workstation supply routes.',
    ],
  },
  {
    slug: 'pps',
    title: 'PPS',
    subtitle: 'reseau-air-comprime',
    icon: Network,
    accent: 'bg-slate-900',
    intro:
      'PREVOST PIPING SYSTEM - PPS is a 100% aluminium compressed air network designed to optimise air flows from the compressor room to the workstation.',
    details: [
      'Lightweight aluminium network concept focused on flow optimisation and long-term system efficiency.',
      'Created to improve supply continuity from central production to distributed work areas.',
      'Fits projects requiring a durable and modern compressed air piping backbone.',
    ],
  },
  {
    slug: 'pps-sq',
    title: 'PPS SQ',
    subtitle: 'PPS SQ',
    icon: SquareStack,
    accent: 'bg-brand-700',
    intro:
      'The PPS SQ range is designed to equip workstations with a practical, clean, and well-structured compressed air distribution approach.',
    details: [
      'Focused on workstation equipment needs within a broader compressed air network design.',
      'Helps create more accessible outlet points for professional daily use.',
      'Extends the PPS logic into localized usage zones and point-of-use layouts.',
    ],
  },
  {
    slug: 'wall-brackets',
    title: 'Wall Brackets',
    subtitle: 'applique',
    icon: PanelTop,
    accent: 'bg-slate-800',
    intro:
      'Wall brackets help support and organize compressed air network components with cleaner, more stable routing across work areas.',
    details: [
      'Useful for structured wall-mounted installations and clearer network organization.',
      'Improves mechanical support across visible routing sections and equipment interfaces.',
      'Supports neat installation outcomes that are easier to maintain.',
    ],
  },
  {
    slug: 'mounting-decks',
    title: 'Mounting Decks',
    subtitle: 'platine',
    icon: LayoutGrid,
    accent: 'bg-brand-600',
    intro:
      'Mounting decks provide a practical base for equipping compressed air networks with the connectors and distribution interfaces needed on site.',
    details: [
      'Designed to simplify equipment mounting and network readiness at key use points.',
      'Works well where teams need a stable and organized support surface for distribution accessories.',
      'Complements wall manifolds and connectors in professional network installations.',
    ],
  },
  {
    slug: 'pvr',
    title: 'PVR',
    subtitle: 'pvr',
    icon: CircleOff,
    accent: 'bg-slate-900',
    intro:
      'PVR is the all-PVC network concept developed by Prevost for compressed air installations requiring an alternative network configuration.',
    details: [
      'Extends the compressed air network offer beyond aluminium with an all-PVC concept.',
      'Suitable for projects evaluating different material approaches within compressed air distribution.',
      'Helps buyers compare network strategies based on operational needs and retrofit conditions.',
    ],
  },
] as const;

function QuickCouplingsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,139,242,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_24%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-300">
            Prevost Couplings Range
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Quick Couplings built for clear selection and safer handling.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
            Learn more about our Prevost range of quick connectors and fittings. They combine technological performance
            and economic advantages to guarantee safe connection and disconnection across multiple industrial uses.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              'Multiple profiles and diameters for different operational needs.',
              'Classified by fluid type for faster buyer understanding.',
              'Product images are now shown without destructive cropping.',
              'Each family opens into a dedicated product page.',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                <p className="text-sm leading-relaxed text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-2xl">
          <div className="grid grid-cols-2 gap-4">
            {quickCouplingProducts.map((product) => (
              <div key={product.slug} className="rounded-2xl border border-white/10 bg-white p-4">
                <img src={product.image} alt={product.title} className="h-32 w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
      <IntroShowcase />
      <Categories />
      <BuyerConfidence />
      <ConversionJourney />
      <ROIBooster />
      <ServiceCommitment />
      <DirectContactStrip />
      <DocumentsCTA />
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

export function QuickCouplings() {
  return (
    <div className="min-h-screen bg-slate-50">
      <QuickCouplingsHero />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
              Prevost Couplings Range
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Safe connection and disconnection with measurable technical value.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Learn more about our Prevost range of quick connectors and fittings. They combine technological performance and economic advantages to guarantee safe connection and disconnection.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Available in different profiles and diameters, they can be adapted to all your needs across compressed air, breathing air, cooling circuits, and water circuits.
            </p>
            <div className="space-y-4">
              {[
                'Multiple profiles and diameters to match different operational needs.',
                'Engineered for secure use in professional compressed air environments.',
                'Classified by fluid type to simplify product selection and application fit.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-[#f7faff] shadow-xl">
            <div className="grid grid-cols-2 gap-4 p-6">
              {quickCouplingProducts.map((product) => (
                <div key={product.slug} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <img src={product.image} alt={product.title} className="h-40 w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
              Classified by Fluid Type
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              Product families adapted to your circuit requirements.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our products are classified by fluid type so buyers and technical teams can identify the correct coupling family faster.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {quickCouplingProducts.map((family) => (
              <Link
                key={family.slug}
                to={`/products/quick-couplings/${family.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
              >
                <div className="mb-5 rounded-[1.5rem] border border-slate-200 bg-[#f7faff] p-4">
                  <img src={family.image} alt={family.title} className="h-44 w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]" />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-5">
                  <family.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{family.title}</h3>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-700 mb-4">{family.subtitle}</p>
                <p className="text-slate-600 leading-relaxed">{family.intro}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-700 transition-all group-hover:gap-3">
                  View Product Family
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DocumentsCTA />
    </div>
  );
}

export function QuickCouplingProductPage() {
  const { slug } = useParams();
  const product = quickCouplingProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Product not found</h1>
          <p className="text-slate-600 mb-8">The requested Quick Couplings product page does not exist.</p>
          <Link to="/products/quick-couplings" className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
            Back to Quick Couplings
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-18 pt-40 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,139,242,0.2),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link to="/products/quick-couplings" className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-300">
            Quick Couplings
            <ArrowRight className="h-4 w-4 rotate-180" />
          </Link>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-white p-6 shadow-2xl">
              <img src={product.image} alt={product.title} className="h-[360px] w-full object-contain" />
            </div>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-300">
                {product.subtitle}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{product.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{product.intro}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:info@puritypts.com" className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
                  Contact an Expert
                </a>
                <Link to="/products/quick-couplings" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
                  View All Families
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-[#f7faff] p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 mb-6">Why this family works</h2>
            <div className="space-y-4">
              {product.details.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 mb-6">Selection summary</h2>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Application Type</div>
                <div className="text-xl font-bold text-slate-950">{product.title}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Product Families</div>
                <div className="text-xl font-bold text-slate-950">{product.subtitle}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Best For</div>
                <div className="text-slate-700 leading-relaxed">
                  Teams that need a faster visual match between application, fluid type, and the correct coupling family.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DocumentsCTA />
    </div>
  );
}

export function CompressedAirNetwork() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,139,242,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_24%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-300">
              Compressed Air Network
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Network solutions engineered from compressor room to workstation.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">
              Prevost has created a range of piping systems to supply and optimise compressed air flows from the compressor room outlet to the workstation.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                '100% aluminium PPS network with compact, light and resistant fittings.',
                'All-PVC network alternative with the PVR concept.',
                'PPS SQ range now available to equip workstations.',
                'Connectors, wall manifolds, and mounting decks for full network readiness.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                  <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              {compressedAirNetworkProducts.map((product) => (
                <div key={product.slug} className="rounded-2xl border border-white/10 bg-white p-5">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${product.accent} text-white`}>
                    <product.icon className="h-7 w-7" />
                  </div>
                  <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">{product.subtitle}</div>
                  <div className="mt-2 text-xl font-bold text-slate-950">{product.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
              Network Overview
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              A complete compressed air architecture, not just isolated parts.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We have designed and developed a 100% aluminium compressed air network with compact, light and resistant fittings: the PREVOST PIPING SYSTEM - PPS compressed air network, as well as an all-PVC network with the PVR concept.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              To equip workstations, the PPS SQ range is now available.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Prevost also offers a complete selection of connectors, wall manifolds, and mounting decks to best equip your compressed air network.
            </p>
            <div className="space-y-4">
              {[
                'Supply and optimize compressed air flows from source to point of use.',
                'Support new installations, replacements, repairs, and retrofit projects.',
                'Give buyers a structured path to network parts, support components, and workstation equipment.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7faff] p-8 shadow-sm">
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-950 mb-6">Safety and continuity</h3>
            <p className="text-slate-600 leading-relaxed mb-5">
              Every compressed air installation, replacement, repair or retrofit should include at least one shut off valve.
            </p>
            <p className="text-slate-600 leading-relaxed mb-5">
              This remote controlled pneumatic safety valve can quickly isolate certain areas of the system in the event of emergency or if maintenance is necessary.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By isolating only certain areas of the system, overall productivity will not be lost.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
              Product Families
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              Explore the building blocks of the compressed air network.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Each product family below opens into its own page so the selection process becomes clearer and more structured.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {compressedAirNetworkProducts.map((product) => (
              <Link
                key={product.slug}
                to={`/products/compressed-air-network/${product.slug}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
              >
                <div className="mb-6 rounded-[1.5rem] border border-slate-200 bg-[#f7faff] p-6">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${product.accent} text-white`}>
                    <product.icon className="h-8 w-8" />
                  </div>
                  <div className="mt-5 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">{product.subtitle}</div>
                  <div className="mt-2 text-2xl font-bold text-slate-950">{product.title}</div>
                </div>
                <p className="text-slate-600 leading-relaxed">{product.intro}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-700 transition-all group-hover:gap-3">
                  View Product Page
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DocumentsCTA />
    </div>
  );
}

export function CompressedAirNetworkProductPage() {
  const { slug } = useParams();
  const product = compressedAirNetworkProducts.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Product not found</h1>
          <p className="text-slate-600 mb-8">The requested Compressed Air Network product page does not exist.</p>
          <Link to="/products/compressed-air-network" className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
            Back to Compressed Air Network
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-18 pt-40 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,139,242,0.2),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link to="/products/compressed-air-network" className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-300">
            Compressed Air Network
            <ArrowRight className="h-4 w-4 rotate-180" />
          </Link>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl">
              <div className={`flex h-24 w-24 items-center justify-center rounded-[1.75rem] ${product.accent} text-white`}>
                <product.icon className="h-12 w-12" />
              </div>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-[#f7faff] p-8">
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">{product.subtitle}</div>
                <div className="mt-3 text-4xl font-extrabold text-slate-950">{product.title}</div>
              </div>
            </div>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-300">
                Compressed Air Network Product
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{product.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{product.intro}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:info@puritypts.com" className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
                  Contact an Expert
                </a>
                <Link to="/products/compressed-air-network" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
                  View All Network Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-[#f7faff] p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 mb-6">Why this product matters</h2>
            <div className="space-y-4">
              {product.details.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 mb-6">Selection summary</h2>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Product Type</div>
                <div className="text-xl font-bold text-slate-950">{product.title}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Reference Label</div>
                <div className="text-xl font-bold text-slate-950">{product.subtitle}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">Best For</div>
                <div className="text-slate-700 leading-relaxed">
                  Buyers and engineers structuring compressed air installations from the compressor room to the workstation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DocumentsCTA />
    </div>
  );
}
