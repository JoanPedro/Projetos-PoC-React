import React, { Component } from 'react';
import axios from 'axios';
import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3005/api/todos';

class Todo extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      list: [],
    }

    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMarkAsPanding = this.handleMarkAsPanding.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClear = this.handleClear.bind(this);

    this.refresh();
  }

  refresh(description = '') {
    const search = description ? `&description__regex=/${description}/` : ''

    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(res => this.setState({
        ...this.state,
        description,
        list: res.data,
      })
    )
  }

  handleSearch() {
    this.refresh(this.state.description)
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description })
      .then(res => this.refresh())
  }

  handleRemove(todo) {
    axios.delete(`${URL}/${todo._id}`)
      .then(res => this.refresh(this.state.description))
  }

  handleChange(e) {
    this.setState({...this.state, description: e.target.value})
  }

  handleMarkAsDone(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true})
      .then(res => this.refresh(this.state.description))
  }

  handleMarkAsPanding(todo) {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false})
      .then(res => this.refresh(this.state.description))
  }

  handleClear () {
    this.refresh()
  }
  
  render() {
    return (
      <div className="container">
        <p></p>
        <PageHeader name="Tarefas" small="Cadastro" /> 
        <p></p>
        <TodoForm
        description = {this.state.description}
        handleAdd = {this.handleAdd}
        handleChange = {this.handleChange} 
        handleSearch = {this.handleSearch}
        handleClear = {this.handleClear}/>  
        <p></p>
        <TodoList list={this.state.list}
          handleRemove={this.handleRemove}
          handleMarkAsDone={this.handleMarkAsDone}
          handleMarkAsPanding={this.handleMarkAsPanding}
          />
      </div>
    )
  }
}

export default Todo;