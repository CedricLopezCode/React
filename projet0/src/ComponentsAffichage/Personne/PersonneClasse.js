import React, { Component } from "react";
import AgePersonne from "./AgePersonne/AgePersonne";

class PersonneClasse extends Component{
    /*constructor(props){ //ancienne méthode. Plus besoin du constructeur depuis ES7
        super(props);
    }*/
    render(){
        return (
            <>
                <h1>Prénom: {this.props.nom}</h1>
                <AgePersonne age={this.props.age}/>
                <div>Sexe: {this.props.sexe}</div>
            </>
        );
    }
}


export default PersonneClasse;