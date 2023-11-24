import React from "react";

import SearchRelated from "./LeftSection/jsx/SearchRelated";
import ImgHolder from "./LeftSection/jsx/ImgHolder";
import TempInfo from "./LeftSection/jsx/TempInfo";
import TempDescription from "./LeftSection/jsx/TempDescription";
import BannerHolder from "./LeftSection/jsx/BannerHolder";


export default function LeftSection({ handleInput, input, handleSearch }) {
	return (
		<section className="left-section">
			<SearchRelated
				handleInput={handleInput}
				input={input}
				handleSearch={handleSearch}
			/>
			<ImgHolder />
			<TempInfo />
			<TempDescription />
			<BannerHolder />
		</section>
	);
}

