import React from 'react';

function CountriesGrid( { children } ) {

  return (
    
    <div className='country-grid'>
      {children}
    </div>
  );        
}

export { CountriesGrid };