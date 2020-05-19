import './Card.css';
import React from 'react';

export default (props) => {
  const style = {
    backgroundColor: props.color || '#FF4500',
    opacity: 1,
    borderColor: props.color || '#FF4500',
  }

  return (
    <div className="Card" style={style}>
      <div className="Title">{props.titulo}</div> 
      <div className="Content">
        {props.children}
      </div>
    </div>
  )
}