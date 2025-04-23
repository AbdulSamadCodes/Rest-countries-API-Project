import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --ff-Nunito_sans : "Nunito Sans", sans-serif;
    --fw-bold:bold;
    --fs-normal: 1.4rem;
    --fs-text-primary:2.5rem;

    --bg-component :hsl(209, 23%, 22%);

    --clr-primary: hsl(0, 0%, 100%);

    --shadow-dark:3px 3px 3px hsla(0,0%,0%,0.2) , 
               -2px -2px 4px hsla(0,0%,0%,0.2);;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 

   *::before,
   *::after {
     content: "";
     position: absolute;
   }

   li {
     list-style: none;
    }

   a {
     text-decoration: none;
     color: inherit;
   }

   button {
     cursor: pointer;
   }
 
   button,
   a,
   input {
     display: block;
   }

   img {
    max-width: 100%;
    display: block;
    height: auto;
    object-fit:cover;
    object-position:center;
 }

   button,
   input {
     background: none;
     border: none;
     outline: none;
   }

   form,
   input,
   button,
   select,
   option,
   textarea {
    font: inherit;
    color:inherit;
   }

   input {
     font-size: 1.2rem;
   }

   input::placeholder {
    color:var(--clr-primary);
    font-size: var(--fs-normal);
   }

   input:focus-visible {
     outline: none;
   }

   :focus-visible {    
     outline: 1px solid hsla(0, 0%, 0%, 0.4);
     outline-offset: 0.4rem;
   }

   html {
     scroll-behavior: smooth;
     scroll-padding-top: 3rem;
     scrollbar-width: thin;
     font-size:62.5%; 
   }

   body {
     background-color:hsl(207, 26%, 17%);
     color:var(--clr-primary);
     font-family:var(--ff-Nunito_sans);
     font-size:var(--fs-normal);
     display:grid;
   }

   .fw-bold {
     font-weight:var(--fw-bold);
   }

   .shadow-dark {
     box-shadow : var(--shadow-dark);
   }

    .mx-auto {
      margin-inline:auto;
    }

    .component {
      background-color:var(--bg-component);
    }

    .text-primary {
      font-size: var(--fs-text-primary);
    }
`

export { GlobalStyle };