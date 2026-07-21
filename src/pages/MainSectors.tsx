import { motion } from 'motion/react';
import { Factory, GraduationCap, Hotel, Landmark, Warehouse, Building } from 'lucide-react';

const sectors = [
  { icon: Building, title: 'Commercial Developments', text: 'Office towers, mixed-use assets, and branded destinations requiring premium envelopes and reliable specifications.' },
  { icon: Landmark, title: 'Residential & Multifamily', text: 'Projects that need facade durability, visual differentiation, and scalable deployment across repeated units.' },
  { icon: Hotel, title: 'Hospitality', text: 'Materials and systems where finish quality, lifecycle performance, and installation clarity directly affect guest-facing assets.' },
  { icon: GraduationCap, title: 'Education', text: 'Schools, campuses, and institutional projects where safety, longevity, and maintainability influence selection.' },
  { icon: Factory, title: 'Industrial Plants', text: 'Production facilities prioritizing uptime, energy efficiency, leak reduction, and operational safety.' },
  { icon: Warehouse, title: 'Logistics & Workshops', text: 'Practical environments that require robust compressed air and fluid infrastructure with room to expand.' },
];

export default function MainSectors() {
  return (
    <div className="bg-white">
      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.35em] text-brand-600">Sectors</p>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Clear market fit for the buyers who matter most.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              Instead of one generic brand story, the site now shows where Purity Brands creates practical value
              across architecture, development, and industrial operations.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-[1.75rem] border border-slate-200 bg-[#f7faff] p-8 shadow-sm"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white">
                  <sector.icon className="h-7 w-7" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-slate-950">{sector.title}</h2>
                <p className="text-slate-600 leading-7">{sector.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
