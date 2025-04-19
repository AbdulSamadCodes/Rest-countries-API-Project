import React from 'react';
import styled from 'styled-components';
import { Input } from '/src/Components/StyledComponents/Input.jsx';
import { Button } from '/src/Components/StyledComponents/Button.jsx';

const StyledLoginPage = styled.div`
  & {
    border-radius:0.4rem;
    gap:4rem;
    max-width:35rem;
    margin-inline:auto;
    padding:2rem; 
    position:relative;
    top:50%;
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
    <StyledLoginPage className='login-page component'>
      <div className='input-container'>
        <label className = 'fw-bold' htmlFor='username'>
          Enter username:
        </label>

        <Input id='username' />
      </div>

      <div className='input-container'>
        <label className = 'fw-bold' htmlFor='password'>
          Enter password:
        </label>

        <Input id='password'/>
      </div>

    <Button classes='login-btn fw-bold shadow-dark' text='Login'/>

    </StyledLoginPage>
  )
}

export { LoginPage };