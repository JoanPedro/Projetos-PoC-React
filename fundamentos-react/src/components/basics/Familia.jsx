import React from 'react';

export default (props) => {
  
  return (
    <div>
      {/** Clona o elemento filho: "FamiliaMembro" e passa as propriedades do PAI
      "Familia". */ }

      {React.cloneElement(props.children, {...props})}
      {/* {props.children} */}
    </div>
  )
}