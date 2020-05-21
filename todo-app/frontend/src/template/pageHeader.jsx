import React from 'react';

export default (props) => {

  return(

    <header className='page-header'>
      <div className="row">
        <div className="col-1">
          <h2>{props.name} </h2>
        </div>
        <div className="col-2">
          <h2><small>{props.small}</small></h2>
        </div>
      </div>
    </header>
  )
}