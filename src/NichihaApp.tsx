/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductInfo from './pages/ProductInfo';
import Gallery from './pages/Gallery';
import Installation from './pages/Installation';
import Contact from './pages/Contact';
import Residential from './pages/Residential';
import Multifamily from './pages/Multifamily';
import AwpResidential from './pages/AwpResidential';
import Commercial from './pages/Commercial';
import Pricing from './pages/Pricing';

export default function NichihaApp() {
  return (
    <BrowserRouter basename="/nichiha">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="product-information" element={<ProductInfo />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="installation" element={<Installation />} />
          <Route path="contact" element={<Contact />} />
          <Route path="residential" element={<Residential />} />
          <Route path="multifamily" element={<Multifamily />} />
          <Route path="residential-awp" element={<AwpResidential />} />
          <Route path="commercial" element={<Commercial />} />
          <Route path="pricing" element={<Pricing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
