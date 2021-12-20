import React from "react";
import { NavLink } from "react-router-dom";

const unPays = (props) => {
    console.log(props);
    let contenu;
    if(!props.solo){ // tous les pays
        contenu = (
            <NavLink to={`/payscor/${props.translations.fra.common}`} className="nav-link">Correction</NavLink>
        );
    } else { //Detail pays 
        contenu = (
            <div>Nom anglais: {props.name.common}</div>
        );
    }
    return <div className = "col-12 col-md-6 border border-light">
        <div className = "row no-gutters p-2">
            <img className = "col-5" alt='drapeau' src={props.flags.svg}/>
            <div className = "col">
                <div className="text-white fs-3 text-center">Nom : {props.translations.fra.common}</div>
                <div className="text-white">Région : {props.region}</div>
                <div className="text-white">Capitale : {props.capital}</div>
                <NavLink to={`/pays/${props.translations.fra.common}`} className="nav-link">Plus de détails</NavLink> {/* Mieux car évite d'avoir des repetitions   */}
                {/*    <NavLink to={props.match.url+"/"+props.translations.fra.common} className="nav-link">Plus de détails via url</NavLink> */}
                {contenu}
            </div>
        </div>
        {/*    */}
    </div>
};

export default unPays;