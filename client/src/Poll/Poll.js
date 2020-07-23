import React from 'react';
import './Poll.css';

function Poll({question}) {
  console.log('quesiton', question)
  return (
    question ? 
    <div className='poll-wrapper'>
    <div className='poll-title'>Poll </div>
    <div className='poll-inner-wrapper'>
  <div className='poll-question'>{question.question}</div>
  <div className='poll-answer'> {question.answer1}</div>
  <div className='poll-answer'>{question.answer2} </div>
  <div className='poll-answer'> {question.answer3}</div>
  <div className='poll-answer'>{question.answer4} </div>
   <div className='question-user'>Submitted by {question.username}</div> 
  </div>
    </div>
    : null
  );
}

export default Poll;