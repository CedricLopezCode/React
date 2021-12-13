import React from "react";
import AffichagePoints from "./AffichagePoints";
import classes from "./CaracPerso.module.css";

const uneCarac = (props) => {

    return <>
        <div className="row no-gutters">
            <div className={["mx-2",classes.signe, classes.moins].join(" ")} onClick={props.retraitPointCarac}></div>
            {props.children} : {props.valeurStat} <AffichagePoints valeurStat={props.valeurStat}/>
            <div className={["mx-2",classes.signe, classes.plus].join(" ")} onClick={props.ajoutPointCarac}></div>
        </div>
    </>
};
export default uneCarac;