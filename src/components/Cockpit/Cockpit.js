import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
	let assignedClasses = [];
	let btnClass = '';
	if (props.showPesons){
      btnClass = classes.Red;
    }
    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }
 

	return(
		<div className={classes.Cockpit}>
			<h1>Hi, I'm react app</h1><p className = {assignedClasses.join(' ')}>This is really working</p>
	        <button
	           className = {btnClass}
	           onClick = {props.clicked}
	           >
	           Switch name
	        </button>
        </div>
	);
}

export default cockpit;