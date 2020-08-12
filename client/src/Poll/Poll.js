import React from 'react';
import './Poll.css';

function Poll({question}) {
  console.log('quesiton', question)
  return (
    
   
    <div className='poll-wrapper'>
    <div className='poll-title'>Poll </div>
    <div className='poll-inner-wrapper'>
  <div className='poll-question'>{question.question}</div>
  <div className='poll-answer'> {question.answer1.value}</div>
  <div className='poll-answer'>{question.answer2.value} </div>
  <div className='poll-answer'> {question.answer3.value}</div>
  <div className='poll-answer'>{question.answer4.value} </div>
   <div className='question-user'>Submitted by {question.username}</div> 
  </div>
    </div>
   
   
  );
}

export default Poll;