import React, { Component } from 'react'; //Rajouter le Component dans l'import Evite de le rajouter à chaque fois après
import "./App.css";
import Titre from './Components/Titre/Titre';
import Bouton from './Components/Bouton/Bouton';
import {BrowserRouter, Route, Switch} from "react-router-dom"; //NavLink aussis
import Navbar from './Components/NavBar/Navbar';
import NavBarbis from './Components/NavBar/NavBarbis';
import Erreur from './Components/Erreur/Erreur';
import Erreur404 from './Components/Erreur/Erreur404';
import Erreur500 from './Components/Erreur/Erreur500';
import LiensEtRoutage from './Components/LiensEtRoutage';
import TabEtBoucles from './Components/TabEtBoucles';
import AxiosRequete from './Containers/AxiosRequete';
import FormCRUD from './Containers/FormCRUD/FormCRUD';
import MajState from './Containers/MajState/MajState';
import Generalites from './Components/Generalites';
import MiseEnLigne from './Components/MiseEnLigne';

class App extends Component{
  render(){
    const contenu = <div>Contenu</div>;
    return (
      <BrowserRouter>
        <Navbar/>
        
        <Route path="/admin" exact render={() => <h1>Page d'administration</h1>}/>
        <Route path="/admin" component={NavBarbis}/> {/* une Navbar spécifique pour une page spécifique*/}

              {/* Affichage en fonction de l'url*/}
        <Switch> {/* !!! Faire attention aux pages sans exact*/}
          <Route path="/" exact render={() => <h1>Page d'acceuil</h1>}/> {/* render appelle une fonction*/}
          <Route path="/sansexact" component={contenu}/> {/* tout ce qui commence par /sansexact aura cette page ex: /sansexact/toto  */}
          {/* !!! peut créer des page avec du contenu en plus sans le vouloir !!*/}
          <Route path="/exact" exact component={contenu}/> {/* avec exact uniquement si c'est exactement cette adresse*/}
          <Route path="/render" exact render={() => <Titre>Titre</Titre>}/> {/* ===  (plus général)*/}
          <Route path="/component" component={contenu}/>
          <Route path="/avecparam/:id" exact render={(props) => <h1>Lien avec 1 param: {props.match.params.id}</h1>}/> {/* on met un param dans l'url*/}
          <Route path="/avecparam/:id/:deuxparam" exact render={(props) => <h1>Lien avec 2 params:  {props.match.params.id}  {props.match.params.deuxparam}</h1>}/> {/* on met 2 param dans l'url*/}
          <Route path="/returndirect/:id/" render={(props) => { return <h1>Lien avec return direct {props.match.params.id}</h1> }}/> 

          <Route path="/generalites" exact render={() => <Generalites/>}/> 
          <Route path="/liensEtRoutage" exact render={() => <LiensEtRoutage/>}/> 
          <Route path="/majState" exact render={() => <MajState/>}/> 
          <Route path="/tabetboucles" exact render={() => <TabEtBoucles/>}/> 
          <Route path="/axiosrequete/:id" exact render={(props) => <AxiosRequete nomPays={props.match.params.id}  {...props}/>}/> 
          <Route path="/formCRUD" exact render={() => <FormCRUD/>}/> 
          <Route path="/miseenligne" exact render={() => <MiseEnLigne/>}/> 

          <Route render={() => <Erreur><Erreur404/></Erreur>}/> {/* Bien mettre en dernier car switch dans l'ordre*/}
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;