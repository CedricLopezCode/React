import React from "react";
import { NavLink } from "react-router-dom";

const unPays = (props) => {
    console.log(props);
    return <div className = "col-12 col-md-6 border border-light">
        <div className = "row no-gutters p-2">
            <img className = "col-5" alt='drapeau' src={props.flags.svg}/>
            <div className = "col">
                <div className="fs-2 text-primary fw-bold">Nom : {props.translations.fra.common}</div>
                <div>Capitale : {props.capital}</div>
                <div>Région : {props.region}</div>
                <NavLink to={`/pays/${props.translations.fra.common}`} className="nav-link">Plus de détails</NavLink>
                <NavLink to={props.match.url+"/"+props.translations.fra.common} className="nav-link">Plus de détails via url</NavLink>
            </div>
        </div>
    </div>
};

export default unPays;