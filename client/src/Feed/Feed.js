import React from 'react';
import './Feed.css';
import Question from '../Question/Question'

function Feed(props) {
  return (
    <div className='feed-wrapper'>
      This is a feed.
      <Question />
      <Question />
      <Question />
    </div>
  );
}

export default Feed;