import React from "react";
//import AfficheUnPoint from "./AfficheUnPoint";
import classes from "./CaracPerso.module.css";

const affichagePoints = (props) => {
    
    let bouclePoints = [];

    for (let i = 0; i < props.valeurStat; i++) {
        bouclePoints.push(<div key={i} className={classes.points}> </div>) ;
    }
 
    return <> {bouclePoints}</>;
};

export default affichagePoints;