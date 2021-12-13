import React from 'react';
import CaracPerso from './CaracPerso/CaracPerso';
import ImagePerso from './ImagePerso/ImagePerso';

const personnage = (props) => {

    return <>
        <div className="row no-gutters ">
            <div className="col-6">
                <ImagePerso 
                    numImage= {props.image} 
                    changImage= {props.changImage} 
                    imageSuivante= {props.imageSuivante} 
                    imagePrecedente= {props.imagePrecedente}
                />
            </div>
            <div className="col-6">
                <CaracPerso 
                    force={props.force}
                    agilite={props.agilite}
                    intelligence={props.intelligence}
                    nbPointsMax={props.nbPointsMax}
                    ajoutPointCarac={props.ajoutPointCarac}
                    retraitPointCarac={props.retraitPointCarac}
                />
            </div>
        </div>
    </>;

}//fin Personnage

export default personnage;