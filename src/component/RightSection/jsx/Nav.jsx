import React from "react";


export default function Daily() {
	return (
		<nav>
			<div className="nav-left">
				<span>Today</span>
				<span>Week</span>
			</div>

			<div className="nav-right">
				<span>°C</span>
				<span>°F</span>

				<div className="pfp">
					<img
						src="https://source.unsplash.com/random/?face-pic-profile/300%C3%97300"
						alt=""
					/>
				</div>
			</div>
		</nav>
	);
}
