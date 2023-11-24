import React from "react";


export default function TempInfo() {

	return (
		<div className="temp-info">
			<div className="temp-holder">
				<span className="temp">
					12<span id="deg">&deg;C</span>
				</span>
			</div>
			<div className="day-time">
				<span className="day">Monday, </span>
				<span className="time">16:00</span>
			</div>
		</div>
	);
}
