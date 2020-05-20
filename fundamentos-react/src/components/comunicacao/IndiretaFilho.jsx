import React from 'react';

export default (props) => {
  const callBack__Click = props.quandoClicar

  return(
    <div>
      <div>
        Filho
      </div>
      <button onClick={
        e => {
          callBack__Click('João', 53, true)
        }
      }> 
        Fornecer Informações 
      </button>
    </div>
  )
}