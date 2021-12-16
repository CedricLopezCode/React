import React, { Component } from 'react';
import PaysManager from './Containers/PaysManager/PaysManager';
import {BrowserRouter, Route , Link} from "react-router-dom"; //NavLink aussis
import Bouton from './Components/Bouton/Bouton';
import Navbar from './Components/Navbar/Navbar';
import NavBarbis from './Components/Navbar/NavBarbis';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Navbar/>
        <Route path="/admin" exact render={() => <h1>Page d'administration</h1>}/>
        <Route path="/admin" component={NavBarbis}/> {/* une Navbar spécifique pour une page spécifique*/}
                {/* Liens  */} 
            {/* Normal:  mais plus Single Page Application car rechargement de la page à chaque cliquage de lien...*/} 
        <a href="/" className="mx-5">Page d'accueil Lien Standard</a>
        <a href="/pays" className="mx-5">Page des pays Lien Standard</a>
            {/* Link  juste maj*/} 
        <Link to="/" className="mx-5">Page d'accueil Link</Link>
        <Link to="/pays" className="mx-5">Page des pays Link</Link>

              {/* Affichage en fonction de l'url*/}
        <Route path="/" exact render={() => <h1>Page d'acceuil</h1>}/> {/* render appelle une fonction*/}
        <Route path="/" component={PaysManager}/> {/* tout ce qui commence par / aura cette page ex: /toto*/}
        {/* !!! peut créer des page avec du contenu en plus sans le vouloir !!*/}
        <Route path="/exact" exact component={PaysManager}/> {/* avec exact uniquement si c'est exactement cette adresse*/}
        <Route path="/render" exact render={() => <PaysManager/>}/> {/* ===  (plus général)*/}
        <Route path="/component" component={PaysManager}/> {/* uniquement si c'est exactement cette adresse*/}

      </BrowserRouter>
    );
  }
  
}

export default App;