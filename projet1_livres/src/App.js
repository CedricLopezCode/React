import React, { Component } from 'react';
import { render } from 'react-dom';
import BoutonGenerique from './Components/boutonGenerique';
import TitrePage from './Components/TitrePage/TitrePage';

class App extends Component{
  render() {
    return <>
      <div className="container">
        <TitrePage>Page listants les livres de ma Bibliothèque</TitrePage>
        <div>Liste livres</div>
        <BoutonGenerique onClick={(event) => this.addLivreHandler(event, "add")}>Ajouter</BoutonGenerique>
        <BoutonGenerique onClick={(event) => this.updateLivreHandler(event, "update")}>Modifier</BoutonGenerique>
        <BoutonGenerique onClick={(event) => this.deleteLivreHandler(event, "delete")}>Supprimmer</BoutonGenerique>
      </div>
    </>;
  }//fin render

  addLivreHandler = (event, action) => {console.log("Add" + action);}
  updateLivreHandler = (event, action) => {console.log("update" + action);}
  deleteLivreHandler = (event, action) => {console.log("delete" + action);}

}//fin App
/*ajouterLivre(){
  console.log("Ajouter Livre cliqué");
}*/

export default App;
