import React from 'react';

export default (props) => {

return (

    <div> 
      <p>{props.filha} <strong> {props.sobrenomeDaMae} {props.sobrenomeDoPai}</strong></p> 
      {props.filho} <strong> {props.sobrenomeDaMae} {props.sobrenomeDoPai}</strong> 
    </div>

  )
}
