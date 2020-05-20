import React from 'react';
import { If, Else } from './If';


export default (props) => {
  const usuario = props.usuario || { nome: 'Anônimo', sobrenome: '' }
  return (
    <div>
      <If test = { usuario && usuario.sobrenome !== '' } >
        Seja Bem vindo <strong>{ usuario.nome }</strong> {usuario.sobrenome}!
        <Else>
          Seja Bem vindo <strong>Amigão</strong>!
        </Else>
      </If> 
    </div>
  )
}