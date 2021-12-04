import React, { Component } from "react";
import AgePersonne from "./AgePersonne/AgePersonne";
import "./PersonneGeneral.css"; //impotes des classes générales

class PersonneClasse extends Component{
    /*constructor(props){ //ancienne méthode. Plus besoin du constructeur depuis ES7
        super(props);
    }*/
    render(){
            //CSS dynamique
        /*return (
            <>
                <h1 className="monTitre">Prénom: {this.props.nom}</h1>
                <AgePersonne age={this.props.age}/>
                <div style={{backgroundColor: "blue", color: "turquoise"}}>Sexe: {this.props.sexe}</div> 
            </>
        );*/
        const monStyle = { //pour faire plus propre via variable 
            backgroundColor: "blue", 
            color: "turquoise"
        }
        /*const style = {
            backgroundColor: "white",
            color: "turquoise",
            fontSize = "15px",
            fontWeight: "bold", ???
	        fontStyle: "italic", ??? 
            font: "inherit",
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer",
            width: "100%",
            height: "100%",
        }*/
        monStyle.fontSize = "15px"; //on peut modifier l'objet
        monStyle.fontWeight = "bold";
        monStyle.fontStyle = "italic";
        return (
            <>
                <h1 className="monTitre">Prénom: {this.props.nom}</h1>
                <AgePersonne age={this.props.age}/>
                <div style={monStyle}>Sexe: {this.props.sexe}</div> 
            </>
        );
    }
}


export default PersonneClasse;