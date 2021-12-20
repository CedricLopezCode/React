import React, { Component } from 'react'; 
import Bouton from '../../Components/Bouton/Bouton';
import MessageAlert from '../../Components/MessageAlert/MessageAlert';
import Titre from '../../Components/Titre/Titre';
import TableauLivres from './TableauLivres/TableauLivres';

class FormCRUD extends Component{
  state = {
    modeAjout:false,
    modeModif:false,
    typeAlert: ""
  }  

  render() {
    return <div className="container text-white">
        <Titre>Page listants les livres de ma Bibliothèque</Titre>
        {this.state.typeAlert !== "" && <MessageAlert typeAlert={this.state.typeAlert}/>}
        <TableauLivres 
          modeAjout={this.state.modeAjout} 
          fermerFormAjout={this.changBoutonAjoutHandle} 
          changFormModif={this.changBoutonModifHandle}
          changAlert={this.changAlert}
        />
        <Bouton 
          typeBtn="btn-success" 
          largeur="w-100" 
          clic={this.changBoutonAjoutHandle}
        >{!this.state.modeAjout ? "Ajouter" : "Fermer l'ajout"}</Bouton>
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

}//fin FormCRUD


export default FormCRUD;
