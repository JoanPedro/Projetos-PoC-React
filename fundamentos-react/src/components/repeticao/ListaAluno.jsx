import React from 'react';
import Alunos from '../../data/alunos';

export default (props) => {
  /* Cada lista deve conter uma chave ÚNICA para identificar possíveis 
  modificações nos elementos da lista */
  const listasDeAlunos = Alunos.map((aluno, indice) => {
    return (
    <li key={aluno.id}>
      {aluno.id}) {aluno.nome} -> {aluno.nota}
    </li>
    )
  })

  const styleList = {
    color: '#6659C1',
    listStyle: 'none',
  }
  return (

    <div>
      <ul style={styleList}>
        {listasDeAlunos}
      </ul>
    </div>

  )
}