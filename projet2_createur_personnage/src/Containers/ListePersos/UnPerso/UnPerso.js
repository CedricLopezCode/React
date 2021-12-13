import React from "react";

import imagePlayer1 from "../../../assets/images/persos/player1.png";
import imagePlayer2 from "../../../assets/images/persos/player2.png";
import imagePlayer3 from "../../../assets/images/persos/player3.png";

import UneArme from "../../Armes/UneArme/UneArme";
import ImageArme1 from "../../../assets/images/armes/epee.png";
import ImageArme2 from "../../../assets/images/armes/fleau.png";
import ImageArme3 from "../../../assets/images/armes/arc.png";
import ImageArme4 from "../../../assets/images/armes/hache.png";

const unPerso = (props) => {
    console.log(props);
    let armeImage;
    switch (props.armeActuelle) {
        case "epee": armeImage = ImageArme1; break;
        case "fleau": armeImage = ImageArme2; break;
        case "arc": armeImage = ImageArme3; break;
        case "hache": armeImage = ImageArme4; break;
    
        default:
            console.log("erreur");
        break;
    }
    let playerImage;
    switch (props.image) {
        case 1: playerImage = imagePlayer1; break;
        case 2: playerImage = imagePlayer2; break;
        case 3: playerImage = imagePlayer3; break;
    
        default:
            console.log("erreur");
        break;
    }
    return <div className = "row no-gutters">
        <div className="col-6">
            <div className="fs-1">{props.pseudo}</div>
            <img src={playerImage} alt="perso"/>
        </div>
        <div className="col-6">
            <div>Force : {props.force}</div>
            <div>Agilité : {props.agilite}</div>
            <div>Intelligence : {props.intelligence}</div>
            <UneArme 
                armeImage = {armeImage}
                isArmeActuelle= "true"
            >
            </UneArme>
        </div>
    </div>
};

export default unPerso;