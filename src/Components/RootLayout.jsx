import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '/src/Components/Header.jsx';

function RootLayout() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export { RootLayout };