import React from "react";
import classes from "./TitrePage.module.css";

const titrePage = (props) => {
    const monCss = `${classes.policeTitre} border border-dark p-2 m-2 text-white text-center bg-primary rounded fw-bold `;
    return <h1 className = {monCss}> {props.children} </h1>
};

export default titrePage;


