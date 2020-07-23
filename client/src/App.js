import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
import CreatePoll from './CreatePoll/CreatePoll';
import Votes from './Votes/Votes';
import Poll from './Poll/Poll';

import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/questions')
      .then(function(response) {
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);

  const addPoll = (question) => {
    console.log('adding', question)
    setQuestions([...questions, question ]);

    axios.post('http://localhost:3001/questions', {
      question: question.question,
      username: question.username,
      answer1: question.answer1,
      answer2: question.answer2,
      answer3: question.answer3,
      answer4: question.answer4
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div className='container'>
      <Navbar />

      <div className='content'>
        <Switch>
         
          <Route exact path='/create' component={CreatePoll} />
          <Route
            exact
            path='/'
            render={props => <Feed {...props} questions={questions} addPoll={addPoll}/>}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
