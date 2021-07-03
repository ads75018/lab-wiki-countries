import React from 'react';
import { Link } from 'react-router-dom';
import { countriesList } from './CountriesList';
import json from '../countries.json';

export const countryDetails = (props) => {
  console.log(props);

  const getCountry = (id) => {
    const theCountry = (oneCountry) => {
      return oneCountry.cca3 === id;
    };
    return json.find(theCountry);
  };
  const { params } = props.match;

  const foundCountry = getCountry(params.id, 10);

  function getCountryName(countryCca3) {
    json.map((country) => {
      if (country.cca3 === countryCca3) {
        console.log(country.name.common);
        return country.name.common;
      }
    });
  }

  return (
    <div className="col-7">
      <h1>{foundCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{foundCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {foundCountry.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {foundCountry.borders.map((border) => {
                  console.log('===>', border);
                  return (
                    <>
                      <li>
                        <a href={border}>{getCountryName(border)}</a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
