import React, { useEffect, useState } from "react";

import LeftSection from "./component/LeftSection"
import RightSection from "./component/RightSection"

import "./AppCss/App.css";



export default function(){

    const [apiData, setApiData] = useState([]);
    const [input, setInput] = useState("");
    const [isSearching, setIsSearching] = useState(false)

    
    useEffect(() => {
        async function fetchData(){
            const api_url = "https://api.open-meteo.com/v1/forecast?latitude=24.899&longitude=91.872&current=temperature_2m,rain,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&forecast_days=8"
            const res = await fetch(api_url);
            const data = await res.json();
            setApiData(data);
            console.log(apiData)
        }

        fetchData();
    },[isSearching])

    function handleInput(e){
        setInput(e.target.value)
    }

    function handleSearch(){
        setIsSearching(!isSearching);
    }

    return (
			<main>
				<LeftSection
					handleInput={handleInput}
					input={input}
					handleSearch={handleSearch}
				/>
				<RightSection />
			</main>
		);
}




