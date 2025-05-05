import React from 'react';
import { useEffect } from 'react';

import { SearchInput } from '/src/Components/Dashboard/SearchInput.jsx';
import { fetchCountries } from '/src/Features/countriesSlice.js'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { countriesSelector } from '/src/Features/countriesSelector.js';

import { Loader } from '/src/Components/Dashboard/Loader.jsx';
import { CountriesGrid } from '/src/Components/Dashboard/CountriesGrid.jsx';
import { CountryCard } from '/src/Components/Dashboard/CountryCard.jsx';

function Dashboard() {
  const { data, error, isLoading } = useSelector(countriesSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className='dashboard'>
      <SearchInput />

      <CountriesGrid>
        {
          data.map(() => {
            return (
              <div className='country-card'>
                  
              </div>
            );
          })
        }
      </CountriesGrid>

      {/* <Loader className='loader'/> */}
    </div>
  );
}

export { Dashboard };