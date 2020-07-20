import React from 'react';
import './Feed.css';
import Question from '../Question/Question'

function Feed(props) {
  return (
    <div className='feed-wrapper'>
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
      <Question />
    </div>
  );
}

export default Feed;