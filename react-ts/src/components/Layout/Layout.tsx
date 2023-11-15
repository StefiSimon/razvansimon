import React, { ReactNode, useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { routes } from '../../routes';
import _ from 'lodash';

export const Layout = ({ children }: { children: ReactNode }) => {
  const menuColors = {
    WHITE: 'white',
    BLACK: 'black',
    GREY: 'grey',
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuWithBackground, setIsMenuWithBackground] = useState(false);
  const [menuColor, setMenuColor] = useState(menuColors.WHITE);

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

  const scrollToSection = (name: string) => {
    const scrollY =
      document.getElementById(name)?.getBoundingClientRect()?.y ||
      document.getElementById(name)?.getBoundingClientRect()?.top ||
      window.innerHeight;
    window.scrollBy(0, scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    updateAppearance(window.location.pathname);

    const hashRoute = window.location.hash;
    const currentRoute = Object.keys(_.omit(routes.homepage, 'path')).find(
      (route) => `#/${route}` === hashRoute
    );
    if (currentRoute) {
      scrollToSection(currentRoute);
    }
    // eslint-disable-next-line
  }, []);

  const onMenuItemSelect = (link: string) => {
    setIsMenuOpen(false);
    window.location.href = `${window.location.origin}/#/${link}`;
    scrollToSection(link);
  };

  const renderMenuElements = (asList = true) => {
    const MenuElement = ({ routeName }: { routeName: string }) => (
      // eslint-disable-next-line
      <a
        className="menu-item"
        role="button"
        onClick={() =>
          // @ts-ignore
          onMenuItemSelect(routes?.homepage?.[routeName]?.path)
        }
      >
        {routeName}
      </a>
    );

    return Object.keys(_.omit(routes.homepage, 'path')).map((routeName) =>
      asList ? (
        <li>
          <MenuElement routeName={routeName} />
        </li>
      ) : (
        <div style={{ padding: '10px 0' }}>
          <MenuElement routeName={routeName} />
        </div>
      )
    );
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
          {renderMenuElements(false)}
        </Menu>
      </header>

      <header
        className={`${
          isMenuWithBackground ? 'header-background' : 'header-transparent'
        } header-desktop`}
      >
        <nav>
          <ul className={`${menuColor}-text`}>{renderMenuElements()}</ul>
          <div className="vertical-divider"></div>
        </nav>
      </header>
      {children}
    </>
  );
};
