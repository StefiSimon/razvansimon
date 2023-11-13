import React from 'react';
import causalityPaintings from './causalityPaintingList';
import motamotPaintings from './motamotPaintingList';
import tataracesPaintings from './tataracesPaintingList';
import consiglierePaintings from './consiglierePaintings';

import './ArtworksPage.scss';
import Collection from '../../components/Collection/Collection';

const ArtworksPage = () => {
  return (
    <div>
      <section id="collections" className="collections-section section">
        <header>
          <h1 className="collections-title">ART WORKS</h1>
        </header>
        <Collection
          year="2022"
          title="CONSIGLIERE"
          galleryUrl={'/consigliere'}
          description={
            <>
              13 artworks.
              <br></br>
              The 'man in the back' speaks through a facade element. The works
              are objective observations and the transparecy of the characters
              [...]
            </>
          }
          carouselPaintings={consiglierePaintings}
        />
        <Collection
          year="2021"
          title="TATARACES"
          galleryUrl={'/tataraces'}
          description={
            <>
              9 artworks.
              <br></br>
              Tataraces are abstract representations of places in my
              neighborhood. It’s about the existence of an appearance [...]
            </>
          }
          carouselPaintings={tataracesPaintings}
        />
        <Collection
          year="2020"
          title="Mot-A-Mot"
          galleryUrl={'/motamot'}
          description={
            <>
              11 + 1 artworks.
              <br></br>
              White. Absence. Void. Link by link. Initiation. Rebirth. [...]
            </>
          }
          carouselPaintings={motamotPaintings}
        />
        <Collection
          year="2019"
          title="Causality"
          galleryUrl={'/causality'}
          description={
            <>
              12 artworks.
              <br></br>
              The project suggests the connection between action and
              consequence/ cause and effect, [...]
            </>
          }
          carouselPaintings={causalityPaintings}
        />
      </section>
    </div>
  );
};

export default ArtworksPage;
