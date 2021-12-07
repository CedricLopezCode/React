import React, { Component } from 'react'; 
import BoutonGenerique from './Components/Boutons/BoutonGenerique';
import BoutonCor from './Components/Boutons/BoutonsCor';
import MessageAlert from './Components/MessageAlert/MessageAlert';
import TitrePage from './Components/TitrePage/TitrePage';
import TableauLivres from './Containers/TableauLivres.js/TableauLivres';

class App extends Component{
  state = {
    modeAjout:false,
    modeModif:false,
    typeAlert: ""
  }  

  render() {
    //let textBouton = this.state.modeAjout ? "Fermer l'ajout" : "Ajouter";
    return <div className="container">
        <TitrePage>Page listants les livres de ma Bibliothèque</TitrePage>
        {this.state.typeAlert !== "" && <MessageAlert typeAlert={this.state.typeAlert}/>}
        <TableauLivres 
          modeAjout={this.state.modeAjout} 
          fermerFormAjout={this.changBoutonAjoutHandle} 
          changFormModif={this.changBoutonModifHandle}
          changAlert={this.changAlert}
        />
        <BoutonCor 
          typeBtn="btn-success" 
          largeur="w-100" 
          clic={this.changBoutonAjoutHandle}
        >{!this.state.modeAjout ? "Ajouter" : "Fermer l'ajout"}</BoutonCor>
      </div>;
  }//fin render
  
  changBoutonAjoutHandle = () => { //Ma méthode VS...
    console.log("change bouton Ajout")
    const changModeAjout = !this.state.modeAjout;
    this.setState({modeAjout: changModeAjout});
  }
  changBoutonModifHandle = () => { //...VS la sienne
    console.log("change bouton Modif")
    this.setState((oldState, props) => {return {modeModif: !oldState.modeModif}});
  }
  changAlert = (typeAlert) => {
    console.log("change alert")
    this.setState((oldState, props) => {return {typeAlert: typeAlert}});
    setTimeout(() =>  this.setState({typeAlert: ""}) , 5000);
  }

}//fin App


export default App;
