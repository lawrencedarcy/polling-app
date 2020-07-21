import React from 'react';
import './Poll.css';

function Poll(props) {
  return (
    <div className='poll-wrapper'>

  <div className='poll-question'>Should we bring back the death penalty?</div>
  <div className='poll-answer'>Yes</div>
  <div className='poll-answer'>No</div>
    </div>
  );
}

export default Poll;