import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  isLoading: false,
  error: null
};

const countriesSlice = createSlice({
  name: 'countriesData',
  initialState: initialState,

  reducers: {
     selectCountry: (state, action) => {
        
     }
   }
 }
);

export const countriesReducer = countriesSlice.reducer;
export const { selectCountry } = countriesSlice.actions;