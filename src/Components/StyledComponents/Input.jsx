import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
  & {
    
    width:min(100%,35rem);
    border-radius:0.2rem;
    padding:1.5rem 0.8rem;
    border-radius:0.4rem;
  };
`;

function Input( {  id, className ,  name, value, setValue, placeholder , children }  ) {

  const handleChange = (event) => {
    setValue(event.target.value);
  }; 
  
  return(
  
    <StyledInput type='text' 
     className =  {className}
     id = {id}
     name={name}   
     value = { value} 
     onChange={handleChange}
     placeholder={placeholder}
     >
      { children }
    </StyledInput>
  )
};

export { Input };