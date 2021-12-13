import React from 'react';
import AffichagePoints from './UneCarac/AffichagePoints';
import UneCarac from './UneCarac/UneCarac';

const caracPerso = (props) => {

    const pointRestants = props.nbPointsMax - (props.force + props.agilite + props.intelligence);
 
    return <>
        <AffichagePoints stat={props.force} />
        <div>
            Points restants : <span className="badge bg-success fs-5 mb-3"> {pointRestants} </span>  
        </div>
        <UneCarac 
            valeurStat={props.force} 
            ajoutPointCarac={() => props.ajoutPointCarac("force", pointRestants)}
            retraitPointCarac={() => props.retraitPointCarac("force")}>
            Force
        </UneCarac>
        <UneCarac 
            valeurStat={props.agilite} 
            ajoutPointCarac={() => props.ajoutPointCarac("agilite", pointRestants)}
            retraitPointCarac={() => props.retraitPointCarac("agilite")}>
            Agilite
        </UneCarac>
        <UneCarac 
            valeurStat={props.intelligence} 
            ajoutPointCarac={() => props.ajoutPointCarac("intelligence", pointRestants)}
            retraitPointCarac={() => props.retraitPointCarac("intelligence")}>
            Intelligence
        </UneCarac>
    </>;

}//fin caracPerso

export default caracPerso;