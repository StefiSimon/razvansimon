import React, { ReactNode, useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { routes } from '../../routes';

export const Layout = ({ children }: { children: ReactNode }) => {
  const menuColors = {
    WHITE: 'white',
    BLACK: 'black',
    GREY: 'grey',
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuWithBackground, setIsMenuWithBackground] = useState(false);
  const [menuColor, setMenuColor] = useState(menuColors.WHITE);

  const { origin } = window.location;

  const updateAppearance = (location: string) => {
    const galleryRoutes = Object.values(routes.gallery)?.map(
      (val) => val?.path
    );
    if (!Object.values(galleryRoutes).includes(location)) {
      const heightDiff = window.scrollY / window.innerHeight;
      switch (true) {
        case heightDiff > 0 && heightDiff <= 1:
          setMenuColor(menuColors.WHITE);
          break;
        case heightDiff > 1 && heightDiff <= 4:
          setMenuColor(menuColors.BLACK);
          break;
        case heightDiff > 4 && heightDiff <= 6.5:
          setMenuColor(menuColors.WHITE);
          break;
        case heightDiff > 6.5 && heightDiff <= 10:
          setMenuColor(menuColors.BLACK);
          break;
        default:
          setMenuColor(menuColors.WHITE);
      }
    } else if (location === routes.gallery.causality.path) {
      setMenuColor(menuColors.BLACK);
    } else if (location === routes.gallery.motamot.path) {
      setMenuColor(menuColors.WHITE);
    } else if (location === routes.gallery.tataraces.path) {
      setMenuColor(menuColors.BLACK);
    } else if (location === routes.gallery.consigliere.path) {
      setMenuColor(menuColors.GREY);
    }
  };

  const handleScroll = () => {
    const pageScrollHeight = window.pageYOffset;
    setIsMenuWithBackground(pageScrollHeight > 200);
    updateAppearance(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    updateAppearance(window.location.pathname);
  });

  const onMenuItemSelect = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div
        className={`${
          isMenuWithBackground && !isMenuOpen
            ? 'header-background'
            : 'header-transparent'
        } header-overlay`}
      />
      <header className={`header-mobile ${menuColor}`}>
        <Menu
          isOpen={isMenuOpen}
          onStateChange={({ isOpen }: { isOpen: boolean }) =>
            setIsMenuOpen(isOpen)
          }
        >
          <a className="menu-item" href="/" onClick={onMenuItemSelect}>
            home
          </a>
          <a className="menu-item" href="/#about" onClick={onMenuItemSelect}>
            about
          </a>
          <a
            className="menu-item"
            href="/#collections"
            onClick={onMenuItemSelect}
          >
            artworks
          </a>
          <a className="menu-item" href="/#contact" onClick={onMenuItemSelect}>
            contact
          </a>
        </Menu>
      </header>

      <header
        className={`${
          isMenuWithBackground ? 'header-background' : 'header-transparent'
        } header-desktop`}
      >
        <nav>
          <ul className={`${menuColor}-text`}>
            <li>
              <a href={`${origin}/#landing`}>home</a>
            </li>
            <li>
              <a href={`${origin}/#about`}>about</a>
            </li>
            <li>
              <a href={`${origin}/#collections`}>artworks</a>
            </li>
            <li>
              <a href={`${origin}/#contact`}>contact</a>
            </li>
          </ul>
          <div className="vertical-divider"></div>
        </nav>
      </header>
      {children}
    </>
  );
};
