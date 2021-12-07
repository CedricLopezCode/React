import React from "react";

const boutonCor = (props) => {
    
    let styleBouton = `btn ${props.typeBtn} ${props.largeur}`;
 
    return <button className={styleBouton} onClick={props.clic}>{props.children}</button>
};

export default boutonCor;
