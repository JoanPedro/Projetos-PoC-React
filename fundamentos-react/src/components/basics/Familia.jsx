import React from 'react';

export default (props) => {
  
  return (
    <div>
      {/** Clona o elemento filho: "FamiliaMembro" e suas propriedades e também
      passa as propriedades do PAI "Familia". */ }

      {React.cloneElement(props.children, {...props})}
      {/* {props.children} */}
    </div>
  )
}