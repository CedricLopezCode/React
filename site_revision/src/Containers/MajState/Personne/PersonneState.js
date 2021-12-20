import React, { Component } from "react";
import AgePersonne from "./AgePersonne/AgePersonne";


class PersonneState extends Component{

    render(){

        const monStyle = { 
            backgroundColor: "darkblue", 
            fontSize : "15px",
        }
        this.props.sexe ? monStyle.color = "green" : monStyle.color = "red";
        return (
            <>
                <h2 className="monTitreState">Prénom: {this.props.nom}</h2>
                {this.props.children}
                <AgePersonne age={this.props.age}/>
                <div style={monStyle}>Sexe: {this.props.sexe ? "Homme" : "Femme"}</div> 
                <button onClick={this.props.clic}>Anniv</button>
            </>
        );
    }
}


export default PersonneState;