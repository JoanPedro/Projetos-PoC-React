import React from 'react';
import Grid from '../template/grid';
import IconButton from '../todo/iconButton';

export default (props) => {

  const renderRows = _ => {
    const list = props.list || [];

    return list.map(x => (
      <tr key={x._id}>
        <td className={x.done ? 'markedAsDone' : ''}> {x.description} </td>
        <td >
          <IconButton styles='success' icon='check' hide={x.done}
            onClick={() => props.handleMarkAsDone(x)}/>

          <IconButton styles='warning' icon='undo' hide={!x.done}
            onClick={() => props.handleMarkAsPanding(x)}/>

          <IconButton styles='danger' icon='trash-o' hide={!x.done}
            onClick={() => props.handleRemove(x)}/>
        </td>
      </tr>
    ))
  }

  return (
    <div role="form" className="todoForm row">
      <Grid cols='12 12 12'>
        <table className="table text-left" >
          <thead>
            <th>
              <tr style={{fontWeight: 700}}>Descrição</tr>
            </th>
            <th>
              <tr className="tableActions" style={{fontWeight: 700}}>Ações</tr>
            </th>
          </thead>
          <tbody>
            {renderRows()}
          </tbody>
        </table>
      </Grid>
    </div>
  )
}