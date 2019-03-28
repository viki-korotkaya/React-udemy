import React, { Component } from 'react';
import Radium from 'radium';
// import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: "qwer", name: "Ana", age: 29}, 
      {id: "wert", name: "Hana", age: 33},
      {id: "erty", name: "Sacha", age: 22}
    ],
      showPersons: false
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  render() {
    const style = {
      backgroundColor: "green",
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: "lightgreen",
        color: "black"
      }
    }
    let persons = null;
    if (this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                        click = {() => this.deletePersonHandler(index)}
                        name = {person.name} 
                        age = {person.age}
                        key = {person.id}
                        changed = {(event) => this.nameChangeHandler(event, person.id)}/>
            })}
              
          </div> 
      );
      style.backgroundColor = 'red'; 
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    let classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }

    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I'm react app</h1>
        <p className = {classes.join(' ')}>This is really working</p>
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

export default Radium(App);

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
