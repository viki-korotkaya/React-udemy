import React, {useEffect, useRef} from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

	// const toggleBtnRef = React.createRef();
	const toggleBtnRef = useRef(null);

	// second argument:
	// if [] - after first rendering and unmounting
	// 	nothing - after every changes
	//    [props.fjghfj] - after changing exact property
	useEffect(() => {
		console.log('[Cocpit.js] useEffect');
		// Http request...
		// const timer = setTimeout(() => {
		// 	alert('Saved data to cloud!');
		// }, 1000);
		toggleBtnRef.current.click();
		return () => {
			// clearTimeout(timer);
			console.log('[Cocpit.js] cleanup work in useEffect');
		}
	}, []);

	// useEffect();

	let assignedClasses = [];
	let btnClass = '';
	if (props.showPesons){
      btnClass = classes.Red;
    }
    if (props.personsLength <= 2){
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1){
      assignedClasses.push(classes.bold);
    }
 

	return(
		<div className={classes.Cockpit}>
			<h1>Hi, I'm react app</h1><p className = {assignedClasses.join(' ')}>This is really working</p>
	        <button
				ref={toggleBtnRef}
	           className = {btnClass}
	           onClick = {props.clicked}
	           >
	           Switch name
	        </button>
			<button onClick={props.login}>Log in</button>
        </div>
	);
}

export default React.memo(cockpit);