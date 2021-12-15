import React from "react";

const unPays = (props) => {
    //console.log(props);
    return <div className = "col-6 border border-light">
        <div className = "row no-gutters p-2">
            <img className = "col-5" alt='drapeau' src={props.flags.png}/>
            <div className = "col">
                <div className="fs-2 text-primary fw-bold">Nom : {props.translations.fra.common}</div>
                <div>Capitale : {props.capital}</div>
                <div>Région : {props.region}</div>
            </div>
        </div>
    </div>
};

export default unPays;