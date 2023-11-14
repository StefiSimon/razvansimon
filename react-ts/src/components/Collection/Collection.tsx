import React, { ReactNode } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

import { Painting } from '../../pages/ArtworksPage/types';

type CollectionProps = {
  year: string;
  title: string;
  description: ReactNode;
  carouselPaintings: Painting[];
  galleryUrl: string;
};
const Collection = ({
  year,
  title,
  description,
  carouselPaintings,
  galleryUrl,
}: CollectionProps) => {
  const navigate = useNavigate();
  return (
    <div className="collection-container">
      <div className="collection-info">
        <p className="collection-year">{year}</p>
        <p className="collection-title">{title}</p>
        <p className="collection-desc">{description}</p>
        <div className="explore-button">
          <button
            type="button"
            className="button"
            onClick={() => navigate(galleryUrl)}
          >
            Explore {title}
          </button>
        </div>
      </div>
      <div className="collection-carousel">
        <Carousel useKeyboardArrows>
          {carouselPaintings.map((painting) => (
            <div className="collection-painting-container" key={painting.name}>
              <img
                alt={painting.name}
                src={painting.imageUrl}
                className="collection-painting"
              />
              <p className="legend">{painting.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Collection;
