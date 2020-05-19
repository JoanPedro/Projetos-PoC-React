import React from 'react';
import './Primeiro.css';

export default function Primeiro() {
  const subtitulo = 'Seja bem vindo';

  return (
    <div>
      <h2>Primeiro Componente</h2>
       <h3>{ subtitulo }</h3>
    </div>
  )
}