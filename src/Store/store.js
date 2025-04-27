import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer } from '/src/Features/countriesSlice.js'
import { selectCountry } from '/src/Features/countriesSlice.js'

const store = configureStore(
  {
    reducer : countriesReducer
  }
);

export { store };