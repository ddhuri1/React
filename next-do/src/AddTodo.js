import React, {Component} from 'react';

class AddTodo extends Component{
    state = {
        content :''
    }
    handleChange = (e) => {
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return (
        <div className="Add">
            <form className="formAdd" onSubmit={this.handleSubmit}> 
                <label>Content: </label>
                <input type= "text" id="name" name="content" size="50" onChange={this.handleChange} value={this.state.content} />
                <button>Add New</button>
            </form>
        </div>
        );
    }
}

export default AddTodo;