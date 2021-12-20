import React from "react";

const erreur = (props) => {
    return <div className = "p-2 m-2 text-center alert alert-danger">
        {props.children}
    </div>
};

export default erreur;