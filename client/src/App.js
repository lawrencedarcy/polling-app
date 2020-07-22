import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Feed from './Feed/Feed';
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

  const addQuestion = (question) => {
    console.log('adding', question)
    setQuestions([...questions, question ]);

    axios.post('http://localhost:3001/questions', {
      question: question.question,
      username: question.username
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
          <Route exact path='/' component={Votes} />
          <Route exact path='/votes' component={Poll} />
          <Route
            exact
            path='/questions'
            render={props => <Feed {...props} questions={questions} addQuestion={addQuestion}/>}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
