import React from 'react';
import { Link } from 'react-router-dom';
import json from '../countries.json';

export const countriesList = () => {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      {json.map((country, i) => {
        return (
          <div className="list-group">
            <Link to={`/countries/${country.cca3}`}>
              {country.flag} {country.name.common}{' '}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
