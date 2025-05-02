import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


/* asyncThunk to make the API call */
const fetchCountries = createAsyncThunk('fetchCountries', async () => {
  const URL = '/Data/data.json';

  const response = await fetch(URL);
  const data =  await response.json();

  return data;
});

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState: initialState,

  reducers: {

  },

  extraReducers : (builder) => {
    builder.addCase(fetchCountries.fulfilled, (state,action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchCountries.rejected, (state) => {
      state.error = 'Error loading data';
    });
    builder.addCase(fetchCountries.pending, (state) => {
      state.isLoading = true;
    })
  }

 }
);

export const countriesReducer = countriesSlice.reducer;
export { fetchCountries };