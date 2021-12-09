import React, { Component } from 'react';
import Titre from './Components/Titre/Titre';
import Bouton from './Components/Bouton/Bouton';

class App extends Component{
  render(){
    return <div className="container">
      <Titre>Titre de la page</Titre>
      <div>Bootsrap déjà inclus</div>
      <Bouton typeBtn="btn-primary" onClic={this.boutonClique} largeur="w-50">Texte Bouton</Bouton>
    </div>;
  }
  boutonClique = () => {
    console.log("Bouton cliqué");
  }
}

export default App;