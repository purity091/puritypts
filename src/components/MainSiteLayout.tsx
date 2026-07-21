import { useState } from 'react';
import { NavLink, Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Sectors', href: '/sectors' },
  { name: 'Partnership', href: '/partnership' },
  { name: 'Contact', href: '/contact' },
];

export default function MainSiteLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-900 font-inter">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-slate-950">
            Purity <span className="text-brand-600">Brands</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm font-bold uppercase tracking-[0.16em] transition-colors ${
                    isActive ? 'text-brand-600' : 'text-slate-600 hover:text-slate-950'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+971554330532" className="flex items-center gap-2 text-sm font-bold text-slate-700">
              <Phone className="h-4 w-4 text-brand-600" />
              +971 55 433 0532
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-600"
            >
              Start Inquiry
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-900 lg:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white lg:hidden">
            <div className="mx-auto max-w-7xl space-y-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-[0.16em] ${
                      isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-700'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href="mailto:info@puritypts.com"
                className="mt-2 block rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.16em] text-white"
              >
                Contact Corporate
              </a>
            </div>
          </div>
        )}
      </header>

      <main key={pathname}>
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="mb-4 text-2xl font-extrabold uppercase tracking-tight text-white">
              Purity <span className="text-brand-500">Brands</span>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-400">
              Strategic distribution platform for premium architectural and industrial brands across the GCC,
              helping manufacturers and project stakeholders move from interest to execution with clarity.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">Quick Links</h3>
            <div className="space-y-3 text-sm">
              {navItems.map((item) => (
                <Link key={item.href} to={item.href} className="block text-slate-400 transition-colors hover:text-white">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white">Direct Contact</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>Dubai, United Arab Emirates</p>
              <a href="tel:+971554330532" className="block transition-colors hover:text-white">
                +971 55 433 0532
              </a>
              <a href="mailto:info@puritypts.com" className="block transition-colors hover:text-white">
                info@puritypts.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
