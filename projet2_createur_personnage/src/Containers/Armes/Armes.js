import React from 'react';
import UneArme from './UneArme/UneArme';
import ImageArme1 from "../../assets/images/armes/epee.png";
import ImageArme2 from "../../assets/images/armes/fleau.png";
import ImageArme3 from "../../assets/images/armes/arc.png";
import ImageArme4 from "../../assets/images/armes/hache.png";

const armes = (props) => {
    
    return <div className="row no-gutters text-center align-items-center px-5">
        {props.listeArmes.map(uneArme => {
            let armeImage;
            switch (uneArme) {
                case "epee": armeImage = ImageArme1; break;
                case "fleau": armeImage = ImageArme2; break;
                case "arc": armeImage = ImageArme3; break;
                case "hache": armeImage = ImageArme4; break;
            
                default:
                    console.log("erreur");
                break;
            }
            return <div key={uneArme} className="col-3">
                <UneArme 
                    armeImage = {armeImage}
                    isArmeActuelle={props.armeActuelle === uneArme}
                    changArme={props.changArme}
                    clic={() => props.changArme(uneArme)}
                >
                    {uneArme}
                </UneArme>
            </div>
        })}
    </div>;

}//fin Armes

export default armes;