import React, { Fragment } from 'react';
import logo from './rsimonLogo.svg';

const Logo = ({ logoImg }: { logoImg: string | null }) => {
  return (
    <Fragment>
      <img src={logoImg ?? logo} className="app-logo" alt="logo" />
    </Fragment>
  );
};

export default Logo;
