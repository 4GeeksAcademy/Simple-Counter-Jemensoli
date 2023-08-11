import React, { useState, useEffect } from 'react';
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import '../../styles/secondsCounterStyle.css'

const SecondsCounter = (props) => {

	const [secondsString, setSecondsString] = useState("");

	useEffect(() => {
		setSecondsString(String(props.seconds).padStart(6, '0'))
	}, [props.seconds]);
  
	return (
		<div className='secondsCards'>
			<Card number={<FontAwesomeIcon icon={faClock} />}/>
			<Card number={secondsString[0]}/>
			<Card number={secondsString[1]}/>
			<Card number={secondsString[2]}/>
			<Card number={secondsString[3]}/>
			<Card number={secondsString[4]}/>
			<Card number={secondsString[5]}/>
		</div>
	);
};

export default SecondsCounter;
