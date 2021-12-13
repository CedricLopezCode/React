import React from 'react';
import classes from "./ImagePerso.module.css";
import ImagePlayer1 from "../../../../assets/images/persos/player1.png";
import ImagePlayer2 from "../../../../assets/images/persos/player2.png";
import ImagePlayer3 from "../../../../assets/images/persos/player3.png";

const ImagePerso = (props) => {
    let nomImage="";
    switch (props.numImage) {
        case 1: nomImage = ImagePlayer1; break;
        case 2: nomImage = ImagePlayer2; break;
        case 3: nomImage = ImagePlayer3; break;
    
        default:
            console.log("erreur");
        break;
    }
    const flecheGauche = `${classes.fleche} ${classes.gauche} col-1`;   //On l'évite grâce à l'ecriture de tableau join ci-dessous
    const flecheDroite = `${classes.fleche} ${classes.droite} col-1`;   //On l'évite grâce à l'ecriture de tableau join ci-dessous
    console.log(flecheGauche + flecheDroite);
    return (
        <div className="row no-gutters text-center align-items-center px-5">
            <div className={["col-1", classes.fleche, classes.gauche].join(" ")} onClick={props.imageSuivante}></div>
            <div className="col">
                <img src={nomImage} alt='perso'/>
            </div>
            <div className={["col-1", classes.fleche, classes.droite].join(" ")} onClick={props.imagePrecedente}></div>
        </div>
    );
    /* Ma version avec 1 fonction pour suivant et précédent
        <div className={["col-1", classes.fleche, classes.gauche].join(" ")} onClick={() => props.changImage()}></div>
        <div className={["col-1", classes.fleche, classes.droite].join(" ")} onClick={() => props.changImage(true)}></div>
    */
    
}//fin ImagePerso


export default ImagePerso;