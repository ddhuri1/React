import React, {Component} from 'react';
import Props from './Props';

class App extends Component{
 
   state = {
     props: [
       {name: `Devina`, age: 25, sex: `Female`},
       {name: `Sanved`, age: 25, sex: `Male`},
       {name: `Yohaan`, age: 18, sex: `Male`}
      
      ]
   }
   render(){
    return (
      <div className="App">
        <h2 style={{textAlign: "center"}}>Introduction to Props in React</h2>
        <p style={{textAlign: "center"}}>This is an introduction to using <strong>Props</strong> in React and it also showd the difference between props and states.<br />This code goes through creating <strong>UI components</strong> and adding <strong>Condition</strong> to trigger the props withen them. <br />It also includes some form creating to <strong>Add</strong> and <strong>Delete</strong> the elements in props. </p>
        <Props props={this.state.props} />
      </div>
    );
  }
}

export default App;
