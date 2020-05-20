import React from 'react';
import DiretaFilho from './DiretaFilho';

export default (props) => {

  return(
    <div>
      <DiretaFilho
          texto = 'Filho 1'
          numero = {999}
          bool = {true} 
        ></DiretaFilho>
    </div>
  )
}