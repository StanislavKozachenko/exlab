import React from 'react';
import logoSvg from '../assets/img/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img src={logoSvg} alt="Pizza logo" />
            <div>
              <h1>ExLab</h1>
              <p>Template text...</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
