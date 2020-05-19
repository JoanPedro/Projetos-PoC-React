import './index.css';
import Primeiro from './components/basics/Primeiro';
import Fragmento from './components/basics/Fragments';
import SegundoComParametro from './components/basics/SegundoComParametro';
import ReactDOM from 'react-dom';
import React from 'react';

// npx create-react-app <nome da paste que será criada>
/* Método Render - 
2 Parâmetros: 
1. Elemento que quer renderizar em tela, 2. Elemento onde será inserido.
Inserido no Index.html -> <div id="root"> </div>
*/

/* Método 1:
const el = document.getElementById('root')
ReactDOM.render('Olá React', el) */

// Método 2: -> String dentro do DOM.
const tag = <strong>Olá React!!!</strong>;

ReactDOM.render(
  <div>
    { tag }
    <p />
    < Primeiro />
    < SegundoComParametro 
      titulo = "Segundo Componente"
      subtitulo = "Com parâmetro"
      nota = {10}
    />
    <Fragmento />
  </div>,
  document.getElementById('root'),
);