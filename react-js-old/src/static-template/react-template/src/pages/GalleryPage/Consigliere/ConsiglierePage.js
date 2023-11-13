import React from 'react';

import carouselPaintings from '../../ArtworksPage/consiglierePaintings';
import GalleryPage from '../GalleryPage';

const ConsiglierePage = () => {
  const sectionStyle = {
    color: '#dddddd',
  };

  const pictureNameStyle = {
    color: '#dddddd',
  };

  const pictureDetailStyle = {
    color: '#dddddd',
  };

  return (
    <GalleryPage
      year="2022"
      title="Consigliere"
      description="13 artworks. The 'man in the back' speaks through a facade element. The works are objective observations and the transparecy of the characters represents the ephemerality of the people. There is no direct involvement in the stories presented, outlining ideas such as peace, introspection, calmness, secrets, contemplation."
      pictures={carouselPaintings}
      sectionClassName="consigliere"
      titleClassName="consigliere"
      sectionStyle={sectionStyle}
      pictureNameStyle={pictureNameStyle}
      pictureDetailStyle={pictureDetailStyle}
    />
  );
};

export default ConsiglierePage;
