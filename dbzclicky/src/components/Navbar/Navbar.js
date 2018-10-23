import React from "react";
import "./Navbar.css";

const Navbar = props => <h1 className="title">{(props.score === 0) ? "Click any image to begin!" : props.score}</h1>;

export default Navbar;
