import React from 'react';

import { Header } from '/src/Components/Header.jsx';
import { Outlet } from 'react-router-dom';

function Dashboard() {

  return (
    <div className='dashboard'>

      <Header/>
      <Outlet />

    </div>
  );
}

export { Dashboard };