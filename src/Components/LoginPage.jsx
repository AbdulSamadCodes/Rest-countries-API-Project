import React from 'react';
import { useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
      margin-inline:auto;
      padding:2rem; 
      width: min(35rem , calc(100%));
      align-self:center;
    }
      
  & .login-form, &  .input-container {
      display: grid; 
      gap:4rem;
   }

  & .input-container {
    gap : 1rem;
  }
`;

function LoginPage() {
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if(userName !== 'Samad' || password !== '123') {
      alert('Wrong credentials');

      return;
    }

    navigate('dashboard');
  }

  return (

      <StyledLoginPage className='login-page component'>

        <form action="" className='login-form' onSubmit={handleSubmit}>

          <div className='input-container'>
            <label className='fw-bold' htmlFor='username'>
              Enter username:
            </label>

            <Input 
             id='username' 
             className={'shadow-dark'}
              name='username'
              value = {userName}
              setValue = {setUserName}
            />

          </div>

          <div className='input-container'>
            <label className='fw-bold' htmlFor='password'>
              Enter password:
            </label>
            
            <Input 
             id='password' 
             className={'shadow-dark'}
             name='password'
             value={password}   
             setValue={setPassword}
            />
          </div>

          <Button classes='login-btn fw-bold shadow-dark mx-auto' 
           text='Login' />

        </form>

      </StyledLoginPage>

  )
}

export { LoginPage , Container };