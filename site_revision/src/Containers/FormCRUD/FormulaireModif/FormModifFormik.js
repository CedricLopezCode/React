import React, { Component } from 'react'; 
import Bouton from '../../../Components/Bouton/Bouton';
import { withFormik } from 'formik';

class FormModifFormik extends Component{

    render() {
        return <>
                <td>{this.props.id}</td>
                <td>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="titre"
                        name="titre"
                        value={this.props.values.titre}
                        onChange={this.props.handleChange}
                        onBlur={this.props.handleBlur}
                    />
                    {this.props.errors.titre && this.props.touched.titre
                        && < span style={{color: "red"}}>{this.props.errors.titre}</span>
                    }
                </td>
                <td>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="auteur"
                        name="auteur"
                        value={this.props.values.auteur}
                        onChange={this.props.handleChange}
                    /> 
                    {this.props.errors.auteur && this.props.touched.auteur
                        && < span style={{color: "red"}}>{this.props.errors.auteur}</span>
                    }   
                </td>
                <td>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="nbPages"
                        napme="nbPages"
                        value={this.props.values.nbPages}
                        onChange={this.props.handleChange}
                    />
                    {this.props.errors.nbPages && this.props.touched.nbPages
                        && < span style={{color: "red"}}>{this.props.errors.nbPages}</span>
                    }
                </td>
                <td colSpan= "2">
                    <Bouton typeBtn="btn-info btn-outline-dark" clic={this.props.handleSubmit}>Valider</Bouton>  
                </td>
                
        </>;
    }//fin render

}//fin FormModifFormik

export default withFormik({
    mapPropsToValues: (props) => ({
        id: props.id,
        titre: props.titre,
        auteur: props.auteur,
        nbPages: props.nbPages
    }),
    validate: values => {
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
    handleSubmit: (values, {props}) => {
        props.modification(values.id, values.titre, values.auteur, values.nbPages);
    }
})(FormModifFormik);