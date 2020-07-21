import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Votes from './Votes/Votes';
import Poll from './Poll/Poll';

import './App.css';

function App() {
  return (
    <div className='container'>
      <Navbar />
      
    <div className='content'>
      <Switch>
      <Route path="/" component={Votes} exact />
                <Route path="/votes" component={Poll}  exact />
                <Route path="/questions" component={Feed}  exact />
                </Switch>
                </div>
    </div>
  );
}

export default App;
