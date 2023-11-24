import React from "react";

import WeeklyCard from "./WeeklyCard/WeeklyCard";

export default function Weekly() {

    const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    const tempMinMax = [
        { max: 15, min: -3 },
        { max: 12, min: 7 },
        { max: 9, min: 7 },
        { max: 8, min: 1 },
        { max: 5, min: -2 },
        { max: 4, min: -4 },
        { max: 3, min: -3 }
    ]

	return (
		<section className="weekly">
			{days.map((day, index) => (
				<WeeklyCard key={`key-${index}`} day={day} maxMin={tempMinMax[index]} />
			))}
		</section>
	);
}
