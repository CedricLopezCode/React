import React from "react";
import Titre from "./Titre/Titre";

const tabEtBoucles = (props) => {
    const tableau = ["tab0", "tab1", "tab2", "tab3", "tab4"];
    const carte = {carte0: "valeur 0", carte1: "valeur 1", carte2: "valeur 2", carte3: "valeur 3", carte4: "valeur 4"};
    
    let simpleFor = "For simple:";
    let tableauFor = "For Tableau:";
    let tableauForEach = "For Each Tableau:";
    let tableauForIn = "For In Tableau:";
    let mapForIn = "For In Map:";
    const listeAttributs = Object.keys(carte); //liste les noms des attributs

    for (let index = 0; index < 6; index++) {
        simpleFor += " ";
        simpleFor += index;
    }
    for (let index = 0; index < tableau.length; index++) {
        tableauFor += " ";
        tableauFor += tableau[index];
    }
    tableau.forEach(element => {
        tableauForEach += " ";
        tableauForEach += element;
    });
    for (const key in tableau) {
        tableauForIn += " ";
        tableauForIn += tableau[key];
    }
    for (const key in carte) {
        mapForIn += " ";
        mapForIn += carte[key];
    }

    return <>
    <Titre>Tableau, Map et Boucles</Titre>
    <div className="fs-3 text-center text-primary">{simpleFor}</div>
    <div className="row no-gutters text-center fs-3">
        <div className="col-6">
            <div>{tableauFor}</div>
            <div>{tableauForEach}</div>
            <div>{tableauForIn}</div>
        </div>
        <div className="col-6">
            <div>{mapForIn}</div>
            <div>Utile quand on ne sais pas à l'avance les noms des attributs</div>
            <div>Liste Attributs Map: {listeAttributs}</div>
        </div>
    </div>
    <div></div>
         
    </>
};

export default tabEtBoucles;