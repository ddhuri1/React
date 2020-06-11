import React, {Component} from 'react';
import Person from './Person';
import Delete from './DeletePeople';
import Add from './AddPeople';

class App extends Component{
 
   state = {
     people: [
       {name: `Devina`, age: 25, sex: `Female`},
       {name: `Sanved`, age: 24, sex: `Male`},
       {name: `Yohaan`, age: 18, sex: `Male`},
       {name: `Alice`, age: 52, sex: `Female`},
       {name: `Sachin`, age: 55, sex: `Male`},
       {name: `Dattatreya`, age: 60, sex: `Male`},
       {name: `Mellissa`, age: 28, sex: `Female`},
       {name: `Crystal`, age: 11, sex: `Female`},
       {name: `Rhys`, age: 2, sex: `Male`}
      ]
   }

  addPeople = (people) =>{
    let listNew = [...this.state.people, people];
    this.setState({
      people : listNew
    })
  }

  deleteThis = (pName) => {
    let personList = this.state.people.filter(person => {
      return person.name !== pName
    })
    this.setState({
      people : personList
    })
  }

  render(){
    return (
      <div className="App">
        <h2 style={{textAlign: "center"}}>Introduction to Props in React</h2>
        <p style={{textAlign: "center"}}>This is an introduction to using <strong>Props</strong> in React and it also showd the difference between props and states.<br />This code goes through creating <strong>Functional components</strong> and adding <strong>Condition</strong> to trigger the props withen them. <br />It also includes some <strong>Add</strong> and <strong>Delete</strong> functionalities. </p>
        <br /><br />
        <Add addPeople={this.addPeople}/>
        <Delete deleteThis={this.deleteThis}/><br />
        <Person people={this.state.people} />
      </div>
    );
  }
}

export default App;
