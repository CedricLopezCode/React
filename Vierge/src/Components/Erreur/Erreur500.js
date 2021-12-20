import React from "react";

const erreur500 = (props) => {
    return <h1 className = "border border-dark p-2 m-2 text-white text-center bg-primary rounded">
        {props.children}
    </h1>
};

export default erreur500;