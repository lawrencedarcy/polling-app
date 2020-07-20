import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import Votes from './Votes/Votes';


import './App.css';

function App() {
  return (
    <div className='pad-top'>
      <Navbar />
      

      <Switch>
      <Route path="/" component={Navbar} exact />
                <Route path="/votes" component={Votes}  exact />
                <Route path="/questions" component={Feed}  exact />
                </Switch>
    </div>
  );
}

export default App;
