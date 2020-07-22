import React from 'react';
import './Poll.css';

function Poll(props) {
  return (
    <div className='poll-wrapper'>
    <div className='poll-title'>Poll of the day</div>
    <div className='poll-inner-wrapper'>
  <div className='poll-question'>Should we bring back the death penalty?</div>
  <div className='poll-answer'> <span className='emoji'>✅</span> Yes</div>
  <div className='poll-answer'> <span className='emoji'>❌</span> No</div>
  </div>
    </div>
  );
}

export default Poll;