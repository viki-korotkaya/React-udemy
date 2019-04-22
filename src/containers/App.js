import React, { Component } from 'react';
// import React, { useState } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructer')
  }

  state = {
    persons: [
      {id: "qwer", name: "Ana", age: 29}, 
      {id: "wert", name: "Hana", age: 33},
      {id: "erty", name: "Sacha", age: 22}
    ],
      showPersons: false,
      showCockpit: true
  };

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  };

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  };

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  };

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  };


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
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons){
      persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler} />;
    }

    return (
      
      <WithClass classes={classes.App}>
      <button onClick = {() => this.setState({showCockpit: false})}>Remove Cockpit</button>
      {this.state.showCockpit ? (<Cockpit 
          showPersons={this.state.showPersons}
          clicked = {this.togglePersonHandler}
          personslenght={this.state.persons.length}
          persons = {this.state.persons} />) : null}
        
        {persons}
      </WithClass>
      
        
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does it work?'))
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
