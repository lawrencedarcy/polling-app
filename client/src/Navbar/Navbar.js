import React from 'react';
import './Navbar.css';

function Navbar(props) {
  return (
    <div className='navbar'> 
    <div className='flex-container'>
    <img src='https://uploads.guim.co.uk/2020/06/17/open-menu.svg' alt='menu' className='navbar-menu'></img>

    <div>Vote</div>
    <div>Questions</div>
    <div>Something</div>
    <img src='https://uploads.guim.co.uk/2020/06/17/open-menu.svg' alt='menu' className='navbar-menu'></img>

    </div>

    </div>
  );
}

export default Navbar;