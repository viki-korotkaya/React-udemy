import React, { Component } from 'react';
// import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Ana", age: 29}, 
      {name: "Hana", age: 33},
      {name: "Sacha", age: 22}
    ],
      showPersons: false
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  switchNameHandler = (newName)=>{
    this.setState({
      persons: [
      {name: newName, age: 29}, 
      {name: "Hana", age: 33},
      {name: "Sacha", age: 32}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      {name: "Ana", age: 29}, 
      {name: event.target.value, age: 33},
      {name: "Sacha", age: 32},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: "yellow",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;
    if (this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map(person => {
              return <Person 
                        name = {person.name} 
                        age = {person.age}/>
            })}
              
          </div> 
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p>This is really working</p>
        <button
           style = {style}
           onClick={this.togglePersonHandler}>
           Switch name
        </button>
        {persons}
          
        
      </div>
        
    );
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work?'))
  }
}

export default App;

// const app = props => {
//   const [personState, setPersonState] = useState(
//       {
//         persons: [
//           {name: "Ana", age: 29}, 
//           {name: "Hana", age: 33},
//           {name: "Sacha", age: 22}
//         ]
//       }
//     );
//   console.log(setPersonState);

//   const switchNameHandler = ()=>{
//     setPersonState({
//         persons: [
//             {name: "Anka", age: 29}, 
//             {name: "Hana", age: 33},
//             {name: "Sacha", age: 32}
//         ]
//       })
//   }; 
//   return (
//       <div className="App">
//         <h1>Hi, I'm react app</h1>
//         <p>This is really working</p>
//         <button onClick={switchNameHandler}>Swith name</button>
//         <Person 
//           name = {personState.persons[0].name} 
//           age = {personState.persons[0].age}
//         />
//         <Person 
//           name = {personState.persons[1].name} 
//           age = {personState.persons[1].age}
//         >Hobby is cars</Person>
//         <Person 
//           name = {personState.persons[2].name} 
//           age = {personState.persons[2].age}
//           click={switchNameHandler} />
//       </div>
//     );
// };

// export default app; 
