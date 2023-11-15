import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { routes } from './routes';
import { Layout } from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import CausalityPage from './pages/GalleryPage/Causality/CausalityPage';
import MotAMotPage from './pages/GalleryPage/MotAMot/MotAMotPage';
import TataracesPage from './pages/GalleryPage/Tataraces/TataracesPage';
import ConsiglierePage from './pages/GalleryPage/Consigliere/ConsiglierePage';

const router = createHashRouter([
  {
    path: routes.homepage.path,
    element: <HomePage />,
    children: [
      {
        path: routes.homepage.landing.path,
        element: <HomePage />,
      },
      {
        path: routes.homepage.about.path,
        element: <HomePage />,
      },
      {
        path: routes.homepage.artworks.path,
        element: <HomePage />,
      },
      {
        path: routes.homepage.contact.path,
        element: <HomePage />,
      },
    ],
  },
  {
    path: routes.gallery.causality.path,
    element: <CausalityPage />,
  },
  {
    path: routes.gallery.motamot.path,
    element: <MotAMotPage />,
  },
  {
    path: routes.gallery.tataraces.path,
    element: <TataracesPage />,
  },
  {
    path: routes.gallery.consigliere.path,
    element: <ConsiglierePage />,
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
