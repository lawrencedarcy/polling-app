import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar(props) {
  return (
    <div className='navbar'> 
    <div className='flex-container'>
    <img src='https://uploads.guim.co.uk/2020/06/17/open-menu.svg' alt='menu' className='navbar-menu'></img>

  
    <Link to="/votes">Vote </Link>
    
    <Link to="/questions">Questions </Link>

    <Link to="/questions">Something </Link>
    <img src='https://uploads.guim.co.uk/2020/06/17/open-menu.svg' alt='menu' className='navbar-menu'></img>

    </div>

    </div>
  );
}

export default Navbar;