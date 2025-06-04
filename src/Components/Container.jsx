import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  & {
      display:grid;
      padding-inline:1rem;  
      margin-inline:auto;
      min-height:100svh;
    }
`;

function Container({ children}) {

  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  )
}

export { Container };