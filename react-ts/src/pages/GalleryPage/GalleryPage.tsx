import React, { useState, useEffect, useMemo, useCallback } from 'react';
import cn from 'classnames';
import fullScreenIcon from './full-screen.png';
import ProgressiveImage from 'react-progressive-graceful-image';
import Modal from '../../components/Modal/Modal';

import './GalleryPage.scss';
import { Painting } from '../ArtworksPage/types';

type GalleryPageProps = {
  year: string;
  title: string;
  description: string;
  pictures: Painting[];
  sectionStyle: React.CSSProperties;
  pictureNameStyle: React.CSSProperties;
  pictureDetailStyle: React.CSSProperties;
  sectionClassName: string;
  titleClassName: string;
};

type GalleryImageModalProps = {
  isOpen: boolean;
  onCloseModal: () => void;
  onKeyUp: (e: any) => void;
  imgSrc: string;
  placeholder: string;
  index: number;
};
const GalleryImageModal = ({
  isOpen,
  onCloseModal,
  imgSrc,
  index,
}: GalleryImageModalProps) => (
  <Modal show={isOpen} handleClose={onCloseModal}>
    <div className="modal-picture">
      <ProgressiveImage src={imgSrc} placeholder={imgSrc}>
        {(src, loading) => (
          <img
            style={{
              filter: loading ? 'blur(4px)' : 'blur(0px)',
            }}
            src={src}
            alt="gallery painting"
            tabIndex={index}
            onBlur={onCloseModal}
          />
        )}
      </ProgressiveImage>
    </div>
  </Modal>
);

type GalleryImageProps = {
  index: number;
  pictureNameStyle: React.CSSProperties;
  pictureDetailStyle: React.CSSProperties;
  picture: Painting;
  onOpenModal: (index: number) => void;
};
const GalleryImage = ({
  index,
  pictureNameStyle,
  pictureDetailStyle,
  picture,
  onOpenModal,
}: GalleryImageProps) => {
  const isOdd = useMemo(() => !!(index % 2), [index]);
  return (
    <div className="gallery-picture">
      <div
        className="picture-info"
        style={{
          order: isOdd ? 1 : 2,
          display: 'block',
          textAlign: isOdd ? 'right' : 'left',
        }}
      >
        <p className="picture-name" style={pictureNameStyle}>
          {picture.name}
        </p>
        <p className="picture-details" style={pictureDetailStyle}>
          {picture.dimensions}
        </p>
        <p className="picture-details" style={pictureDetailStyle}>
          {picture.technique}
        </p>
      </div>
      <div
        className="picture-image"
        style={{
          order: index % 2 ? 2 : 1,
          margin: picture.isLargeImage
            ? isOdd
              ? '0 0 0 5%'
              : '0 5% 0 0'
            : '0',
        }}
        onClick={() => onOpenModal(index)}
      >
        <img src={fullScreenIcon} alt="fullscreen" className="picture-icon" />
        <ProgressiveImage src={picture.imageUrl} placeholder={picture.imageUrl}>
          {(src, loading) => (
            <img
              style={{
                filter: loading ? 'blur(8px)' : 'blur(0px)',
                opacity: loading ? 0.5 : 1,
              }}
              src={src}
              alt={picture.name}
            />
          )}
        </ProgressiveImage>
      </div>
    </div>
  );
};

const GalleryPage = ({
  year,
  title,
  description,
  pictures,
  sectionStyle,
  sectionClassName,
  titleClassName,
  pictureNameStyle,
  pictureDetailStyle,
}: GalleryPageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImgSrc, setCurrentImgSrc] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setCurrentImgSrc('');
  }, []);

  const openModal = useCallback(
    (index: number) => {
      const currentImageObj = pictures[index];
      setIsModalOpen(true);
      setCurrentImgSrc(currentImageObj.imageUrl);
    },
    [pictures]
  );

  const onEsc = useCallback(
    (e: any) => {
      console.log(e);
      if (e.which === 27) {
        closeModal();
      }
    },
    [closeModal]
  );

  return (
    <div>
      <section
        id="gallery"
        className={cn('gallery-section section', sectionClassName)}
        style={sectionStyle}
      >
        <header>
          <h1 className={cn('gallery-title', titleClassName)}>
            <span>{year}</span>
            {title.toUpperCase()}
          </h1>
        </header>
        <div className="gallery-container">
          <div className="gallery-description">{description}</div>
          <div
            className="gallery-pictures-container"
            aria-disabled={isModalOpen}
            aria-hidden={isModalOpen}
          >
            {pictures?.map((picture: Painting, index: number) => (
              <>
                <GalleryImage
                  picture={picture}
                  index={index}
                  pictureNameStyle={pictureNameStyle}
                  pictureDetailStyle={pictureDetailStyle}
                  onOpenModal={openModal}
                />
                <GalleryImageModal
                  index={index}
                  isOpen={isModalOpen}
                  onCloseModal={closeModal}
                  onKeyUp={onEsc}
                  imgSrc={currentImgSrc}
                  placeholder={currentImgSrc}
                />
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
