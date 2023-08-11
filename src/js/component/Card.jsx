import React from "react";
import '../../styles/cardStyle.css'

const Card = (props) => {
	return (
        <>
            <div className="timer_card">
                <div className="timer_number">
                    {props.number}             
                </div>
            </div>
        </>
	);
};

export default Card;
