import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLanding from './pages/MainLanding';
import NichihaApp from './NichihaApp';
import PrevostApp from './prevost/App';
import MainSiteLayout from './components/MainSiteLayout';
import MainAbout from './pages/MainAbout';
import MainSolutions from './pages/MainSolutions';
import MainSectors from './pages/MainSectors';
import MainPartnership from './pages/MainPartnership';
import MainContact from './pages/MainContact';

export default function App() {
  const path = window.location.pathname;

  if (path.startsWith('/nichiha')) {
    return <NichihaApp />;
  }

  if (path.startsWith('/prevost')) {
    return <PrevostApp />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainSiteLayout />}>
          <Route index element={<MainLanding />} />
          <Route path="about" element={<MainAbout />} />
          <Route path="solutions" element={<MainSolutions />} />
          <Route path="sectors" element={<MainSectors />} />
          <Route path="partnership" element={<MainPartnership />} />
          <Route path="contact" element={<MainContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
