import React from "react";

const agePersonne = (props) => { 
    let maintenant = new Date();
    let annee = maintenant.getFullYear();
    return <div>Age: {props.age} ans - ({annee-props.age})</div>;
}

export default agePersonne;