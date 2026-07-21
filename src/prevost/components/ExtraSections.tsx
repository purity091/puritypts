import React, { useState } from 'react';
import { Globe, ShieldCheck, Calculator, Play, MessagesSquare, Leaf, PenTool, BarChart3, HelpingHand, HelpCircle, ArrowRight, MapPin, Phone, Mail, Award, Zap, Package, Shield, CheckCircle2, Clock3, Wrench, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Stats() {
  const stats = [
    { num: '80+', en: 'Countries Served' },
    { num: '45+', en: 'Years of Expertise' },
    { num: '90%', en: 'Production in France & Italy' },
    { num: '7000+', en: 'Product References' }
  ];
  return (
    <div className="py-12 lg:py-24 bg-brand-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20 relative z-10">
        {stats.map((s, i) => (
          <div key={i} className="px-4">
            <div className="text-5xl md:text-6xl font-extrabold mb-3 tracking-tight">{s.num}</div>
            <div className="text-brand-100 font-semibold tracking-wide uppercase text-sm">{s.en}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function IntroShowcase() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
            Your Compressed Air Partner
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Discover Prevost
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            For over 45 years, Prevost has stood at the forefront of innovation, offering a complete range of compressed air solutions from the compressor outlet to the workstation.
          </p>
          <p className="text-slate-600 leading-relaxed mb-8">
            Our products meet multiple quality standards, hygiene requirements, sustainability goals, and performance needs. They are specifically designed to meet the requirements of pressure equipment standards.
          </p>
          <div className="flex flex-wrap gap-3">
            {['ASME QPS', 'TUV', 'AFNOR', 'PI'].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-slate-100 text-slate-800 text-sm font-bold uppercase tracking-[0.16em]">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-slate-950 text-white shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1600&auto=format&fit=crop"
            alt="Compressed air solutions"
            className="h-[420px] w-full object-cover opacity-70"
          />
        </div>
      </div>
    </section>
  );
}

export function ServiceCommitment() {
  const items = [
    {
      title: 'Technical Expertise',
      text: 'Our experts assess your projects and design custom-made, durable, and effective solutions.',
    },
    {
      title: 'Network Sizing',
      text: 'We model your compressed air networks with precision to ensure performance and longevity.',
    },
    {
      title: 'Prevost Academy',
      text: 'Our training is aimed at anyone wishing to improve their skills on our products.',
    },
    {
      title: 'Order Management',
      text: 'Our team of experts is always available to respond to your operational issues.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-brand-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
            We Stand By Your Side
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Designing, training, supporting: our commitment
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From design to after-sales, Prevost accompanies you with expertise and proximity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DocumentsCTA() {
  return (
    <section id="documents" className="py-16 lg:py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
              Let's Move Forward Together
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Our teams are ready to support you.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              Consult our documents, find all our videos, or contact an expert to discuss your compressed air project.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#documents" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-950">
              Consult Our Documents
            </a>
            <a href="mailto:info@puritypts.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Contact an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BuyerConfidence() {
  const points = [
    {
      icon: Shield,
      title: 'Leak-Free Performance',
      text: 'Engineered aluminum networks and safety couplings designed to cut pressure loss and reduce unplanned downtime.',
    },
    {
      icon: Clock3,
      title: 'Faster Project Turnaround',
      text: 'Local GCC stock and direct technical support shorten approval, supply, and installation cycles.',
    },
    {
      icon: Award,
      title: 'Industrial-Grade Reliability',
      text: 'Certified components built for demanding production environments where safety and consistency matter.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 text-brand-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
            Why Buyers Choose Prevost
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
            Built to remove friction from industrial buying decisions.
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            The landing page now leads with the outcomes customers care about most: safer operations, cleaner installations, and measurable efficiency gains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {points.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-xl hover:border-brand-200 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-brand-600/20">
                <point.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{point.title}</h3>
              <p className="text-slate-600 leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConversionJourney() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirement',
      text: 'Send your plant layout, compressor data, or expansion target and our team identifies the right network approach.',
    },
    {
      number: '02',
      title: 'Receive Technical Sizing',
      text: 'We recommend the right pipe diameter, fittings, and accessories to reduce pressure drop and installation waste.',
    },
    {
      number: '03',
      title: 'Approve Pricing Fast',
      text: 'Get a clear quotation with local availability, project scope, and engineering-backed recommendations.',
    },
    {
      number: '04',
      title: 'Install With Confidence',
      text: 'Your team receives practical support for rollout, expansion planning, and long-term reliability.',
    },
  ];

  return (
    <section className="py-16 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
              Conversion Path
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              A simple path from first inquiry to operational savings.
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              This section removes hesitation by showing what happens next and how quickly a prospect can move toward a practical decision.
            </p>
          </div>
          <a
            href="/prevost/services"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-300 hover:text-white transition-colors"
          >
            View Services
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-7"
            >
              <div className="text-brand-400 text-sm font-black tracking-[0.3em] mb-5">{step.number}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-300 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ROIBooster() {
  const outcomes = [
    'Lower energy loss from leakage and pressure drop',
    'Cleaner future expansions without rework-heavy layouts',
    'Safer operator handling with quick-connect systems',
    'Less maintenance friction across large workshop networks',
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-brand-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
              ROI Focus
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5">
              Show customers the operational return before they ask for it.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
              Buyers convert faster when the value is concrete. This section frames the offer around reduced waste, safer installation, and stronger lifecycle economics.
            </p>
            <div className="space-y-4">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 mt-0.5 shrink-0" />
                  <p className="text-slate-700 font-medium leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 text-white p-8 md:p-10 shadow-2xl shadow-brand-950/10 border border-slate-900 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-brand-500/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <div className="text-3xl font-black text-brand-400 mb-2">30%</div>
                  <div className="text-sm uppercase tracking-[0.18em] text-slate-300 font-bold">Potential Energy Savings</div>
                </div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <div className="text-3xl font-black text-white mb-2">24h</div>
                  <div className="text-sm uppercase tracking-[0.18em] text-slate-300 font-bold">Response Rhythm</div>
                </div>
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Wrench className="w-6 h-6 text-brand-400" />
                  <h3 className="text-2xl font-bold">Need a sizing review?</h3>
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">
                  Direct buyers to the next best action with a clear technical offer instead of a generic brochure request.
                </p>
                <a
                  href="/prevost/products"
                  className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg shadow-brand-600/25"
                >
                  Explore Product Range
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DirectContactStrip() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-[2rem] bg-brand-600 text-white p-8 md:p-10 lg:p-14 shadow-2xl shadow-brand-600/20">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-extrabold uppercase tracking-[0.25em] mb-5">
                Ready To Convert
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
                Turn interest into a qualified project conversation.
              </h2>
              <p className="text-lg text-brand-50/90 leading-relaxed max-w-2xl">
                Give decision-makers three immediate ways to act: call, email, or review services. This lowers drop-off and improves lead quality from the landing page.
              </p>
            </div>

            <div className="grid gap-4">
              <a
                href="tel:+971554330532"
                className="flex items-center justify-between rounded-2xl bg-white text-slate-900 px-5 py-4 font-bold shadow-lg hover:translate-x-1 transition-transform"
              >
                <span className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-600" />
                  Call Sales Engineer
                </span>
                <span className="text-brand-700">+971 55 433 0532</span>
              </a>
              <a
                href="mailto:info@puritypts.com"
                className="flex items-center justify-between rounded-2xl bg-brand-700/70 border border-white/20 px-5 py-4 font-bold hover:bg-brand-700 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  Email Project Details
                </span>
                <span>info@puritypts.com</span>
              </a>
              <a
                href="/prevost/services"
                className="flex items-center justify-between rounded-2xl bg-[#020b14] border border-white/10 px-5 py-4 font-bold hover:bg-slate-950 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-brand-300" />
                  Review Engineering Support
                </span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className="py-12 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <ShieldCheck className="w-12 h-12 text-brand-600 mx-auto mb-6" />
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Global Quality & Standards</h2>
        <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed mb-12 text-lg">
          Prevost is fully committed to providing equipment that meets the most rigorous safety controls worldwide. Our products are ISO 9001, TÜV, and ASME certified for risk-free operations.
        </p>
        <div className="flex flex-wrap justify-center gap-6 lg:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-3xl font-extrabold text-slate-400">ISO 9001</div>
          <div className="text-3xl font-extrabold text-slate-400">TÜV SÜD</div>
          <div className="text-3xl font-extrabold text-slate-400">ASME</div>
          <div className="text-3xl font-extrabold text-slate-400">CE MARK</div>
        </div>
      </div>
    </section>
  );
}

export function CalculatorCTA() {
  return (
    <section className="py-16 lg:py-32 bg-[#020b14] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">
        <div className="md:w-1/2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-500/10 text-brand-400 rounded border border-brand-500/20 text-xs font-bold uppercase tracking-widest mb-6">
             Digital Tool
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Pressure Drop Calculator</h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-lg">
             Optimize your pneumatic efficiency by calculating the ideal diameter for your piping network. Stop energy waste and lower costs today.
          </p>
          <button className="bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg shadow-brand-600/20 flex items-center gap-3">
            <Calculator className="w-5 h-5" />
            Use Calculator Now
          </button>
        </div>
        <div className="md:w-1/2 w-full p-8 md:p-12 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl">
           <div className="space-y-6">
              <div className="space-y-2">
                 <div className="h-4 bg-white/10 rounded w-1/4"></div>
                 <div className="h-12 bg-white/5 border border-white/10 rounded-md"></div>
              </div>
              <div className="space-y-2">
                 <div className="h-4 bg-white/10 rounded w-1/3"></div>
                 <div className="h-12 bg-white/5 border border-white/10 rounded-md"></div>
              </div>
              <div className="h-14 bg-brand-600 rounded-md mt-8 shadow-inner shadow-white/20"></div>
           </div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const services = [
    { title: 'Network Audits', icon: BarChart3 },
    { title: 'Installation Support', icon: PenTool },
    { title: 'Team Training', icon: HelpingHand },
  ];
  return (
    <section id="services" className="py-16 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16">After-Sales Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((S, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-500/10 transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-brand-50 group-hover:bg-brand-600 rounded-xl flex items-center justify-center mx-auto mb-8 transition-colors duration-300">
                <S.icon className="w-8 h-8 text-brand-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{S.title}</h3>
              <p className="text-slate-600 leading-relaxed">Specialized technical support from our engineers to ensure your operations run at peak efficiency.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Sustainability() {
  return (
    <section className="py-16 lg:py-32 bg-brand-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 lg:gap-16">
        <div className="md:w-1/2">
          <Leaf className="w-16 h-16 text-brand-400 mb-8" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Environmental Sustainability</h2>
          <p className="text-brand-100/70 text-lg leading-relaxed">
            We engineer solutions that eradicate air leaks—the number one cause of energy waste in industrial applications. Our aluminum is 100% recyclable and built to last generations.
          </p>
        </div>
        <div className="md:w-1/2 w-full bg-white/5 p-12 rounded-2xl border border-white/10 text-center backdrop-blur-sm">
           <div className="text-6xl md:text-8xl font-extrabold text-brand-400 mb-4 drop-shadow-lg">30%</div>
           <div className="text-brand-100 uppercase tracking-widest text-sm font-bold">Average Energy Savings</div>
        </div>
      </div>
    </section>
  );
}

export function GlobalPresence() {
  const [selectedHub, setSelectedHub] = useState('dubai');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', company: '', phone: '', email: '', message: '' });

  const hubs = [
    {
      id: 'dubai',
      nameEn: 'Dubai (Jebel Ali)',
      nameAr: 'دبي (جبل علي)',
      roleEn: 'Official GCC Master Distributor - Purity Premium',
      roleAr: 'الموزع الإقليمي الرئيسي للخليج - بيورتي بريميزم',
      detailsEn: 'Our central hub in Dubai is operated by Purity Premium. It holds the largest inventory of Prevost PPS aluminum piping networks, high-performance safety couplings, and air treatment systems in the region. Features a live showroom, engineering consultancy, and immediate same-day dispatch.',
      detailsAr: 'المقر الرئيسي الإقليمي لشركة بيورتي بريميزم في المنطقة الحرة لجبل علي. يضم المستودع أضخم مخزون لشبكات أنابيب الألمنيوم من بريفوست (PPS)، وقارنات التوصيل السريع فائقة الأمان، ومجففات الهواء. نوفر صالة عرض حية، استشارات هندسية، وشحناً فورياً لجميع دول الخليج.',
      phone: '+971 55 433 0532',
      email: 'info@puritypts.com',
      addressEn: 'Showroom 4, Jebel Ali Free Zone (JAFZA), Dubai, UAE',
      addressAr: 'صالة عرض رقم 4، منطقة جبل علي الحرة (جافزا)، دبي، الإمارات العربية المتحدة',
      coordinates: { x: 420, y: 155 },
      coverageEn: 'GCC Wide, UAE, Oman, Kuwait, Qatar, Bahrain, Saudi Arabia',
      coverageAr: 'منطقة الخليج بأكملها، الإمارات، عمان، الكويت، قطر، البحرين، السعودية'
    },
    {
      id: 'abudhabi',
      nameEn: 'Abu Dhabi',
      nameAr: 'أبوظبي',
      roleEn: 'Industrial Support & Direct Supply',
      roleAr: 'الدعم الصناعي والتوريد المباشر للمصانع',
      detailsEn: 'Serving Abu Dhabi, Mussafah, and Al Ruwais industrial facilities with daily express delivery from our JAFZA warehouse. Certified Purity Premium technical teams are deployed locally in Abu Dhabi to provide complete on-site piping layout design and system auditing.',
      detailsAr: 'نخدم القطاعات الصناعية الكبرى في المصفح والرويس والمنطقة الصناعية بأبوظبي عبر رحلات شحن وتوصيل يومية مباشرة. مهندسو بيورتي بريميزم متواجدون محلياً بأبوظبي لتقديم المعاينة الموقعية وتصميم شبكات الهواء وقياس الفاقد بالكامل.',
      phone: '+971 55 433 0532',
      email: 'info@puritypts.com',
      addressEn: 'Mussafah Industrial Area M-14, Abu Dhabi, UAE',
      addressAr: 'منطقة المصفح الصناعية م-14، أبوظبي، الإمارات العربية المتحدة',
      coordinates: { x: 260, y: 260 },
      coverageEn: 'Abu Dhabi, Al Ruwais, Al Ain, Western Region',
      coverageAr: 'إمارة أبوظبي، مصفح، الرويس، العين، المنطقة الغربية'
    },
    {
      id: 'sharjah',
      nameEn: 'Sharjah & Northern Emirates',
      nameAr: 'الشارقة والإمارات الشمالية',
      roleEn: 'Manufacturing & Fast-Response Support',
      roleAr: 'دعم سريع لقطاع التصنيع والإنتاج الكثيف',
      detailsEn: 'Twice-daily logistical delivery loops covering Sharjah Industrial Areas, Sajaa, Ajman, and Ras Al Khaimah. Providing robust anti-leak compressed air loops, quick-release couplers, and heavy-duty blowguns for heavy fabrication and assembly plants.',
      detailsAr: 'خطوط إمداد لوجستية مرتين يومياً لتغطية مناطق الشارقة الصناعية، الصجعة، عجمان، ورأس الخيمة. نوفر حلول أنابيب الهواء المقاومة للتسريب بنسبة 100% وقارنات التوصيل الفولاذية المناسبة لمصانع الحديد، التعبئة، والسيراميك.',
      phone: '+971 55 433 0532',
      email: 'info@puritypts.com',
      addressEn: 'Al Sajaa Industrial Area, Sharjah, UAE',
      addressAr: 'منطقة الصجعة الصناعية، الشارقة، الإمارات العربية المتحدة',
      coordinates: { x: 470, y: 110 },
      coverageEn: 'Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah',
      coverageAr: 'الشارقة، عجمان، أم القيوين، رأس الخيمة، الفجيرة'
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setShowInquiryModal(false);
      setInquirySubmitted(false);
      setFormData({ name: '', company: '', phone: '', email: '', message: '' });
    }, 2500);
  };

  const currentHub = hubs.find(h => h.id === selectedHub) || hubs[0];

  return (
    <section id="global-presence" className="py-16 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_#006DD1_1.5px,_transparent_1.5px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/15 border border-brand-500/30 text-brand-400 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Globe className="w-4 h-4 text-brand-400 animate-spin" /> Official GCC Partner
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Trusted Distribution Network
          </h2>
          <p className="max-w-3xl mx-auto text-slate-300 text-lg leading-relaxed">
            We are proud to present our <strong className="text-brand-400 font-extrabold">Official UAE & GCC Distribution Partner: Purity Premium (بيورتي بريميزم)</strong>. Serving modern industrial facilities with high-tech Prevost piping and immediate local stock.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Detailed Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-800/80 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-bl-full pointer-events-none"></div>
            
            <div>
              {/* Header Selector Tabs */}
              <div className="flex gap-2 p-1.5 bg-slate-900 rounded-xl mb-8 border border-slate-800/60">
                {hubs.map((hub) => (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHub(hub.id)}
                    className={`flex-1 py-2 px-3 text-xs md:text-sm font-bold rounded-lg transition-all duration-300 ${
                      selectedHub === hub.id 
                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    {hub.nameEn}
                  </button>
                ))}
              </div>

              {/* Dynamic Content */}
              <motion.div
                key={currentHub.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-500/10 border border-brand-500/20 text-brand-400 rounded text-[11px] font-extrabold uppercase tracking-wide mb-3">
                    {currentHub.id === 'dubai' ? '⭐ Central GCC Head Office' : '📍 Authorized Support Center'}
                  </div>
                  <h3 className="text-2xl font-black text-white leading-tight mb-2">
                    {currentHub.nameEn}
                  </h3>
                  <h4 className="text-xl font-bold text-brand-400 mb-4 font-sans leading-relaxed" dir="rtl">
                    {currentHub.nameAr}
                  </h4>
                  
                  <p className="text-sm font-bold text-slate-300 border-l-2 border-brand-500 pl-3 py-1 mb-2">
                    {currentHub.roleEn}
                  </p>
                  <p className="text-sm font-bold text-slate-300 border-r-2 border-brand-500 pr-3 py-1 mb-4 text-right" dir="rtl">
                    {currentHub.roleAr}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {currentHub.detailsEn}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed text-right font-medium" dir="rtl">
                    {currentHub.detailsAr}
                  </p>
                </div>

                <div className="border-t border-slate-800/80 pt-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs md:text-sm text-slate-300">
                    <MapPin className="w-5 h-5 text-brand-400 shrink-0" />
                    <div>
                      <span className="text-[10px] text-slate-500 block">Address / العنوان</span>
                      <span className="font-semibold">{currentHub.addressEn}</span>
                      <span className="block text-right text-xs text-slate-400 mt-0.5" dir="rtl">{currentHub.addressAr}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
                      <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                      <div>
                        <span className="text-[9px] text-slate-500 block">Phone</span>
                        <span className="font-mono font-bold text-white">{currentHub.phone}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-xs md:text-sm text-slate-300">
                      <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                      <div>
                        <span className="text-[9px] text-slate-500 block">Email</span>
                        <span className="font-semibold text-brand-400 break-all">{currentHub.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/40 mt-4">
                    <div className="flex gap-2 items-start">
                      <Package className="w-4.5 h-4.5 text-brand-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider block font-bold">Delivery & Supply Coverage</span>
                        <span className="text-xs text-slate-300 font-semibold block">{currentHub.coverageEn}</span>
                        <span className="text-xs text-brand-400 font-medium block mt-1 text-right" dir="rtl">{currentHub.coverageAr}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => setShowInquiryModal(true)}
                className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold transition-all duration-300 flex justify-center items-center gap-2 shadow-lg shadow-brand-600/40 hover:shadow-brand-600/60 border border-brand-500/30 group"
              >
                <span>Request GCC Technical Quote</span>
                <span className="mx-1 font-normal opacity-50">|</span>
                <span dir="rtl" className="font-medium text-xs">طلب تسعيرة أو استشارة فنية</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive UAE High-Tech Map Layout */}
          <div className="lg:col-span-7 bg-slate-950/50 rounded-3xl border border-slate-800/60 p-6 flex flex-col justify-between relative min-h-[500px] overflow-hidden">
            {/* Grid Map Background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
            
            {/* Legend / Info Headers */}
            <div className="flex items-center justify-between z-10 border-b border-slate-800/60 pb-4 mb-4">
              <div>
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Interactive Network Map</h4>
                <p className="text-lg font-black text-white">United Arab Emirates (UAE)</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full border border-brand-500/20">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-ping"></span>
                  Purity Premium Network
                </span>
              </div>
            </div>

            {/* Stylized Vector UAE Map Canvas */}
            <div className="flex-1 flex items-center justify-center relative min-h-[350px]">
              <svg 
                viewBox="0 0 700 400" 
                className="w-full h-full max-h-[420px] filter drop-shadow-[0_12px_24px_rgba(0,109,209,0.15)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Coastal Line Decor */}
                <path 
                  d="M 50,280 C 130,270 200,240 260,220 C 320,200 380,140 440,120 C 480,100 520,60 560,40" 
                  fill="none" 
                  stroke="rgba(0,109,209,0.12)" 
                  strokeWidth="3" 
                  strokeDasharray="8 6" 
                />
                
                {/* Persian Gulf Label */}
                <text x="120" y="160" fill="rgba(148, 163, 184, 0.15)" className="text-[13px] tracking-widest font-bold uppercase select-none font-sans">
                  Persian Gulf / الخليج العربي
                </text>

                {/* Connection lines from Dubai (as central logistics center) to all other hubs */}
                {hubs.map((hub) => {
                  if (hub.id === 'dubai') return null;
                  const isSelected = selectedHub === hub.id;
                  return (
                    <g key={`line-${hub.id}`}>
                      {/* Active glowing line */}
                      <line 
                        x1={420} 
                        y1={155} 
                        x2={hub.coordinates.x} 
                        y2={hub.coordinates.y} 
                        stroke={isSelected ? '#006DD1' : 'rgba(71, 85, 105, 0.4)'} 
                        strokeWidth={isSelected ? '2' : '1.5'} 
                        strokeDasharray={isSelected ? '4 3' : '6 4'} 
                        className="transition-all duration-300"
                      />
                      {/* Pulsing signal on lines */}
                      {isSelected && (
                        <circle r="3" fill="#38bdf8">
                          <animateMotion 
                            path={`M 420,155 L ${hub.coordinates.x},${hub.coordinates.y}`} 
                            dur="2s" 
                            repeatCount="indefinite" 
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}

                {/* Draw UAE Map Regions using stylized abstract geometric polygons/circles */}
                {/* Abu Dhabi Region Shape */}
                <path
                  onClick={() => setSelectedHub('abudhabi')}
                  className={`cursor-pointer transition-all duration-300 outline-none ${
                    selectedHub === 'abudhabi' 
                      ? 'fill-brand-500/20 stroke-brand-500 stroke-[2]' 
                      : 'fill-slate-900/40 stroke-slate-800 hover:fill-slate-800/40 hover:stroke-slate-700'
                  }`}
                  d="M 40,310 L 150,290 L 220,280 L 280,240 L 330,220 L 360,250 L 350,300 L 250,340 L 100,340 Z"
                />

                {/* Dubai Region Shape */}
                <path
                  onClick={() => setSelectedHub('dubai')}
                  className={`cursor-pointer transition-all duration-300 outline-none ${
                    selectedHub === 'dubai' 
                      ? 'fill-brand-500/30 stroke-brand-500 stroke-[2.5]' 
                      : 'fill-slate-900/40 stroke-slate-800 hover:fill-slate-800/40 hover:stroke-slate-700'
                  }`}
                  d="M 330,220 L 410,130 L 440,135 L 450,170 L 360,250 Z"
                />

                {/* Sharjah & Northern Emirates Region Shape */}
                <path
                  onClick={() => setSelectedHub('sharjah')}
                  className={`cursor-pointer transition-all duration-300 outline-none ${
                    selectedHub === 'sharjah' 
                      ? 'fill-brand-500/20 stroke-brand-500 stroke-[2]' 
                      : 'fill-slate-900/40 stroke-slate-800 hover:fill-slate-800/40 hover:stroke-slate-700'
                  }`}
                  d="M 440,135 L 490,90 L 520,100 L 490,160 L 450,170 Z"
                />

                {/* Static region markers & text labels */}
                {/* Abu Dhabi Label */}
                <g className="pointer-events-none">
                  <circle cx="260" cy="260" r="4" className="fill-slate-400" />
                  <text x="210" y="245" fill="#94a3b8" className="text-[11px] font-bold">Abu Dhabi / أبوظبي</text>
                </g>

                {/* Dubai Master Hub Marker */}
                <g onClick={() => setSelectedHub('dubai')} className="cursor-pointer group">
                  {/* Glowing Radar rings */}
                  <circle cx="420" cy="155" r="22" className="fill-none stroke-brand-500/40 stroke-[1.5] animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />
                  <circle cx="420" cy="155" r="12" className="fill-brand-500/20 stroke-brand-500/60 stroke-[1.5] animate-pulse pointer-events-none" />
                  {/* Master Star Marker */}
                  <circle cx="420" cy="155" r="7" className="fill-white stroke-brand-600 stroke-[3] shadow" />
                  <text x="435" y="152" fill="#ffffff" className="text-[12px] font-black tracking-wide filter drop-shadow">DUBAI (HQ)</text>
                  <text x="435" y="166" fill="#38bdf8" className="text-[9px] font-extrabold uppercase tracking-widest">Purity Premium</text>
                </g>

                {/* Sharjah Marker */}
                <g onClick={() => setSelectedHub('sharjah')} className="cursor-pointer">
                  <circle cx="470" cy="110" r="5" className={`transition-colors ${selectedHub === 'sharjah' ? 'fill-brand-400 stroke-white' : 'fill-slate-400 stroke-slate-900'} stroke-2`} />
                  <text x="480" y="105" fill={selectedHub === 'sharjah' ? '#38bdf8' : '#94a3b8'} className="text-[10px] font-bold">Sharjah / الشارقة</text>
                </g>

                {/* Al Ain Reference Point */}
                <g className="pointer-events-none">
                  <circle cx="340" cy="270" r="3" className="fill-slate-500" />
                  <text x="315" y="290" fill="#64748b" className="text-[9px] font-semibold">Al Ain / العين</text>
                </g>
              </svg>
            </div>

            {/* Quick stats on GCC operations */}
            <div className="grid grid-cols-3 gap-4 border-t border-slate-800/60 pt-4 mt-4 text-center">
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/40">
                <span className="text-xl md:text-2xl font-black text-white block">100%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">Local GCC Inventory</span>
                <span className="text-[9px] text-brand-400 block" dir="rtl">مخزون محلي متكامل</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/40">
                <span className="text-xl md:text-2xl font-black text-brand-400 block">24 Hr</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">On-Site Sizing</span>
                <span className="text-[9px] text-brand-400 block" dir="rtl">معاينة وتصميم فني</span>
              </div>
              <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/40">
                <span className="text-xl md:text-2xl font-black text-white block">Fast Track</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold">JAFZA Logistics Hub</span>
                <span className="text-[9px] text-brand-400 block" dir="rtl">تخليص لوجستي فوري</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-800 max-w-lg w-full rounded-2xl p-6 md:p-8 shadow-2xl relative">
            <button 
              onClick={() => setShowInquiryModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
            >
              &times;
            </button>
            
            <div className="mb-6">
              <span className="inline-block px-2.5 py-0.5 bg-brand-500/20 text-brand-400 border border-brand-500/30 rounded text-[10px] font-extrabold uppercase mb-2">
                Purity Premium Distribution
              </span>
              <h3 className="text-xl font-bold text-white">Contact Purity Premium GCC</h3>
              <p className="text-slate-400 text-sm mt-1">Get certified project pricing & air-flow calculations.</p>
              <p className="text-xs text-brand-400 font-medium text-right mt-1" dir="rtl">تواصل مع بيورتي بريميزم لتسعير المشاريع المعتمدة وحسابات تدفق الهواء</p>
            </div>

            {inquirySubmitted ? (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto text-3xl">
                  ✓
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Thank You! / شكراً جزيلاً</h4>
                  <p className="text-sm text-slate-400 mt-1">Your inquiry has been routed to our GCC sales engineers.</p>
                  <p className="text-xs text-brand-400 mt-2" dir="rtl">تم إرسال طلبكم بنجاح إلى مهندسي المبيعات وسنتواصل معكم فوراُ.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase">Full Name / الاسم الكامل</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Mohamed Al Suwaidi" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase">Company / الشركة</label>
                    <input 
                      type="text" 
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Industrial Group" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase">Phone / رقم الهاتف</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+971 50 XXX XXXX" 
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase">Email Address / البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@company.ae" 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 font-bold mb-1.5 uppercase">Project Details / تفاصيل طلبك</label>
                  <textarea 
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="E.g., Sizing for a new 40 HP compressor piping network..." 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 px-3.5 text-sm text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full mt-2 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold transition-colors shadow-lg shadow-brand-600/30"
                >
                  Send Urgent Inquiry / إرسال طلب عاجل
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export function VideoTour() {
  return (
    <section className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group cursor-pointer border border-slate-200">
          <img src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2000&auto=format&fit=crop" alt="Factory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-[#020b14]/40 group-hover:bg-[#020b14]/50 transition-colors flex items-center justify-center">
            <div className="w-24 h-24 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
               <Play className="w-10 h-10 ml-2" />
            </div>
          </div>
          <div className="absolute bottom-10 left-10 text-white z-10">
            <h3 className="text-3xl font-extrabold mb-2">Inside Our Manufacturing</h3>
            <p className="text-white/80 text-lg font-medium">Discover the engineering precision behind every product.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const t = [
    { text: 'The PPS piping system completely changed our view on efficiency. Zero leaks anymore.', author: 'Facility Director' },
    { text: 'Prevost pneumatic tools became the standard across all our global workshops.', author: 'Lead Maintenance Engineer' }
  ];
  return (
    <section className="py-16 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <MessagesSquare className="w-12 h-12 text-brand-600 mx-auto mb-6" />
        <h2 className="text-4xl font-extrabold text-slate-900 mb-16">Success Partners</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {t.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-left">
              <p className="text-slate-600 text-xl italic mb-8 leading-relaxed font-serif">"{item.text}"</p>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Automotive Group</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function News() {
  return (
    <section className="py-16 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
           <div>
             <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Media Center</h2>
             <p className="text-slate-600 text-lg max-w-xl">Latest exhibitions, insights, and news in the world of compressed air.</p>
           </div>
           <button className="flex items-center gap-2 text-brand-600 font-bold hover:text-brand-700 transition-colors group">
             View All News
             <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <div key={i} className="group cursor-pointer">
               <div className="bg-slate-200 aspect-[4/3] rounded-xl mb-6 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="text-xs text-brand-600 font-bold mb-3 uppercase tracking-widest">March 2024</div>
               <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-tight">
                 Launch of the new generation with S1 Safety Tech
               </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQ() {
  return (
    <section className="py-16 lg:py-32 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <HelpCircle className="w-12 h-12 text-brand-600 mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {[
            { q: 'Are the pipes compatible with legacy networks?', a: 'Yes, we provide specialized adaptor fittings for seamless connection.'},
            { q: 'How do I choose the correct fitting?', a: 'Use our digital matching tool on the portal or contact our sales engineering team.'}
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border border-slate-200 hover:border-brand-300 transition-colors">
               <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
               <p className="text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
