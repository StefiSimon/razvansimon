import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CausalityPage from './pages/GalleryPage/Causality/CausalityPage';
import MotAMotPage from './pages/GalleryPage/MotAMot/MotAMotPage';
import TataracesPage from './pages/GalleryPage/Tataraces/TataracesPage';
import ConsiglierePage from './pages/GalleryPage/Consigliere/ConsiglierePage';
import { Layout } from './components/Layout/Layout';

const appRoutes = {
  HOMEPAGE: '/',
};

const galleryRoutes = {
  CAUSALITY: '/causality',
  MOTAMOT: '/motamot',
  TATARACES: '/tataraces',
  CONSIGLIERE: '/consigliere',
};

const App = () => (
  <Layout>
    <BrowserRouter>
      <Routes>
        <Route path={appRoutes.HOMEPAGE} element={<HomePage />} />
        <Route path={galleryRoutes.CAUSALITY} element={<CausalityPage />} />
        <Route path={galleryRoutes.MOTAMOT} element={<MotAMotPage />} />
        <Route path={galleryRoutes.TATARACES} element={<TataracesPage />} />
        <Route path={galleryRoutes.CONSIGLIERE} element={<ConsiglierePage />} />
      </Routes>
    </BrowserRouter>
  </Layout>
);

export { appRoutes, galleryRoutes };
export default App;
