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

  const addPoll = question => {
    console.log('adding', question);
    setQuestions([...questions, question]);

    axios
      .post('http://localhost:3001/questions', {
        question: question.question,
        username: question.username,
        answer1: { value: question.answer1, votes: [] },
        answer2: { value: question.answer2, votes: [] },
        answer3: { value: question.answer3, votes: [] },
        answer4: { value: question.answer4, votes: [] },
        isPublic: question.isPublic
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const vote = () => {};

  return (
    <div className='container'>
      <Navbar />

      <div className='content'>
        <Switch>
          <Route
            exact
            path='/create'
            render={props => <CreatePoll {...props} addPoll={addPoll} />}
          />
          <Route
            exact
            path='/'
            render={props => (
              <Feed {...props} questions={questions}  />
            )}
          />
        </Switch>
      </div>

    </div>
  );
}

export default App;
