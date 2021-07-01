import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {' '}
          <Link to="/">LAB - WikiCountries</Link>{' '}
        </li>
        <li>
          <Link to="/countries/">Countries</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
