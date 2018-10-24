import React from "react";
import "./Navbar.css";

const Navbar = props => (

    <div>
        <h1 className="title">
            {(props.score === 0) ? "Click any image to get started!" : "Score: " + props.score + "        |         Top Score: " + props.high }
        </h1>
    </div>
);

export default Navbar;
