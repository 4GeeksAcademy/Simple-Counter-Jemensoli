import React, { useState, useEffect } from 'react';
import SecondsCounter from "./SecondsCounter";

//create your first component
const Home = () => {
	
	const [actualSeconds, setSeconds] = useState(0);
	const [stopCounter, setStop] = useState(false)

	useEffect(() => {
	  const interval = setInterval(() => {
		if (!stopCounter) {
			setSeconds(actualSeconds => actualSeconds + 1);
		}
	  }, 1000);
	  return () => clearInterval(interval);
	}, [stopCounter]);
  

	function stopTimer() {
		setStop(true)
	}

	function continueTimer() {
		setStop(false)
	}

	function restartTimer() {
		setStop(true)
		setSeconds(0)
		setStop(false)
	}

	return (
		<>
			<SecondsCounter seconds={actualSeconds}/>
			<button type="button" onClick={stopTimer}>Parar contador</button>
			<button type="button" onClick={continueTimer}>Reanudar contador</button>
			<button type="button" onClick={restartTimer}>Reiniciar contador</button>
		</>
	);
};

export default Home;
