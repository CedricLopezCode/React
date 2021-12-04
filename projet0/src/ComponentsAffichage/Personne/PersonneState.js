import React, { Component } from "react";
import AgePersonne from "./AgePersonne/AgePersonne";


class PersonneState extends Component{

    render(){

        const monStyle = { 
            backgroundColor: "darkyellow", 
            fontSize : "15px",
        }
        this.props.sexe ? monStyle.color = "green" : monStyle.color = "red";
        return (
            <>
                <h1 className="monTitreState">Prénom: {this.props.nom}</h1>
                <AgePersonne age={this.props.age}/>
                <div style={monStyle}>Sexe: {this.props.sexe ? "Homme" : "Femme"}</div> 
            </>
        );
    }
}


export default PersonneState;