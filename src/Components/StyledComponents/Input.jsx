import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  & {
    width:100%;
    border-radius:0.2rem;
    padding:1.2rem 0.8rem;
    border-radius:0.4rem;
  };
`;

function Input( { placeholder , icon, id }  ) {
  return <StyledInput type='text' className = 'shadow-dark' id = {id}>
    
  </StyledInput>
};

export { Input };