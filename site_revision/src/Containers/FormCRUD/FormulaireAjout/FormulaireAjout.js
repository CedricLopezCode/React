import React, { Component } from 'react'; 
import classes from "./FormulaireAjout.module.css";
import Bouton from '../../../Components/Bouton/Bouton'; 

class FormulaireAjout extends Component{

    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: 0
    }

    render() {
        return <>
                <h2 style={{fontFamily: 'Sigmar One'}} className="text-primary text-center">Affichage du Formulaire d'ajout</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="titre">Titre du livre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="titre"
                            value={this.state.titreSaisi}
                            onChange={(event) => this.setState({titreSaisi: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="auteur"
                            value={this.state.auteurSaisi}
                            onChange={(event) => this.setState({auteurSaisi: event.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de pages</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="nbPages"
                            value={this.state.nbPagesSaisi}
                            onChange={(event) => this.setState({nbPagesSaisi: event.target.value})}
                        />
                    </div>
                    <Bouton typeBtn="btn-primary m-1" clic={this.validationFormHandle}>Valider</Bouton>
                </form>
        </>;
    }//fin render

    validationFormHandle = (event) => {
        event.preventDefault(); //Pour empecher le comportement par défaut qui est F5
        console.log("valide click");
        this.props.validation(this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
        console.log("livre add");
        this.setState({ titreSaisi: "", auteurSaisi: "", nbPagesSaisi: 0 });
        console.log("state remis à 0");
    }

}//fin FormulaireAjout

export default FormulaireAjout;