import { ArrowRight, CheckCircle2, CircleDot, Cog, Gauge, Shield, Wind } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getPrevostCategory, getPrevostCategoryItem } from '../data/productCatalog';

const iconMap = {
  hose: CircleDot,
  reel: Gauge,
  tool: Cog,
  impact: Shield,
  filter: Wind,
  air: Wind,
  connector: CircleDot,
  network: Gauge,
} as const;

const accentMap = {
  brand: 'bg-brand-600',
  slate: 'bg-slate-900',
} as const;

export function ProductCategoryLandingPage() {
  const { categorySlug } = useParams();
  const category = categorySlug ? getPrevostCategory(categorySlug) : undefined;

  if (!category) {
    return (
      <div className="min-h-screen bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900">Category not found</h1>
          <p className="mb-8 text-slate-600">The requested Prevost product category does not exist.</p>
          <Link to="/products" className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-20 pt-40 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,139,242,0.22),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.06),transparent_24%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-300">
              {category.eyebrow}
            </div>
            <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {category.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{category.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {category.bullets.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-300" />
                  <p className="text-sm leading-relaxed text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm shadow-2xl">
            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div key={item.slug} className="rounded-2xl border border-white/10 bg-white p-5">
                    <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${accentMap[item.accent]} text-white`}>
                      <Icon className="h-7 w-7" />
                    </div>
                    <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">{item.subtitle}</div>
                    <div className="mt-2 text-xl font-bold text-slate-950">{item.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-700">
              Category Overview
            </div>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Structured product information instead of flat catalog lists.
            </h2>
            <div className="space-y-5">
              {category.body.map((paragraph) => (
                <p key={paragraph} className="text-lg leading-relaxed text-slate-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-[#f7faff] p-8 shadow-sm">
            <h3 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-950">How this page converts better</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <p className="text-slate-700 leading-relaxed">The category explains the system logic before the user chooses a product family.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <p className="text-slate-700 leading-relaxed">Each family opens into its own decision page instead of keeping all information buried in one screen.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <p className="text-slate-700 leading-relaxed">The layout is tuned for B2B readability on desktop and mobile.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-700">
              Product Families
            </div>
            <h2 className="mb-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Explore the category with clearer product paths.
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Each family below opens into a dedicated page with purpose, fit, and application framing.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {category.items.map((item) => {
              const Icon = iconMap[item.icon];
              return (
                <Link
                  key={item.slug}
                  to={`/products/${category.slug}/${item.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl"
                >
                  <div className="mb-6 rounded-[1.5rem] border border-slate-200 bg-[#f7faff] p-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${accentMap[item.accent]} text-white`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <div className="mt-5 text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">{item.subtitle}</div>
                    <div className="mt-2 text-2xl font-bold text-slate-950">{item.title}</div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.intro}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-700 transition-all group-hover:gap-3">
                    View Product Page
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ProductFamilyDetailPage() {
  const { categorySlug, itemSlug } = useParams();
  const category = categorySlug ? getPrevostCategory(categorySlug) : undefined;
  const item = categorySlug && itemSlug ? getPrevostCategoryItem(categorySlug, itemSlug) : undefined;

  if (!category || !item) {
    return (
      <div className="min-h-screen bg-slate-50 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-4xl font-extrabold text-slate-900">Product not found</h1>
          <p className="mb-8 text-slate-600">The requested Prevost product page does not exist.</p>
          <Link to="/products" className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[item.icon];

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950 px-4 pb-18 pt-40 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(12,139,242,0.2),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.05),transparent_24%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Link to={`/products/${category.slug}`} className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-300">
            {category.title}
            <ArrowRight className="h-4 w-4 rotate-180" />
          </Link>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/10 bg-white p-8 shadow-2xl">
              <div className={`flex h-24 w-24 items-center justify-center rounded-[1.75rem] ${accentMap[item.accent]} text-white`}>
                <Icon className="h-12 w-12" />
              </div>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-[#f7faff] p-8">
                <div className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">{item.subtitle}</div>
                <div className="mt-3 text-4xl font-extrabold text-slate-950">{item.title}</div>
              </div>
            </div>
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.25em] text-brand-300">
                {category.title}
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">{item.title}</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{item.intro}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a href="mailto:info@puritypts.com" className="inline-flex items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
                  Contact an Expert
                </a>
                <Link to={`/products/${category.slug}`} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white">
                  View All {category.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-[#f7faff] p-8 shadow-sm">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-950">Why this product matters</h2>
            <div className="space-y-4">
              {item.bullets.map((bullet) => (
                <div key={bullet} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <p className="text-slate-700 leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-950">Selection summary</h2>
            <div className="space-y-5">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Category</div>
                <div className="text-xl font-bold text-slate-950">{category.title}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Reference Label</div>
                <div className="text-xl font-bold text-slate-950">{item.subtitle}</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Best For</div>
                <div className="text-slate-700 leading-relaxed">{item.bestFor}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
