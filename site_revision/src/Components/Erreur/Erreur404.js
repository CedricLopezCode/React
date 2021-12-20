import React from "react";
import imgErreur404 from "../../assets/images/erreurs/error404.png"

const erreur404 = (props) => {
    return <div>
        <img alt="erreur 404" src={imgErreur404} width="404px"/>
        <div>La page n'existe pas</div>
    </div>
};

export default erreur404;