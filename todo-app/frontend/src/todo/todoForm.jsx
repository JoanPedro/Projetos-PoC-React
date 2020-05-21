import React from 'react';
import Grid from '../template/grid';
import IconButton from './iconButton';

export default (props) => {

  return(
    <div role="form" className="todoForm row">
      <Grid cols='12 9 10'>
        <input className="form-control" id="description"
          placeholder="Adicione uma tarefa"
          onChange={props.handleChange}
          value={props.description}/>
      </Grid>
      <Grid cols='12 3 2'>  
        < IconButton styles='primary' icon='plus'
          onClick={props.handleAdd}/>
        < IconButton styles='info' icon='search'
          onClick={props.handleSearch}/>
        < IconButton styles='secondary' icon='close'
          onClick={props.handleClear}/>
      </Grid>
    </div>
  )
}