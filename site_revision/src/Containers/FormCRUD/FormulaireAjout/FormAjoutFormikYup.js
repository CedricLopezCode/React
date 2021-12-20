import React, { Component } from 'react'; 
import classes from "./FormulaireAjout.module.css";
import Bouton from '../../../Components/Bouton/Bouton'; 
import {withFormik} from "formik";
import * as Yup from "yup";

class FormAjoutFormikYup extends Component{

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
    

}//fin FormAjoutFormikYup

export default withFormik({
    mapPropsToValues: () => ({
        titre: "",
        auteur: "",
        nbPages: 0
    }),
    validationSchema: Yup.object().shape({ // et plus juste validation comme avec formik seul
        titre: Yup.string()
            .min(3, "Le titre est trop court")
            .max(50, "Le titre est trop long")
            .required("Le titre est obligatoire"),
        auteur: Yup.string()
            .min(5, "Le nom d'auteur est trop court")
            .max(30, "Le nom d'auteur est trop long")
            .required("Le nom d'auteur est obligatoire"),
        nbPages: Yup.number()
            .moreThan(30, "Pas assez de pages")
            .lessThan(500, "Trop de pages")
            .required("Le nombre de pages est obligatoire"),
    }),
    handleSubmit : (values, {props}) => { 
        props.validation(values.titre, values.auteur, values.nbPages);
    }
})(FormAjoutFormikYup); 
