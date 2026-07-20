import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLanding from './pages/MainLanding';
import NichihaApp from './NichihaApp';
import PrevostApp from './prevost/App';

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
        <Route path="*" element={<MainLanding />} />
      </Routes>
    </BrowserRouter>
  );
}
