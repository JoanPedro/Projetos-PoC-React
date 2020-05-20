import './TabelaProdutos.css';  
import React from 'react';
import Produtos from '../../data/produtos';

export default (props) => {

  /* Na tabela: Tag TH marca com ênfase (NEGRITO), e TD não marca com ênfase. */
  /* Par no CSS -> Aplicar estilo Zebrado: Com sim, cor não.*/
  const TabelaDeProdutos = Produtos.map((produto, indice) => {
    return (
      <tr className={indice % 2 === 0 ? 'Par' : 'Impar'}
      key={produto.id}
      >
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    )
  })


  return (
    <div className='TabelaProdutos'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {TabelaDeProdutos}
        </tbody>
      </table>
    </div>
  )
}