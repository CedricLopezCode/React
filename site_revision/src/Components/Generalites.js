import React from "react";
import Titre from "./Titre/Titre";

const generalites = (props) => {
    return <>
        <Titre>Généralités avec React</Titre>
        <h3>Constructeur automatique</h3>
        <h3>Component == affichage = fonction == sans state</h3>
        <h3>Container == Traitement dynamique = classe == avec State</h3>
        <h3>State == variable qui met à jour la page sans la recharger</h3>
        <h3>Principe d'immutabilité:</h3>
        <h3>Impossible de changer directement un state si la nouvelle valeur dépend de l'ancienne</h3>
        <h3>Il faut passer par  une copie du state avec de faire le setState</h3>
        <h3>render == Affichage</h3>
        <h3>componentDidMount s'exécute 1 fois au début après un premier render</h3>
        <h3>componentDidUpdate s'exécute en continu</h3> 
        <h3>AAAAAAAAAA</h3> 
    </>
};
//Une fonction renvoie du jsx
/*function app() { //== un composant
    //return <h1>App</h1>; 
    /*renvoie 1 seul élément donc <h1>App</h1>, <p>para</p> impossible...
    ...mais on peut contourner en renvoyant <div><h1>App</h1><p>para</p></div>...
    ...ou via un tableau...
    ...ou via les Fragments (!!! très récent) (avant c'etait avec les auxiliaires)...
    ...ou via les chevrons vides (!!! encore plus récent)*/
    //return <div><h1>App</h1><p>para div</p></div>;
    //return [<h1>App</h1>,<p>para tableau</p>];
    //return <React.Fragment><h1>App</h1><p>para fragment</p></React.Fragment>; //juste <Fragment></Fragment> si on import React{Fragment}
    //return <><h1>App</h1><p>para chevrons vides</p></>;
    
    //Possibilité de renvoyer un composant
    //return <monComposant/>
    /*return <PersonneFonction/>   
}
export default app;*/

export default generalites;