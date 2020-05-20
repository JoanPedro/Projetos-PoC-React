import React, { useState } from 'react';
import './input.css'
export default (props) => {

  const [valor, setValor] = useState('Inicial')
  const quandoMudar = e => {
    setValor(e.target.value)
  }

  return (

    <div className="Input">
      <h2>{valor}</h2>
      <input value={valor} type="text" onChange={quandoMudar}/>
      <input value={valor} type="text" readOnly/>
    </div>
  )
}