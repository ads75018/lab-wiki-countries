import React from 'react';
import { Link } from 'react-router-dom';
import json from '../countries.json';

export const countriesList = () => {
  return (
    <div>

      {json.map((country, i) => {
        return (
          <ul>
            <li>
              <Link to={`/countries/${country.cca3}`}>{country.cca3}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

