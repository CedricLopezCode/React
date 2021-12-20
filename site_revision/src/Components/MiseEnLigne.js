import React from "react";
import { BrowserRouter } from "react-router-dom";
import Titre from "./Titre/Titre";

const miseEnLigne = (props) => {
    return <>
        <Titre>Mise en ligne</Titre>
        <h3>package.json rajouter "homepage": "https://www.monadresse.com/react/nomprojet",</h3> 
        <h3>app.js: BrowserRouter basename="react/nomprojet/" (ce qu'il y a après le nom de domaine)</h3> 
        <h3>npm run build</h3> 
        <h3>dans public creer .htaccess </h3> 
        <h3>Faire un copier/coller du contenu</h3> 
        <h3>l8 mettre le bon sous-dossier correspondant à ce site</h3> 
        <h3>permet de rediriger vers index peut importe ou on est dessus</h3> 
        <h3>AAAAAAAAAA</h3> 
        <h3>AAAAAAAAAA</h3> 
        <h3>AAAAAAAAAA</h3> 
    </>
};


export default miseEnLigne;