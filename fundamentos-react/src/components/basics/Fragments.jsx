import React from 'react';

export default function Fragmento(props) {
  return (
    // Retorno sem div. Retorna diretamento o H2 e o P.
    <React.Fragment>
      <h2>Fragmento</h2>
      <p>Cuidado com esse erro!</p>
    </React.Fragment>
  )
}