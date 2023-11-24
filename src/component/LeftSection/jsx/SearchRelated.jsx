import React from "react";


export default function SearchRelated({ handleInput, input, handleSearch }) {
	return (
		<div className="search">
			<div className="search-icon">
				<img src="src/images/search.png" alt="" />
			</div>
			<input
				type="text"
				className="search-bar"
				placeholder="Search for places..."
				onChange={(e) => handleInput(e)}
				value={input}
			/>
			<div className="locate-icon" onClick={handleSearch}>
				<img src="src/images/locate.png" alt="" />
			</div>
		</div>
	);
}