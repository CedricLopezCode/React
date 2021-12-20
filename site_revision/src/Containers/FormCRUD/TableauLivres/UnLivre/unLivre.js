import React from "react";
import Bouton from "../../../../Components/Bouton/Bouton";

const unLivre = (props) => ( <>
        <td>{props.id}</td>
        <td>{props.titre}</td>
        <td>{props.auteur}</td>
        <td>{props.nbPages} pages</td>
        <td><Bouton typeBtn="btn-warning" clic={props.modification}>Modifier</Bouton></td>
        <td><Bouton typeBtn="btn-danger" clic={props.suppression}>Supprimmer</Bouton></td>
    </>);


export default unLivre;