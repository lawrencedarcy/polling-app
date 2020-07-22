import React from 'react';
import './Feed.css';
import Question from '../Question/Question';
import QuestionForm from '../Question/QuestionForm/QuestionForm';

function Feed({ questions, addQuestion }) {
  return (
    <div className='feed-wrapper'>
      <QuestionForm addQuestion={addQuestion}/>
      {questions &&
        questions.map(question => <Question question={question} key={question._id}/>)}
    </div>
  );
}

export default Feed;
