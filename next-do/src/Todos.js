import React from 'react';
import './css/Todos.css';

const Todos = (props) => {
    
    const {todos} = props;
    const todoList = (!todos.length) ? (
        <h6><strong>Yay!! You have no more Todos.</strong></h6>
        ) : (
            todos.map(todo => {
            return (
                <div className="Todos" key={todo.id}>
                    <label>
                        <input type="checkbox" />
                        <span >{todo.content}</span>
                    </label>
                    <span className="deletion" onClick = {() => {props.deleteTodo(todo.id)}}> Delete</span>
                    <br />                    
                </div>
                );
            }
        )
    ) 
    return (
      <div className="Todos">
        {todoList}
      </div>
    );
}

export default Todos;