import React from "react";
import BoutonCor from "../../../Components/Boutons/BoutonsCor";

const unLivre = (props) => ( <>
        <td>{props.id}</td>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages} pages</td>
        <td><BoutonCor typeBtn="btn-warning" clic={props.modification}>Modifier</BoutonCor></td>
        <td><BoutonCor typeBtn="btn-danger" clic={props.suppression}>Supprimmer</BoutonCor></td>
    </>);


export default unLivre;