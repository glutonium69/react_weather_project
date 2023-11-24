import React from "react";

import Nav from "./RightSection/jsx/Nav";
import Weekly from "./RightSection/jsx/Weekly";
import Daily from "./RightSection/jsx/Daily";


export default function RightSection(){

    return(
        <section className="right-section">

            <Nav />
            <Weekly />
            <Daily />

        </section>
    );
}