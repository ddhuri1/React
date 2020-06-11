import React, {Component} from 'react';

class AddPeople extends Component{
 
   state = {
     name: null,
     age: null,
     sex: null
   }

   handleSubmit= (e) =>{
       e.preventDefault();
       this.props.addPeople(this.state);
       alert("Information Submitted");
   }

   handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
   }

   render(){
    return (
      <div className="Add">
        <form onSubmit = {this.handleSubmit}>
            <label style={{marginLeft: "30px"}} htmlFor = "name">Name: </label>
            <input type= "text" id="name" onChange={this.handleChange} />
            <label htmlFor = "age"> &nbsp; Age: </label>
            <input type= "number" id="age" onChange={this.handleChange} />
            <label htmlFor = "sex"> &nbsp; Sex: </label>
            <input type= "text" id="sex" onChange={this.handleChange} />
            <button style={{marginLeft: "30px"}}> Add this Person </button>
        </form>
        <br />
      </div>
    );
  }
}

export default AddPeople;
