import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Loader } from '/src/Components/Dashboard/Loader.jsx';

function ImageWithLoader({ src }) {
   const [ isImgLoaded , setIsImgLoaded ] = useState(false); 
   const imgRef = useRef(null);

   const onLoad = () => setIsImgLoaded(true);

   useEffect(() => {
      const img = imgRef.current;
      
      if(img && img.complete) {
         setIsImgLoaded(true);
      } else {
         img?.addEventListener('load', onLoad);

         return () => img?.removeEventListener("load", onLoad);
      }  

   }, [src]);

   return (
      <>
        { !isImgLoaded && <Loader width={2.5}/>}

        <img className='w-100 country-img' src={src} ref={imgRef}/>
      </>
   )
}

export { ImageWithLoader };