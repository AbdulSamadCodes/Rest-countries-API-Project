import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  & {
     display: grid;
     place-content: center;  
     padding:0.9rem 2.5rem; 
     width:max-content;
     border-radius:0.3rem;    
  }
`

function Button({ text , classes }) {

  return <StyledButton type="submit" className={classes}>
    {text}
  </StyledButton>
} 

export { Button };