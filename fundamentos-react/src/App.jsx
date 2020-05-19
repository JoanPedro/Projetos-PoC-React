import React from 'react';
import Primeiro from './components/basics/Primeiro';
import Fragmento from './components/basics/Fragments';
import SegundoComParametro from './components/basics/SegundoComParametro';

export default _ => {
  const tag = <strong>Olá React!!!</strong>;
  return (
    <div>
      <h1>Fundamentos React</h1>
      { tag }
      <p />
      <Fragmento />
      < SegundoComParametro 
        titulo = "Segundo Componente"
        subtitulo = "Com parâmetro"
        nota = {10}
      />
      < Primeiro />
    </div>
  )
}