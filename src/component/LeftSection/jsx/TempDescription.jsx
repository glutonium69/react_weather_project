import React from "react";


export default function TempDescription() {
	return (
        <div className="temp-description">
            <div className="description">
                <div className="icon">
                    <img src="src/images/cloud.png" alt="" />
                </div>
                <span>Mostly Cloudy</span>
            </div>
            <div className="rain">
                <div className="icon">
                    <img src="src/images/rain.png" alt="" />       
                </div>
                <span>30%</span>
            </div>
        </div>
    );
}


