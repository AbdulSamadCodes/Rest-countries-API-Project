import React from 'react';

function Loader( { width } ) {
  const loaderWidth = `${width.toString()}rem`;
  const loadingIndicatorWidth = `${(width / 10).toString()}rem`;

  return (
    <div className='loader mx-auto' 
    style={{ 'width' : loaderWidth 
           ,'borderWidth': loadingIndicatorWidth}}>
      
    </div>      
  )
};

export { Loader };