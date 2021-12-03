import React from "react";

function personneFonction(props){ // == const personne = props => { 
    return (
        <>
            <h1>Prénom: {props.nom}</h1>
            <div>Age: {props.age} ans</div>
            <div>Sexe: {props.sexe}</div>
        </>
    );
}


export default personneFonction;