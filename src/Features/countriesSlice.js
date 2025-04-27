import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


/* asyncThunk to make the API call */
const fetchCountries = createAsyncThunk('fetchCountries', async () => {
  const URL = '/Data/data.json';

  const response = await fetch(URL);
  return response.json();
});

const initialState = {
  data: null,
  isLoading: false,
  error: null
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialState,

  reducers: {

  }

 }
);

export  const countriesReducer = countriesSlice.reducer;
export { fetchCountries };