import React, {Component} from 'react';

class Props extends Component{
  render(){
    //const {name, age, sex} = this.props;
    const { props } = this.props; //get object from class component
    const propsList = props.map(prop => {
      return(
        <div className="Prop"  style={{marginLeft: "30px"}}>
          <div>Name : {prop.name}</div>
          <div>Age : {prop.age}</div>
          <div>Sex : {prop.sex}</div><br />
        </div>
      )
    }) //map the object to get individual elements in List
    return (
      <div className="Props">
        {propsList}
      </div>
    );
  }
}

export default Props;
