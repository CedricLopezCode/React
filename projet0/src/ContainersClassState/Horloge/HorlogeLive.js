import React, { Component } from "react";

class HorlogeLive extends Component{
    /*constructor(props){//facultatif
        super(props);
        this.state = {date: new Date()};
    }*/
    state = {
        date: new Date(),
        compteur: 1,
    }
    auChargement = new Date().toLocaleTimeString();

    tick = () => {
       /* this.setState({
            date: new Date(),
            compteur: this.state.compteur + 1  //++ ne marche pas   
        });*/
        //Mais asynchrone donc comme ça dépend de sa valeur précédente on préfère faire comme ça:
        this.setState((oldState,props) => { //fonction de rappel
            return{
                date: new Date(),
                compteur: oldState.compteur + 1
            }     
        });
    }

    componentDidMount(){ //juste après le  constructeur
        console.log("Composant monté");
        //setInterval(() => console.log("tick"), 1000); //timer en JS
        this.timerID = setInterval(() =>  this.tick() , 1000);
        
    }



    render(){ // == affichage
        console.log("Composant affiché");
        return <>
            <h2>Heure au moment du rafraichissement: {this.auChargement}</h2>
            <h2>Heure en direct: ___________________ {this.state.date.toLocaleTimeString()}</h2>
            <h2>Compteur: _______________________ {this.state.compteur}</h2>
        </>;
    }

    componentWillUnmount(){ // s'exécute juste avant le démontage
        clearInterval(this.timerID); //permet de supprimer le timer
    }
}

export default HorlogeLive;