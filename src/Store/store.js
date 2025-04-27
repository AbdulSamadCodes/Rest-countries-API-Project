import { configureStore } from '@reduxjs/toolkit';
import { countriesReducer, fetchCountries } from '/src/Features/countriesSlice.js'

const store = configureStore(
  {
    reducer : countriesReducer,

    extraReducers : (builder) => {

      builder.addCase(fetchCountries.fulfilled, () => {
          
      });
      builder.addCase(fetchCountries.rejected, () => {

      });
      builder.addCase(fetchCountries.pending, () => {

      })

    }
  }
);

export { store };