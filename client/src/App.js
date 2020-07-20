import React from 'react';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import './App.css';

function App() {
  return (
    <div className='pad-top'>
      <Navbar />
      <Feed />
    </div>
  );
}

export default App;
