import React from 'react';

const Person = (props) => {
    const {people} = props;
    const peopleList = people.map(prop => {
        return(
          <div className="Person">
            <div><strong>Name:</strong> {prop.name}, Age: {prop.age}, Sex: {prop.sex}</div><br />
          </div>
        )
      })
     //map the object to get individual elements in List
    return (
      <div className="Persons">
        {peopleList}
      </div>
    );
}

export default Person;
