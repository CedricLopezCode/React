import React, { Component } from 'react'; 
import Bouton from '../../../Components/Bouton/Bouton';
import { withFormik } from 'formik';
import * as Yup from "yup";

class FormModifFormikYup extends Component{

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

}//fin FormModifFormikYup

export default withFormik({
    mapPropsToValues: (props) => ({
        id: props.id,
        titre: props.titre,
        auteur: props.auteur,
        nbPages: props.nbPages
    }),
    validationSchema: Yup.object().shape({
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
            .required("Le nombre de pages est obligatoire")
    }),
    handleSubmit: (values, {props}) => {
        props.modification(values.id, values.titre, values.auteur, values.nbPages);
    }
})(FormModifFormikYup);