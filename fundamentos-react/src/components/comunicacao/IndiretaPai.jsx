import React, { useState } from 'react';
import IndiretaFilho from './IndiretaFilho';

export default (props) => {

  let [nome, setNome] = useState('?'); 
  let [idade, setIdade] = useState(0); 
  let [nerd, setNerd] = useState(false);

  const fornecerInformacoes = (nome, idade, nerd) => {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);

    console.log(nerd, idade, nome)
  }

  return(
    <div>
      <div>Pai</div>
      <span>{nome} <strong>{idade}</strong> {`Nerd: ${nerd}`}</span>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  )
}