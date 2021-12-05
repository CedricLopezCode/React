
import PersonneFonction from "./ComponentsAffichage/Personne/PersonneFonction";
import PersonneClasse from "./ComponentsAffichage/Personne/PersonneClasse";
import PersonneState from "./ComponentsAffichage/Personne/PersonneState";
import HorlogeLive from "./ContainersClassState/Horloge/HorlogeLive";
import AgePersonne from "./ComponentsAffichage/Personne/AgePersonne/AgePersonne";
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

    state = {
        personnes: [
            {id: 1, nom: "Cédric", age: 28, sexe: true},
            {id: 4, nom: "Céline", age: 19, sexe: false},
            {id: 5, nom: "Jean", age: 100, sexe: false},
            {id: 8, nom: "Toto", age: 1, sexe: true},
        ]
    }

    render(){
        //return <h1>Class sans préciser Component dans l'import</h1>;
        return <>
            <HorlogeLive/>
            <this.fonctionAnonyme/>
            
            <PersonneClasse nom = "Cédric" age = "28" sexe = "Homme"/>
            <PersonneFonction nom = "Céline" age = "19" sexe = "Fille"/>
            <PersonneFonction nom = "Jean" age = "100" sexe = "Femme"/>

            <button onClick={this.ditBonjour}>Sans info == Générique</button> 
            <button onClick={() => this.ditBonjourPrenom("Cédric")}>Avec infos</button>
            <button onClick={(event) => this.ditBonjourEvent(event, "Cédric")}>Avec Event</button>
            <button onClick={(event) => this.anniversairePapaHandler()}>Anniv Papa</button>
            <button onClick={(event) => this.anniversaireTousBoucleHandler()}>Anniv Tous Boucle</button>
            <button onClick={(event) => this.anniversaireTousMapHandler()}>Anniv Tous Map</button>

            <PersonneState nom = {this.state.personnes[0].nom} age = {this.state.personnes[0].age} sexe = {this.state.personnes[0].sexe}/>
            <PersonneState {...this.state.personnes[1]}/> 
    
            <PersonneState {...this.state.personnes[2]} clic={this.anniversairePapaHandler}/> 

            <PersonneState {...this.state.personnes[0]} clic={this.anniversaireNumHandler.bind(this,0)}/> 
            <PersonneState {...this.state.personnes[1]} clic={() => this.anniversaireNumHandler(1)}/> 
            
            <PersonneState {...this.state.personnes[2]}>
                Le children en texte
            </PersonneState>
            <PersonneState {...this.state.personnes[2]}>
                Le children age en component  <AgePersonne age={this.state.personnes[2].age}/>
            </PersonneState>

            {this.state.personnes.map((unePersonne, index) => {console.log("Tous les afficher d'un coup");
                console.log("Mais quand on fait une liste avec map il faut rajouter une valeur unique key");
                return <PersonneState key={index} {...unePersonne} clic={() => this.anniversaireNumHandler(index)}/>;
            })}
            {this.state.personnes.map(unePersonne => {
                console.log("key souvent avec id");
                return <PersonneState key={unePersonne.id} {...unePersonne} clic={() => this.anniversaireIdHandler(unePersonne.id)}/>;
            })}
        </>;
        //<PersonneState {...this.state.personnes[0]}/>  envoie TOUTES les propriétés
    }

    fonctionAnonyme = () => {
        console.log("Pour récupérer les attributs donc le state: ");
        console.log(this.state.personnes);
        return <p>Fonction Annonyme Pour récupérer les attributs et donc le state avec les infos</p>
    }

    ditBonjour(){alert("Coucou");}
    ditBonjourPrenom(prenom){alert("Coucou " + prenom);}
    ditBonjourEvent(event, prenom){
        alert("Coucou " + prenom);
        console.log(event);
        console.log(event.target);
    }
    anniversairePapaHandler = () => { //Handler à la fin == convention pour préciser que cette fontion est liée à un évènement 
        // this.state.personnes[2].age++; //mauvais car modifie directement la valeur du state sans le setstate donc pas mis à jour
        //const newPersonnePointeur = this.state.personnes; //mauvais car copie seulement du pointeur
        const newPersonneSlice = this.state.personnes.slice(); //vrai copie
        newPersonneSlice[2].age++;
        this.setState({personnes:newPersonneSlice}); 
    }
    anniversaireNumHandler = (numPersonne) => {
        const newPersonneSpread = {...this.state.personnes[numPersonne]};// opérateur spread : équivalent à slice avec ES7
        newPersonneSpread.age++;
        const newPersonnesTab = [...this.state.personnes];
        newPersonnesTab[numPersonne] = newPersonneSpread;
        this.setState({personnes:newPersonnesTab}); 
    }
    anniversaireIdHandler = (id) => {
        const numCaseTabPersonne = this.state.personnes.findIndex(element => {
            return element.id === id;
        });
        const newPersonneSpread = {...this.state.personnes[numCaseTabPersonne]};
        newPersonneSpread.age++;
        const newPersonnesTab = [...this.state.personnes];
        newPersonnesTab[numCaseTabPersonne] = newPersonneSpread;
        this.setState({personnes:newPersonnesTab}); 
    }
    anniversaireTousBoucleHandler = () => {
        const newPersonnesES7 = [...this.state.personnes];
        for(let i=0; i<newPersonnesES7.length; i++){newPersonnesES7[i].age++;}
        this.setState({personnes: newPersonnesES7});
    }
    anniversaireTousMapHandler = () => {
        const newPersonnesMap = this.state.personnes.map(personne => { //via map
            return {
                nom: personne.nom,
                age: personne.age+1,
                sexe: personne.sexe
            }
        }); 
        this.setState({personnes: newPersonnesMap});
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