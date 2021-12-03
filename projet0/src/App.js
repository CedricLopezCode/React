
import PersonneFonction from "./ComponentsAffichage/Personne/PersonneFonction";
import PersonneClasse from "./ComponentsAffichage/Personne/PersonneClasse";
import HorlogeLive from "./ContainersClassState/Horloge/HorlogeLive";
import "./App.css";

//import React from 'react';

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


//Une Class

import React from 'react';
class App extends React.Component {
    render(){
        //return <h1>Class sans préciser Component dans l'import</h1>;
        return <>
            <HorlogeLive/>
            <PersonneFonction nom="Cédric" age="28" sexe="Homme"/>
            <PersonneFonction nom="Céline" age="19" sexe="Fille"/>
            <PersonneFonction nom="Jean" age="100" sexe="Femme"/>
            <PersonneClasse nom="Cédric" age="28" sexe="Homme"/>
        </>;
    }
}
export default App;

/*
import React, {Component} from 'react'; //Rajouter le Component dans l'import...
class App extends Component { //...Evite de le rajouter à chaque fois après
    render(){
        return <h1>Class en précisant Component dans l'import</h1>;
    }
}
export default App;
*/

function monComposant(){
    return (<><h1>MonComposant</h1><p>para chevrons vides</p></>);
}