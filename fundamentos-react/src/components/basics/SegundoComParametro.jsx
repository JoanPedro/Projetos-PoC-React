import React from 'react';

export default function ComParametro(props) {
  const subtitulo = props.subtitulo;
  const titulo = props.titulo;
  const nota = props.nota;
  const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
  // Propriedades são somente leitura!
  // props.nota = Math.ceil(props.nota) -> Errado
  // Certo -> const notaInt = Math.ceil(props.nota) 
  
  return (
    <div>
      <h2> { titulo } </h2>
      <h3> <strong> { subtitulo } </strong> 
        <p>
          Nota: { nota } e está <strong>{ status }</strong>!
        </p>
      </h3>
    </div>
  )
}