import React from "react";
import classes from "./Titre.module.css";

const titre = (props) => {
    const monCss = `${classes.Titre} border border-dark p-2 m-2 text-white text-center bg-primary rounded`;
    return <h1 className= {monCss}> {props.children} </h1>
};

export default titre;