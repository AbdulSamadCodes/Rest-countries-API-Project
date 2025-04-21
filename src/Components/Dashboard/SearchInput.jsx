import React from 'react';
import { Input } from '/src/Components/StyledComponents/Input.jsx';

function SearchInput() {

   return (
    <Input
     id={'search-input'}
     className={'shadow-dark component'}
     name={'search-input'} 
     placeholder={'Search for country'}
    >
    </Input>
   ); 
}

export { SearchInput };