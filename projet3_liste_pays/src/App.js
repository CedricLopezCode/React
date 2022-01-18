import React, { Component } from 'react';
import PaysManager from './Containers/PaysManager/PaysManager';
import DetailsPays from './Containers/DetailsPays/DetailsPays';
import DetailsPaysCor from './Containers/DetailsPays/DetailsPaysCor';
import {BrowserRouter, Route, Switch} from "react-router-dom"; //Link & NavLink aussi
import Navbar from './Components/Navbar/Navbar';
import NavBarbis from './Components/Navbar/NavBarbis';
import Erreur from './Components/Erreur/Erreur';
import Erreur404 from "./Components/Erreur/Erreur404";
import Erreur500 from "./Components/Erreur/Erreur500";
import "./App.css";

class App extends Component{
  render(){
    return (
      <BrowserRouter basename="/react/projet3/">

        <Navbar/>
        <Switch> {/* !!! Faire attention aux pages sans exact*/}
          <Route path="/admin" exact render={() => <h1>Page d'administration</h1>}/>
          <Route path="/admin/navbar" component={NavBarbis}/> {/* une Navbar spécifique pour une page spécifique*/}

          <Route path="/" exact render={() => <h1>Page d'acceuil</h1>}/> 
          <Route path="/pays" exact component={PaysManager}/> 
          <Route path="/pays/:id" render={(props) => <DetailsPays nomPays={props.match.params.id} {...props}/>} />
          <Route path="/payscor/:id" render={(props) => <DetailsPaysCor nomPays={props.match.params.id} {...props}/>} />

          <Route render={() => <Erreur><Erreur404/></Erreur>}/> {/* Bien mettre en dernier car switch dans l'ordre*/}
        </Switch>

      </BrowserRouter>
    );
  }
  
}

export default App;