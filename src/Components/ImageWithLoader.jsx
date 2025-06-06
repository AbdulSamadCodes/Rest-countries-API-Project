import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Loader } from '/src/Components/Dashboard/Loader.jsx';

function ImageWithLoader({ src }) {
   const [imgLoaded, setImgLoaded] = useState(false);
   const imgRef = useRef(undefined);

   const onLoad = () => {
      setImgLoaded(true);
   };

   useEffect(() => {      

   }, []);

   if (!imgLoaded) return <Loader width={2.5}></Loader>

   return <img className='w-100 country-img' ref={imgRef} src={src} />
}

export { ImageWithLoader };