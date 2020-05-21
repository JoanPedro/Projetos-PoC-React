import React from 'react';
import './Display.css';

export default (props) => {

  return(
    <div className="display">
      <div className="colors">
        <div className="red"/>
        <div className="yellow"/>
        <div className="green"/>
      </div>
      <div className="value">{props.value}</div>
      
    </div>
  )
}