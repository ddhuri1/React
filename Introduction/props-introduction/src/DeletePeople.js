import React, {Component} from 'react';

class DeletePeople extends Component{
  state = {
     name : null
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      name : e.target.value
    })
  }

  render(){
    return (
      <div className="Delete">
        <form onSubmit ={this.handleSubmit}>
          <label style={{marginLeft: "30px"}} htmlFor = "name">Name: </label>
          <input type= "text" id="name" onChange={this.handleChange} />
          <button style={{marginLeft: "30px"}} onClick= {() => {this.props.deleteThis(this.state.name)}}> Delete this person</button>
        </form>
        <br />
      </div>
    );
  }
}

export default DeletePeople;
