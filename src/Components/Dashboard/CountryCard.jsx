import React from 'react';
import { useImageWithLoader } from '/src/Components/useImageWithLoader.jsx';

function CountryCard({
  flag,
  name,
  population,
  religion,
  capital }) {

  return (
    <div className='country-card component grid overflow-hidden'>

      <figure className='country-figure'>
        
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