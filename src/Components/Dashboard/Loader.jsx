import React from 'react';

function Loader( {width } ) {

  return (
    <div className='loader mx-auto' 
    style={{ 'width' : width.toString() + 'rem'}}>
      
    </div>      
  )
};

export { Loader };