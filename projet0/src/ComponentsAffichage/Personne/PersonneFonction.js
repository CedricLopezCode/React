import React from "react";
import classes from "./PersonneSpe.module.css";

function personneFonction(props){ // == const personne = props => { 
    return (
        <>
            <h1 className={classes.monTitreClasse}>Prénom: {props.nom}</h1>
            <div>Age: {props.age} ans</div>
            <div>Sexe: {props.sexe}</div>
        </>
    );
}


export default personneFonction;