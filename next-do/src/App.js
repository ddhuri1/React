import React, {Component} from 'react';
import './css/App.css';
import Todos from './Todos';
import Add from './AddTodo';

class App extends Component{
  state = {
    todos : [
      {id: 1, content:"Buy Milk"},
      {id: 2, content:"Wash clothes"}
    ]
  }
  addTodo = (todo) => {
    todo.id = Math.floor(Math.random() * 999)
    const todoList = [...this.state.todos,todo]

    this.setState({
      todos: todoList
    })
  }
  deleteTodo = (id) => {
    const todoL = this.state.todos.filter(todo => {
      return (id !== todo.id)
    })
    this.setState({
      todos: todoL
    })
  }
  render(){
    return (
      <div className="App">
        <img src="https://img.icons8.com/bubbles/100/000000/todo-list.png" className="App-logo" alt="logo"/>
        <h3><strong>My To-Do List</strong></h3>
        <br /> <br /> 
        <Add addTodo={this.addTodo}/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
