import React from "react";

const titre = (props) => {
    const monCss = "border border-dark p-2 m-2 text-white text-center bg-primary rounded fw-bold";
    return <h1 className = {monCss}> {props.children} </h1>
};

export default titre;