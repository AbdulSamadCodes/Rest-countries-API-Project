import { createSelector } from 'reselect';

/* Input selectors */
const selectData = (state) => state.data;
const selectError = (state) => state.error;
const selectisLoading = (state) => state.isLoading;

const countriesSelector = createSelector(
  [selectData , selectError , selectisLoading],

  (data , error , isLoading) => {
    return {
      data : data,
      error : error,
      isLoading : isLoading
    }
  }
);

export { countriesSelector };