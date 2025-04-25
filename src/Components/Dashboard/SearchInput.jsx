import React from 'react';
import { Input } from '/src/Components/StyledComponents/Input.jsx';
import search from '/src/assets/search.svg';

function SearchInput() {

   return (
      <span className='search-input-container'>
         <Input
            id={'search-input'}
            className={'search-input shadow-dark component'}
            name={'search-input'}
            placeholder={'Search for country'}
         >
         </Input>

         <img className='search-icon' src={search}/>
      </span>
   );
}

export { SearchInput };