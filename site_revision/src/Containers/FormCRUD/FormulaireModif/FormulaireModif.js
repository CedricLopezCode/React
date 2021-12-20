import React, { Component } from 'react'; 
import Bouton from '../../../Components/Bouton/Bouton';

class FormulaireModif extends Component{

    state = {
        titreSaisi: this.props.titre,
        auteurSaisi: this.props.auteur,
        nbPagesSaisi: this.props.nbPages
    }
    /* 
    //Correction plus compliquée
    state = {
        titreSaisi: "",
        auteurSaisi: "",
        nbPagesSaisi: 0
    }

    componentDidMount = () => {
        this.setState({
            titreSaisi: this.props.titre,
            auteurSaisi: this.props.auteur,
            nbPagesSaisi: this.props.nbPages
        })
    }
*/
    render() {
        return <>
                <td>{this.props.id}</td>
                <td>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="titre"
                        value={this.state.titreSaisi}
                        onChange={(event) => this.setState({titreSaisi: event.target.value})}
                    />
                </td>
                <td>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="auteur"
                        value={this.state.auteurSaisi}
                        onChange={(event) => this.setState({auteurSaisi: event.target.value})}
                    />    
                </td>
                <td>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="nbPages"
                        value={this.state.nbPagesSaisi}
                        onChange={(event) => this.setState({nbPagesSaisi: event.target.value})}
                    />
                </td>
                <td colSpan= "2">
                    <Bouton typeBtn="btn-info btn-outline-dark" clic={this.validationFormHandle}>Valider</Bouton>  
                </td>
                
        </>;
    }//fin render

    validationFormHandle = (event) => {
        event.preventDefault(); //Pour empecher le comportement par défaut qui est F5
        console.log("valide click");
        this.props.modification(this.props.id, this.state.titreSaisi, this.state.auteurSaisi, this.state.nbPagesSaisi);
        console.log("livre modifie");
    }

}//fin FormulaireModif

export default FormulaireModif;