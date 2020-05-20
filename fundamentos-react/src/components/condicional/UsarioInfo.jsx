import React, { useState } from 'react';
import { If, Else } from './If';


export default (props) => {
  const Alternativo = { nome: 'Anônimo', sobrenome: '' };
  const [usuario, setUsuario] = useState(props.usuario || Alternativo);

    return (
    <div>
      <If test = { usuario && usuario.sobrenome !== '' } >
        Seja Bem vindo <strong>{ usuario.nome }</strong> {usuario.sobrenome}!
        <Else>
          Seja Bem vindo <strong>Amigão</strong>!
        </Else>
        <button onClick={e => setUsuario(Alternativo)}>Set</button>
      </If> 
    </div>
  )
}