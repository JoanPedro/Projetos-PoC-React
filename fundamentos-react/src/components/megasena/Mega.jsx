import './Mega.css'
import React, { useState } from 'react';
import {gerarNumeroNaoContido,  gerarNumeros} from './gerarnumero';

export default (props) => {

  const [qtde, setQtde] = useState(props.qtde || 6)
  const numerosIniciais = Array(qtde).fill(0)
  const [numeros, setNumeros] = useState(numerosIniciais)
  
  
  return (
    <div className="Mega">
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        <label htmlFor=""></label>
        <input type="number" value={qtde} 
          onChange={ e => {
              setQtde(+e.target.value)
              setNumeros(gerarNumeros(+e.target.value))
            }
          }/>
      </div>
      <button onClick={e => setNumeros(gerarNumeros(qtde))}>
        Gerar numeros
      </button>
    </div>
  )
}