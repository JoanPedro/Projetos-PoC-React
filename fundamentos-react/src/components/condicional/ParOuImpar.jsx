import './ParOuImpar.css'
import React, { useState } from 'react';

export default (props) => {
  const [isPar, setNum] = useState(props.numero % 2 === 0);

  return (
    <div className="Par">
      {isPar ? 
        <span>Par</span> 
        : 
        <span>Impar</span>
      } 
      <button onClick={e => setNum(!isPar)}> {isPar ? 'Impar' : 'Par'} </button>    
    </div>
    
  )
}