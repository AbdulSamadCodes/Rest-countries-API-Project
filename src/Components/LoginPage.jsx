import React from 'react';
import styled from 'styled-components';
import { Input } from '/src/Components/StyledComponents/Input.jsx';
import { Button } from '/src/Components/StyledComponents/Button.jsx';

const Container = styled.div`
  & {
      display:grid;
      padding-inline:1rem;  
      margin-inline:auto;
      min-height:100svh;
    }
`;


const StyledLoginPage = styled.div`
  & {
      border-radius:0.4rem;
      gap:4rem;
      margin-inline:auto;
      padding:2rem; 
      width: min(35rem , calc(100%));
      align-self:center;
  }
    
  & , & > .input-container {
    display: grid; 
  }

  & > .input-container {
    gap : 1rem;
  }
`;

function LoginPage() {

  return (

    <Container>

      <StyledLoginPage className='login-page component'>
        <div className='input-container'>
          <label className='fw-bold' htmlFor='username'>
            Enter username:
          </label>
          <Input id='username' />
        </div>
        <div className='input-container'>
          <label className='fw-bold' htmlFor='password'>
            Enter password:
          </label>
          <Input id='password' />
        </div>
        <Button classes='login-btn fw-bold shadow-dark mx-auto' text='Login' />
      </StyledLoginPage>

    </Container>
  )
}

export { LoginPage };