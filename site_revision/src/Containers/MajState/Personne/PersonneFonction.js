import React from "react";
import "./PersonneGeneral.css";
import classes from "./PersonneSpe.module.css";

function personneFonction(props){ // == const personne = props => { 
    return (
        <>
            <h2 className={classes.monTitreClasse}>Prénom: {props.nom}</h2>
            <div>Age: {props.age} ans</div>
            <div>Sexe: {props.sexe}</div>
        </>
    );
}


export default personneFonction;