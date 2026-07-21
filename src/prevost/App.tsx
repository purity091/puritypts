import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home, Products, Sectors, Innovation, Services, Company, QuickCouplings, QuickCouplingProductPage, CompressedAirNetwork, CompressedAirNetworkProductPage } from './pages';
import { ProductCategoryLandingPage, ProductFamilyDetailPage } from './components/ProductCatalogPages';

function PrevostLayout() {
  return (
    <div className="min-h-screen bg-slate-50 font-inter antialiased text-slate-900 selection:bg-brand-500 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/quick-couplings" element={<QuickCouplings />} />
          <Route path="/products/quick-couplings/:slug" element={<QuickCouplingProductPage />} />
          <Route path="/products/compressed-air-network" element={<CompressedAirNetwork />} />
          <Route path="/products/compressed-air-network/:slug" element={<CompressedAirNetworkProductPage />} />
          <Route path="/products/hoses-hose-reels" element={<ProductCategoryLandingPage />} />
          <Route path="/products/hoses-hose-reels/:itemSlug" element={<ProductFamilyDetailPage />} />
          <Route path="/products/pneumatic-tools" element={<ProductCategoryLandingPage />} />
          <Route path="/products/pneumatic-tools/:itemSlug" element={<ProductFamilyDetailPage />} />
          <Route path="/products/compressed-air-treatment" element={<ProductCategoryLandingPage />} />
          <Route path="/products/compressed-air-treatment/:itemSlug" element={<ProductFamilyDetailPage />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/services" element={<Services />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename="/prevost">
      <PrevostLayout />
    </BrowserRouter>
  );
}
