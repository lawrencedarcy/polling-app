import React from 'react';
import './Question.css';

function Question({question}) {
  return (
    
    <div className='question-wrapper'>
      
      <div className='flex'>
      {question.question}
   
    <div className='question-user'>Submitted by {question.username}</div>
    <div className='question-upvote'>upvote</div> 
    </div>
     </div>
  );
}

export default Question;