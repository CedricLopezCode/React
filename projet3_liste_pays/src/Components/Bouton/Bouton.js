import React from "react";

const bouton = (props) => {
    
    let styleBouton = `btn ${props.typeBtn} ${props.largeur}`;

 
    return <button className={styleBouton} style={props.selected? {opacity: 1} : {opacity: 0.7}} onClick={props.clic}>{props.children} </button>
};

export default bouton;
