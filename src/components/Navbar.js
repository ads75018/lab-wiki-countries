import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LAB - WikiCountries by Adam & Karina
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
