import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
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

ReactDOM.render(
  < App/>,
  document.getElementById('root'),
);