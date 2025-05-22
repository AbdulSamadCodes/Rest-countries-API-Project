import React from 'react';
import { useState,useEffect,useRef } from 'react';
import { Loader } from '/src/Components/Dashboard/Loader.jsx';

function ImageWithLoader({ src }) {
  
  return (
    <img src={src} className='country-img w-100'/>
  );
}

export { ImageWithLoader };