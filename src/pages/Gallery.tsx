import { motion } from 'motion/react';

const galleryModules = import.meta.glob('../../image-nicheha/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const categoryRules = [
  { match: /(school|academy|education|steam|rec-center)/i, label: 'Education' },
  { match: /(hotel|hospitality|inn|wendys)/i, label: 'Hospitality & Brands' },
  { match: /(multifamily|apts|residential|villa|corner|icon|social)/i, label: 'Residential & Multifamily' },
  { match: /(office|studio|interiors)/i, label: 'Office & Interiors' },
  { match: /(concrete|board|brick|block|vintagewood|illumination)/i, label: 'Material Showcase' },
];

const formatTitle = (fileName: string) =>
  fileName
    .replace(/\.[^.]+$/, '')
    .replace(/_ympj$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

const detectCategory = (fileName: string) =>
  categoryRules.find((rule) => rule.match.test(fileName))?.label ?? 'Architectural Projects';

const galleryItems = Object.entries(galleryModules)
  .map(([path, image]) => {
    const fileName = path.split('/').pop() ?? path;
    return {
      title: formatTitle(fileName),
      category: detectCategory(fileName),
      image,
    };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-nichiha-light/40 to-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mx-auto mb-8 h-1.5 w-20 rounded-full bg-nichiha-green" />
          <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-nichiha-blue">
            Nichiha Gallery
          </p>
          <h1 className="mb-6 text-4xl font-extrabold uppercase tracking-tight text-nichiha-dark md:text-5xl lg:text-6xl">
            Project Inspiration
          </h1>
          <p className="text-lg font-medium leading-relaxed text-gray-600">
            Explore a dedicated collection of Nichiha architectural applications, from education and hospitality
            to multifamily and material-focused showcase projects.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-nichiha-light bg-white px-6 py-5 shadow-sm">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-nichiha-green">English Gallery Page</p>
            <p className="mt-2 text-sm text-gray-600">All images on this page are loaded from the local `image-nicheha` folder.</p>
          </div>
          <div className="rounded-full bg-nichiha-dark px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white">
            {galleryItems.length} Images
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-nichiha-light">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-nichiha-dark">
                  {item.category}
                </div>
                <div className="absolute bottom-4 right-4 rounded-full bg-nichiha-blue px-3 py-1 text-xs font-extrabold uppercase tracking-[0.18em] text-white">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              <div className="space-y-3 p-6">
                <h2 className="text-lg font-extrabold uppercase leading-snug tracking-wide text-nichiha-dark transition-colors group-hover:text-nichiha-blue">
                  {item.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  Nichiha facade and cladding inspiration for contemporary architectural projects.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
