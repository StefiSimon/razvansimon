import React, { useMemo } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';

import ArtworksPage from '../ArtworksPage/ArtworksPage';
import { sanityDataPages, useSanityData } from '../../hooks/useSanityData';
import { Provider } from '../../components/Provider/Provider';

const HomePage = () => {
  const { data, error } = useSanityData('home' as sanityDataPages);
  const homePageInfo = useMemo(() => {
    // @ts-ignore
    if (!error && data?.length > 0) {
      return data?.[data?.length - 1];
    }
    return null;
  }, [data, error]);
  return (
    <Provider data={homePageInfo}>
      <LandingPage />
      <AboutPage />
      <ArtworksPage />
      <ContactPage />
    </Provider>
  );
};

export default HomePage;
