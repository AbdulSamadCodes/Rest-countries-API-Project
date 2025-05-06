import React from 'react';

function CountryCard({
  flag,
  name,
  population,
  religion,
  capital }) {

  return (
    <div className='country-card component'>
      <figure>
        <img src={flag} />
      </figure>

      <div className='country-data grid'>

        <span className='text-primary'>
          {name}
        </span>

        <div>

          <span className='population'>
            Population: {population}
          </span>

          <span className='religion'>
            Religion: {religion}
          </span>

          <span className='capital'>
            Capital: {capital}
          </span>

        </div>

      </div>
    </div>
  );
};

export { CountryCard };