export type PrevostCatalogItem = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  bullets: string[];
  bestFor: string;
  icon: 'hose' | 'reel' | 'tool' | 'impact' | 'filter' | 'air' | 'connector' | 'network';
  accent: 'brand' | 'slate';
};

export type PrevostCatalogCategory = {
  slug: string;
  title: string;
  heroTitle: string;
  eyebrow: string;
  description: string;
  body: string[];
  bullets: string[];
  ctaLabel: string;
  items: PrevostCatalogItem[];
};

export const prevostCatalog: PrevostCatalogCategory[] = [
  {
    slug: 'hoses-hose-reels',
    title: 'Hoses & Hose Reels',
    heroTitle: 'Hoses and hose reels built for daily workshop performance.',
    eyebrow: 'Hoses & Hose Reels',
    description:
      'Prevost offers a wide selection of heavy-duty, easy-to-use automatic reels and hose solutions designed for professional compressed air environments.',
    body: [
      'The use of an automatic hose reel is essential in a workshop. Prevost recognizes this requirement and offers robust equipment focused on reliability, safety, and day-to-day usability.',
      'This category is designed to help buyers evaluate extension logic, hose management, and point-of-use efficiency without losing time in overly generic product navigation.',
    ],
    bullets: [
      'Heavy-duty reel solutions for repeated professional use.',
      'Cleaner hose management and better workstation organization.',
      'More practical compressed air access across garages and production environments.',
    ],
    ctaLabel: 'Contact a reel specialist',
    items: [
      {
        slug: 'automatic-hose-reels',
        title: 'Automatic Hose Reels',
        subtitle: 'Workshop-ready retraction systems',
        intro:
          'Automatic hose reels help keep compressed air hoses protected, organized, and ready for repeated daily use.',
        bullets: [
          'Reduces hose clutter around active work areas.',
          'Improves equipment lifespan through cleaner storage.',
          'Supports faster operator access during repetitive tasks.',
        ],
        bestFor: 'Garages, service bays, industrial workstations, and mobile maintenance zones.',
        icon: 'reel',
        accent: 'brand',
      },
      {
        slug: 'compressed-air-hoses',
        title: 'Compressed Air Hoses',
        subtitle: 'Flexible delivery lines',
        intro:
          'Compressed air hoses designed for dependable movement, repeated handling, and compatibility with professional air installations.',
        bullets: [
          'Supports regular connection and movement across workstations.',
          'Practical for environments requiring flexibility and fast setup.',
          'Designed for use with air tools, couplings, and distribution points.',
        ],
        bestFor: 'Maintenance teams, workshop operators, and users needing flexible point-to-point air delivery.',
        icon: 'hose',
        accent: 'slate',
      },
      {
        slug: 'extensions',
        title: 'Extensions',
        subtitle: 'Extended reach accessories',
        intro:
          'Extensions help increase usable reach while maintaining a more efficient and organized compressed air workflow.',
        bullets: [
          'Improves access across larger work zones.',
          'Useful when fixed outlets are not close to the point of use.',
          'Complements hose and reel setups in practical field conditions.',
        ],
        bestFor: 'Large workshops, body shops, multi-bay operations, and utility-heavy workspaces.',
        icon: 'connector',
        accent: 'brand',
      },
    ],
  },
  {
    slug: 'pneumatic-tools',
    title: 'Pneumatic Tools',
    heroTitle: 'Technical pneumatic tools adapted to professional requirements.',
    eyebrow: 'Pneumatic Tools',
    description:
      'With its range of pneumatic tools, Prevost develops technical products adapted to the requirements of professionals.',
    body: [
      'This category is positioned around product clarity and workflow fit, helping buyers understand which tool families support workshop speed, durability, and ergonomic handling.',
      'The focus is not just on having tools in the catalog, but on showing where each family supports better compressed air usage at the point of work.',
    ],
    bullets: [
      'Professional pneumatic tools for workshop and industrial use.',
      'Cleaner alignment between application type and tool family.',
      'Stronger product navigation for faster B2B decision-making.',
    ],
    ctaLabel: 'Discuss tool selection',
    items: [
      {
        slug: 'blowguns',
        title: 'Blowguns',
        subtitle: 'Precision air cleaning tools',
        intro:
          'Blowguns help operators manage air cleaning, drying, and workstation support tasks with practical compressed air control.',
        bullets: [
          'Suited for general-purpose air handling tasks.',
          'Supports operator productivity in repetitive workshop activity.',
          'Designed for daily use in maintenance and production settings.',
        ],
        bestFor: 'Workshops, maintenance areas, assembly support, and cleaning operations.',
        icon: 'air',
        accent: 'brand',
      },
      {
        slug: 'impact-tools',
        title: 'Impact Tools',
        subtitle: 'High-duty pneumatic action',
        intro:
          'Impact-oriented pneumatic tools are built for tougher fastening and repetitive industrial handling requirements.',
        bullets: [
          'Supports heavier operational demands than light-duty hand tools.',
          'Useful where speed and consistent pneumatic power matter.',
          'Fits teams standardizing reliable tool performance.',
        ],
        bestFor: 'Automotive maintenance, industrial workshops, and repetitive fastening environments.',
        icon: 'impact',
        accent: 'slate',
      },
      {
        slug: 'inflation-and-service-tools',
        title: 'Inflation & Service Tools',
        subtitle: 'Support tools for workshop use',
        intro:
          'A support-focused pneumatic tool family for service tasks requiring reliable compressed air integration.',
        bullets: [
          'Extends compressed air utility beyond core production tasks.',
          'Useful for workshop readiness and service flexibility.',
          'Helps create a more complete point-of-use tool environment.',
        ],
        bestFor: 'Garages, service workshops, maintenance teams, and multi-function air stations.',
        icon: 'tool',
        accent: 'brand',
      },
    ],
  },
  {
    slug: 'compressed-air-treatment',
    title: 'Compressed Air Treatment',
    heroTitle: 'Air treatment systems for cleaner, higher-performance networks.',
    eyebrow: 'Compressed Air Treatment',
    description:
      'A high-performance network must be equipped with an efficient compressed air filtration system. Prevost has several lines adapted to compressor rooms and points of use.',
    body: [
      'This category clarifies the treatment side of the compressed air offer so buyers can understand how filtration and conditioning improve reliability across the entire installation.',
      'The goal is to make treatment feel like a core system decision rather than an afterthought attached to the network later.',
    ],
    bullets: [
      'Filtration and treatment options for compressor rooms and points of use.',
      'Improves network performance, protection, and downstream reliability.',
      'Better alignment between air quality needs and treatment architecture.',
    ],
    ctaLabel: 'Contact an air treatment expert',
    items: [
      {
        slug: 'filtration-units',
        title: 'Filtration Units',
        subtitle: 'Network protection and air quality',
        intro:
          'Filtration units help keep compressed air cleaner and more suitable for downstream tools, circuits, and professional use conditions.',
        bullets: [
          'Improves air quality across the network.',
          'Helps protect connected equipment and use points.',
          'Supports better overall treatment planning for compressed air systems.',
        ],
        bestFor: 'Installations where air cleanliness and equipment protection are operational priorities.',
        icon: 'filter',
        accent: 'brand',
      },
      {
        slug: 'point-of-use-treatment',
        title: 'Point-of-Use Treatment',
        subtitle: 'Localized conditioning',
        intro:
          'Point-of-use treatment helps tailor compressed air quality closer to the workstation or critical application area.',
        bullets: [
          'Useful where air quality requirements vary by use point.',
          'Supports localized treatment logic within larger installations.',
          'Creates better control for performance-sensitive tasks.',
        ],
        bestFor: 'Workstations, application-specific zones, and mixed-use compressed air environments.',
        icon: 'air',
        accent: 'slate',
      },
      {
        slug: 'compressor-room-treatment',
        title: 'Compressor Room Treatment',
        subtitle: 'Centralized treatment architecture',
        intro:
          'Treatment solutions positioned at the compressor room level to support more stable network-wide air quality and performance.',
        bullets: [
          'Creates a stronger upstream treatment foundation.',
          'Supports larger network consistency from source to downstream use.',
          'Useful for structured central planning of compressed air quality.',
        ],
        bestFor: 'Centralized compressed air installations serving multiple departments or production zones.',
        icon: 'network',
        accent: 'brand',
      },
    ],
  },
];

export function getPrevostCategory(slug: string) {
  return prevostCatalog.find((category) => category.slug === slug);
}

export function getPrevostCategoryItem(categorySlug: string, itemSlug: string) {
  return getPrevostCategory(categorySlug)?.items.find((item) => item.slug === itemSlug);
}
