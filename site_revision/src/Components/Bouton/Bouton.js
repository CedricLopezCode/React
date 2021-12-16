import React from "react";

const bouton = (props) => {
    
    let styleBouton = `btn ${props.typeBtn} ${props.largeur}`;
 
    return <button className={styleBouton} onClick={props.clic}>{props.children}</button>
};

export default bouton;
