import React from "react";

const MessageAlert = (props) => {
    let texteAAfficher = "";
    let lesClasses = "alert p-1 m-1 text-center text-white rounded";
    let lesClassesCor = "alert";

    switch (props.typeAlert) {
        case "ajout":
            texteAAfficher += "Ajout effectué";
            lesClasses += " alert-success";
            lesClassesCor+= " alert-success";
        break;
        case "modif":
            texteAAfficher += "Modification effectuée";
            lesClasses += " alert-warning";
            lesClassesCor+= " alert-warning";
        break;
        case "supp":
            texteAAfficher += "Suppression effectuée";
            lesClasses += " alert-danger";
            lesClassesCor+= " alert-danger";
        break;
    
        default:
        break;
    }

    return <>
        <h3 className = {lesClasses}>{texteAAfficher}</h3>
    </>;
    //Correction: avec la div directement depuis Bootstrap: <div className="alert alert-success" role="alert">{props.children}</div>
};

export default MessageAlert;