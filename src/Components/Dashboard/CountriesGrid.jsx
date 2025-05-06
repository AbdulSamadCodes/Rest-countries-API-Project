import React from 'react';

function CountriesGrid( { children } ) {

  return (
    
    <div className='countries-grid grid'>
      {children}
    </div>
  );        
}

export { CountriesGrid };