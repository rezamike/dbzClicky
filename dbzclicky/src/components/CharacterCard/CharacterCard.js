import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (

    <div className="card" key={props.id}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
            <ul>
                <li>
                    <strong>Name:</strong> {props.name}
                </li>
                <li>
                    <strong>Race:</strong> {props.race}
                </li>
            </ul>
        </div>
    </div>
);

export default CharacterCard;
