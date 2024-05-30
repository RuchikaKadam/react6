import React from 'react';

const QuoteCard = (props) => {
  return (
    <div className='quote-container'>
        <p>{props.description}</p>
        <span className='author-text'>{props.author}</span>
    </div>
  )
}
export default QuoteCard