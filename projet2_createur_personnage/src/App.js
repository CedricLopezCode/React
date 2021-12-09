import React, { Component } from 'react';
import Titre from './Components/Titre/Titre';
import Personnage from './Containers/Personnage/Personnage';
import Armes from './Containers/Armes/Armes';
import Bouton from './Components/Bouton/Bouton';

class App extends Component{
  render(){
    return <div className="container">
      <Titre>Créateur de Personnage</Titre>
      <Personnage/>
      <Armes/>
      <Bouton typeBtn="btn-danger">Reinitialiser</Bouton>
      <Bouton typeBtn="btn-success">Créer</Bouton>
    </div>;
  }
}

export default App;
