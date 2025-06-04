import React from 'react';
import { useState,useEffect,useRef } from 'react';
import { Loader } from '/src/Components/Dashboard/Loader.jsx';

function ImageWithLoader({ src }) {
  
   return <Loader width={2.5}>

   </Loader>   
}

export { ImageWithLoader };