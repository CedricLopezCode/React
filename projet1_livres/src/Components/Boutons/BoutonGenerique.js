import React from "react";

const boutonGenerique = (props) => {
    
    let styleBouton = "btn";
    switch (props.children) {
        case "Ajouter":
            styleBouton += " btn-success";
        break;
        case "Modifier":
            styleBouton += " btn-warning";
        break;
        case "Supprimmer":
            styleBouton += " btn-danger";
        break;
    
        default:
            styleBouton += " btn-primary";
        break;
    }
 
    return <button className={styleBouton}>{props.children}</button>
};

export default boutonGenerique;
