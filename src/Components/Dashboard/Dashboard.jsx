import React from 'react';
import { useEffect } from 'react';

import { SearchInput } from '/src/Components/Dashboard/SearchInput.jsx';
import { fetchCountries } from '/src/Features/countriesSlice.js'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Loader } from '/src/Components/Dashboard/Loader.jsx'

function Dashboard() {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  },[]);

  return (
    <div className='dashboard'>
        <SearchInput />    

        <Loader className='loader'/>
    </div>
  );
}

export { Dashboard };