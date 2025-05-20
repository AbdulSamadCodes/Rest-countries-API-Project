import React from 'react';

function CountryCard({
  flag,
  name,
  population,
  religion,
  capital }) {

  return (
    <div className='country-card component grid overflow-hidden'>

      <figure className='country-figure'>
        <img className='country-img w-100 object-cover' 
         alt={"Country's flag loading"}
         src={flag} />
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