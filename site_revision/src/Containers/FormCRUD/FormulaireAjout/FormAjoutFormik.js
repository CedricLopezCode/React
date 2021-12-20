import React, { Component } from 'react'; 
import classes from "./FormulaireAjout.module.css";
import Bouton from '../../../Components/Bouton/Bouton'; 
import {withFormik} from "formik";

class FormAjoutFormik extends Component{

    // plus de state avecFormik

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
                            name="titre" //uniquement pour Formik
                            value={this.props.values.titre}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur} //permet de savoir si on a touché le champs ou pas //props touched
                        />
                        {this.props.errors.titre && this.props.touched.titre
                            && < span style={{color: "red"}}>{this.props.errors.titre}</span>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="auteur"
                            name="auteur" //uniquement pour Formik
                            value={this.props.values.auteur}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur} //permet de savoir si on a touché le champs ou pas //props touched
                        />
                        {this.props.errors.auteur && this.props.touched.auteur
                            && < span style={{color: "red"}}>{this.props.errors.auteur}</span>
                        }
                    </div>
                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de pages</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            id="nbPages"
                            name="nbPages" //uniquement pour Formik
                            value={this.props.values.nbPages}
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur} //permet de savoir si on a touché le champs ou pas //props touched
                        />
                        {this.props.errors.nbPages && this.props.touched.nbPages
                            && < span style={{color: "red"}}>{this.props.errors.nbPages}</span>
                        }
                    </div>
                    <Bouton typeBtn="btn-primary m-1" clic={this.props.handleSubmit}>Valider</Bouton>
                </form>
        </>;
    }//fin render
    
    //validationFormHandle remplacé par formik

}//fin FormAjoutFormik

export default withFormik({
    mapPropsToValues: () => ({ //Liaision entre nos valeurs et ce que va utiliser Formik //Remplace les states et le handleValidation
        titre: "",
        auteur: "",
        nbPages: 0
    }),
    validate: values => { //permet de faire des vérifications notamment avec la props errors
        const errors = {};

        if(values.titre.length < 3) {
            errors.titre = "Le titre est trop court";
        }else if(values.titre.length > 50) {
            errors.titre = "Le titre est trop long";
        }
        if(values.auteur.length < 5) {
            errors.auteur = "Le nom d'auteur est trop court";
        }else if(values.auteur.length > 30) {
            errors.auteur = "Le nom d'auteur est trop long";
        }
        if(values.nbPages < 30) {
            errors.nbPages = "Pas assez de pages";
        }else if(values.nbPages > 500) {
            errors.nbPages = "Trop de pages";
        }

        return errors;
    },
    handleSubmit : (values, {props}) => { //lance l'action quand on soumet le formulaire
        props.validation(values.titre, values.auteur, values.nbPages); //pas de this //lecture du mapPropsToValues
    }
})(FormAjoutFormik); 