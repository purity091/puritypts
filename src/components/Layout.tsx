import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Linkedin, ArrowUp, Phone, Mail, MapPin, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

type NavItem = {
  name: string;
  href?: string;
  items?: NavItem[];
};

const navigation: NavItem[] = [
  {
    name: 'Products',
    href: '/products',
    items: [
      { name: 'Architectural Wall Panels', href: '/products' },
      { name: 'Premium Plank Siding', href: '/products' },
      { name: 'Hardware & Accessories', href: '/products' },
    ],
  },
  {
    name: 'Applications',
    href: '#',
    items: [
      { name: 'Commercial', href: '/commercial' },
      {
        name: 'Residential',
        href: '#',
        items: [
          { name: 'Custom Homes', href: '/residential' },
          { name: 'Multifamily', href: '/multifamily' },
          { name: 'Architectural Wall Panel', href: '/residential-awp' },
          { name: 'Premium Siding', href: '/gallery' },
        ],
      },
      { name: 'Brand Partners', href: '/gallery' },
      { name: 'Hospitality', href: '/gallery' },
      { name: 'Interiors', href: '/gallery' },
      {
        name: 'Modular',
        href: '#',
        items: [
          { name: 'Ribbed', href: '/gallery' },
          { name: 'VintageBrick', href: '/gallery' },
          { name: 'Illumination', href: '/gallery' },
        ],
      },
    ],
  },
  {
    name: 'Resources',
    href: '/product-information',
    items: [
      { name: 'Resource Center', href: '/product-information' },
      { name: 'Architectural Detail Finder', href: '/product-information' },
      {
        name: 'Technical Support',
        href: '#',
        items: [
          { name: 'Pre-Construction Meeting', href: '/contact' },
          { name: 'Installation Videos', href: '/installation' },
        ],
      },
      {
        name: 'Education',
        href: '#',
        items: [
          { name: 'Continuing Education', href: '/about' },
          { name: 'Product Knowledge', href: '/product-information' },
          { name: 'Case Studies', href: '/gallery' },
        ],
      },
      { name: 'Literature', href: '/product-information' },
      { name: 'Get a Sample', href: '/contact' },
    ],
  },
  { name: 'Pricing', href: '/pricing' },
  {
    name: 'About Us',
    href: '/about',
    items: [
      { name: 'Our Story', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/about' },
    ],
  },
];

const DesktopSubNavItem = ({ item }: { item: NavItem }) => {
  if (!item.items) {
    return (
      <Link
        to={item.href || '#'}
        className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-nichiha-blue hover:bg-nichiha-light transition-colors"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className="relative group/sub">
      <Link
        to={item.href || '#'}
        className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700 hover:text-nichiha-blue hover:bg-nichiha-light transition-colors"
      >
        {item.name}
        <ChevronRight className="w-4 h-4 ml-2" />
      </Link>
      
      <div className="absolute left-full top-0 hidden group-hover/sub:block pl-2 w-64">
        <div className="bg-white border-t-4 border-nichiha-green shadow-xl py-2">
          {item.items.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href || '#'}
              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-nichiha-blue hover:bg-nichiha-light transition-colors"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const DesktopNavItem = ({ item }: { item: NavItem }) => {
  if (!item.items) {
    return (
      <NavLink
        to={item.href || '#'}
        className={({ isActive }) =>
          cn(
            'text-sm font-bold uppercase tracking-wide transition-colors py-6 flex items-center border-b-4',
            isActive ? 'text-nichiha-blue border-nichiha-blue' : 'text-nichiha-dark hover:text-nichiha-blue border-transparent hover:border-nichiha-blue'
          )
        }
      >
        {item.name}
      </NavLink>
    );
  }

  return (
    <div className="relative group h-full flex items-center">
      <Link
        to={item.href || '#'}
        className="flex items-center text-sm font-bold uppercase tracking-wide text-nichiha-dark hover:text-nichiha-blue transition-colors py-6 border-b-4 border-transparent hover:border-nichiha-blue"
      >
        {item.name}
        <ChevronDown className="w-4 h-4 ml-1" />
      </Link>
      
      <div className="absolute left-0 top-full hidden group-hover:block w-64 z-50">
        <div className="bg-white border-t-4 border-nichiha-green shadow-xl py-2 mt-[-4px]">
          {item.items.map((subItem, index) => (
            <DesktopSubNavItem key={index} item={subItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileSubNavItem = ({ item, closeMenu }: { item: NavItem; closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.items) {
    return (
      <Link
        to={item.href || '#'}
        onClick={closeMenu}
        className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-nichiha-blue hover:bg-nichiha-light"
      >
        {item.name}
      </Link>
    );
  }

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:text-nichiha-blue hover:bg-nichiha-light"
      >
        {item.name}
        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-1 border-l-2 border-nichiha-light ml-4">
          {item.items.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href || '#'}
              onClick={closeMenu}
              className="block px-4 py-3 text-sm font-semibold text-gray-700 hover:text-nichiha-blue hover:bg-nichiha-light"
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileNavItem = ({ item, closeMenu }: { item: NavItem; closeMenu: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.items) {
    return (
      <NavLink
        to={item.href || '#'}
        onClick={closeMenu}
        className={({ isActive }) =>
          cn(
            'block px-4 py-4 text-base font-bold uppercase tracking-wide',
            isActive ? 'text-nichiha-blue bg-nichiha-light border-l-4 border-nichiha-blue' : 'text-nichiha-dark hover:text-nichiha-blue hover:bg-nichiha-light border-l-4 border-transparent'
          )
        }
      >
        {item.name}
      </NavLink>
    );
  }

  return (
    <div className="space-y-1 border-b border-gray-100 pb-2 mb-2 last:border-0 last:mb-0 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-4 text-base font-bold uppercase tracking-wide text-nichiha-dark hover:text-nichiha-blue hover:bg-nichiha-light border-l-4 border-transparent hover:border-nichiha-blue"
      >
        {item.name}
        <ChevronDown className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-1 bg-gray-50 py-2">
          {item.items.map((subItem, index) => (
            <MobileSubNavItem key={index} item={subItem} closeMenu={closeMenu} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-nichiha-dark font-sans">
      {/* Top Banner */}
      <div className="bg-nichiha-green text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
            <a href="/" className="font-bold text-white hover:text-white/80 flex items-center text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap">
              &larr; Purity Brands
            </a>
            <span className="text-white/30 hidden md:inline">|</span>
            <p className="font-medium hidden md:block text-xs">Discover the Power of Japanese Engineering</p>
          </div>
          <div className="flex w-full md:w-auto justify-center md:justify-end space-x-6 md:space-x-6 text-[10px] sm:text-xs">
            <a href="https://wa.me/971554330532" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-white/80 transition-colors">
              <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="font-bold">+971 55 433 0532</span>
            </a>
            <a href="mailto:info@puritypts.com" className="flex items-center hover:text-white/80 transition-colors">
              <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
              <span className="font-bold">info@puritypts.com</span>
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white border-b-2 border-nichiha-light sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative w-12 h-12 flex">
                  <div className="w-1/2 h-full bg-nichiha-green transition-transform group-hover:scale-105"></div>
                  <div className="w-1/2 h-full bg-nichiha-blue rounded-tr-full transition-transform group-hover:scale-105 group-hover:-translate-y-1"></div>
                </div>
                <span className="text-3xl font-extrabold tracking-tight text-nichiha-green uppercase">
                  Nichiha
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center h-full space-x-8">
              {navigation.map((link) => (
                <DesktopNavItem key={link.name} item={link} />
              ))}
            </nav>

            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-nichiha-dark hover:text-nichiha-blue p-2 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-nichiha-light">
            <div className="h-[calc(100vh-8rem)] overflow-y-auto">
              <div className="p-4 space-y-1">
                {navigation.map((link) => (
                  <MobileNavItem key={link.name} item={link} closeMenu={() => setMobileMenuOpen(false)} />
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-nichiha-dark text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="relative w-10 h-10 flex">
                  <div className="w-1/2 h-full bg-nichiha-green"></div>
                  <div className="w-1/2 h-full bg-nichiha-blue rounded-tr-full"></div>
                </div>
                <span className="text-2xl font-extrabold tracking-tight uppercase text-white">
                  Nichiha
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Premium fiber cement facade panels with Japanese cutting-edge technology. Durable, self-cleaning, and beautifully designed.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-nichiha-blue hover:text-white transition-all">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-nichiha-green hover:text-white transition-all">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-nichiha-blue hover:text-white transition-all">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white border-b-2 border-nichiha-blue pb-2 inline-block">Products & Info</h3>
              <ul className="space-y-4">
                <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Facade Panels</Link></li>
                <li><Link to="/product-information" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Technical Specifications</Link></li>
                <li><Link to="/installation" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Installation Guides</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Project Gallery</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white border-b-2 border-nichiha-green pb-2 inline-block">Company</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Contact</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-6 text-white border-b-2 border-nichiha-blue pb-2 inline-block">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-400 text-sm font-medium">
                  <MapPin className="h-5 w-5 mr-3 shrink-0 text-nichiha-green" />
                  <span>
                    Nichiha Middle East FZCO<br />
                    Business Bay, Dubai
                  </span>
                </li>
                <li className="flex items-center text-gray-400 text-sm font-medium">
                  <Phone className="h-5 w-5 mr-3 shrink-0 text-nichiha-green" />
                  <a href="https://wa.me/971554330532" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+971 55 433 0532</a>
                </li>
                <li className="flex items-center text-gray-400 text-sm font-medium">
                  <Mail className="h-5 w-5 mr-3 shrink-0 text-nichiha-green" />
                  <a href="mailto:info@puritypts.com" className="hover:text-white transition-colors">info@puritypts.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium text-sm">
            <p>&copy; {new Date().getFullYear()} Nichiha Japan GCC — Middle East Head Office.</p>
            <p className="mt-2 md:mt-0">Official Distributor for UAE</p>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-nichiha-green text-white p-4 shadow-xl hover:bg-green-700 transition-all duration-300 z-50 rounded-md"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
