import React from 'react';
import { useState } from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
  & {
    max-width:100%;
    border-radius:0.2rem;
    padding:1.2rem 0.8rem;
    border-radius:0.4rem;
  };
`;

function Input( { placeholder , icon, id, name }  ) {
  const [ inputValue, setInputValue ] = useState('');
  
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return(
  
    <StyledInput type='text' 
     className = 'shadow-dark' 
     id = {id}
     name={name}   
     value = { inputValue} 
     onChange={handleChange}
     >

    </StyledInput>
  )
};

export { Input };