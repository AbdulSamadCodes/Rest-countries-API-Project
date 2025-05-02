import React from 'react';
import { Input } from '/src/Components/StyledComponents/Input.jsx';
import search from '/src/assets/search.svg';

function SearchInput() {
   
   return (
      <span className='search-input-container block relative'>
         <Input
            id={'search-input'}
            className={'shadow-dark component'}
            name={'search-input'}
            placeholder={'Search for country'}
         >
         </Input>

         <img className='search-icon absolute' src={search}/>
      </span>
   );
}

export { SearchInput };