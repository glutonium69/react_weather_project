import React from "react";


export default function WeeklyCard({day, maxMin}) {

    const iconSrc = "src/images/sun.png";

	return (
		<div className="weekly-card">
			<span>{day}</span>

			<div className="icon">
				<img src={iconSrc} alt="" />
			</div>

			<p>
				<span className="temp-max">{maxMin.max}&deg;  </span>
				<span className="temp-min">{maxMin.min}&deg;</span>
			</p>
		</div>
	);
}
