import React from "react";

export default function Daily() {

	const uvIndex = (
		<div className="daily-card uv-index">
			<span className="title">UV Index</span>

			<div className="gauge-wrapper">
                <div className="gauge-body">
                    <div className="gauge-fill"></div>
                    <div className="gauge-cover">
                        <span className="un-index-value big-text">5</span>
                    </div>
                </div>
                            
                {/* <span>3</span>
                <span>6</span>
                <span>9</span>
                <span>12</span> */}
            </div>

		</div>
	);

	const windStatus = (
		<div className="daily-card wind-status">
			<span className="title">Wind Status</span>
			<span className="big-text">
				7.7
				<span className="unit small-text"> km/h</span>
			</span>
			<div className="icon-comment">
				<div className="icon">
					<img src="src/images/wind-status-icon.png" alt="" width="100%" />
				</div>
				<span className="comment">WSW</span>
			</div>
		</div>
	);

	const sunRiseSet = (
		<div className="daily-card sun-rise-set">
			<span className="title">Sunrise & Sunset</span>
			<div className="icon-comment">
				<div className="icon">
					<img src="src/images/sun-rise.png" alt="" width="100%" />
				</div>
				<div className="text">
					<span className="comment">6:35 AM</span>
					<span className="comment">-1m 46s</span>
				</div>
			</div>
			<div className="icon-comment">
				<div className="icon">
					<img src="src/images/sun-set.png" alt="" width="100%" />
				</div>
				<div className="text">
					<span className="comment">5:42 PM</span>
					<span className="comment">-2m 22s</span>
				</div>
			</div>
		</div>
	);

	const humidity = (
		<div className="daily-card humidity">
			<span className="title">Humidity</span>
			<span className="humidity big-text">
				12
				<span className="small-text"> %</span>
			</span>
			<span className="comment">Normal 👍</span>
		</div>
	);

	const visibility = (
		<div className="daily-card visibility">
			<span className="title">Visibility</span>
			<span className="visibility big-text">
				5.2
				<span className="unit small-text"> km</span>
			</span>
			<span className="comment">Average 🙁</span>
		</div>
	);

	const airQuality = (
		<div className="daily-card air-quality">
			<span className="title">Air Quality</span>
			<span className="air-quality big-text">105</span>
			<span className="comment">Unhealthy 👎</span>
		</div>
	);

	return (
		<section className="daily">
			<span className="daily-title">Today's Highlight</span>
			<div className="daily-card-holder">
				{uvIndex}
				{windStatus}
				{sunRiseSet}
				{humidity}
				{visibility}
				{airQuality}
			</div>
		</section>
	);
}
