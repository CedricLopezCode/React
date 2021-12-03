import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //sans extension uniquement pour js

//render permet d'aller dans un élément
ReactDOM.render("render permet d'aller dans un élément", document.getElementById("root")); //la class root qui est la racine dans le body index.html
ReactDOM.render(<h1>On peut aussi mettre des balises</h1>, document.getElementById("root")); //balise comme html mais en fait c'est du JSX
ReactDOM.render(React.createElement("h1", null, "en Réalité"), document.getElementById("root")); //Ce que fait la ligne au dessus

ReactDOM.render(<h1 className="test">className et pas class !!!</h1>, document.getElementById("root")); //className et pas class !!!

let viaVariable = <h1>Passage par une Variable</h1>;
ReactDOM.render(viaVariable, document.getElementById("root"));

const viaFonction = PassageParUneFonction();
ReactDOM.render(viaFonction, document.getElementById("root"));

const viaFonctionComposant = <PassageParUneFonction/>;
ReactDOM.render(viaFonctionComposant, document.getElementById("root"));

ReactDOM.render(<PassageParUneFonction/>, document.getElementById("root"));
ReactDOM.render(<App/>, document.getElementById("root"));

function PassageParUneFonction() { //== un composant
    return <h1>Retour de la fonction composant simple</h1>;
}



