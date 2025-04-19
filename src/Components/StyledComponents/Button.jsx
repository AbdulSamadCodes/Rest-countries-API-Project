import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  & {
     display: grid;
     place-content: center;  
     padding:1rem 2.3rem; 
     width:max-content;
     border-radius:0.3rem;    
  }
`

function Button({ text , classes }) {

  return <StyledButton className={classes}>
    {text}
  </StyledButton>
} 

export { Button };