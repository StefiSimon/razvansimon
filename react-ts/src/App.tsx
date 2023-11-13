import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CausalityPage from './pages/GalleryPage/Causality/CausalityPage';
import MotAMotPage from './pages/GalleryPage/MotAMot/MotAMotPage';
import TataracesPage from './pages/GalleryPage/Tataraces/TataracesPage';
import ConsiglierePage from './pages/GalleryPage/Consigliere/ConsiglierePage';

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path={routes.homepage.path} element={<HomePage />} />
          <Route
            path={routes.gallery.causality.path}
            element={<CausalityPage />}
          />
          <Route path={routes.gallery.motamot.path} element={<MotAMotPage />} />
          <Route
            path={routes.gallery.tataraces.path}
            element={<TataracesPage />}
          />
          <Route
            path={routes.gallery.consigliere.path}
            element={<ConsiglierePage />}
          />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
