import React, { Component } from 'react';
import Titre from '../../Components/Titre/Titre';
import Personnage from './Personnage/Personnage';
import Armes from '../Armes/Armes';
import Bouton from '../../Components/Bouton/Bouton';

class CreateurPersonnage extends Component{
    
    state = {
        personnage : {
            id: 1,
            image: 2,
            force: 0,
            agilite: 0,
            intelligence: 0,
            armeActuelle: null
        },
        nbPointsMax: 7,
        nbImagesDifferentes: 3,
        armes: ["epee", "fleau", "arc", "hache"],
    } //fin state

    render(){
        return <div className="container">
            <Titre>Créateur de Personnage</Titre>
            <Personnage 
                {...this.state.personnage} 
                changImage = {this.changImageHandle} 
                imageSuivante = {this.imageSuivanteHandle} 
                imagePrecedente = {this.imagePrecedenteHandle}
                nbPointsMax = {this.state.nbPointsMax} 
                ajoutPointCarac=  {this.ajoutPointCaracHandle}
                retraitPointCarac = {this.retraitPointCaracHandle}
            />
            <Armes 
                listeArmes = {this.state.armes} 
                armeActuelle = {this.state.personnage.armeActuelle}
                changArme = {this.changArmeHandle}
            />
            <div children="row no-gutters">
                <Bouton typeBtn="btn-danger" clic={this.reinitialisationHandle} largeur="col-6">Reinitialiser</Bouton>
                <Bouton typeBtn="btn-success" clic={this.creerHandle} largeur="col-6">Créer</Bouton>
            </div>
        </div>;
    }// fin render

    boutonClique = () => {
        console.log("Bouton cliqué");
    }

    changImageHandle = (suivant) => {
        const nvPersonnage = {...this.state.personnage};
        suivant ? nvPersonnage.image++: nvPersonnage.image--;
        if (nvPersonnage.image < 1 ) {
            nvPersonnage.image = this.state.nbImagesDifferentes;
        }
        if (nvPersonnage.image > this.state.nbImagesDifferentes ) {
            nvPersonnage.image = 1;
        }
        this.setState({personnage: nvPersonnage});
    }// fin changImageHandle

    imageSuivanteHandle = () => {
        const nvPersonnage = {...this.state.personnage};
        nvPersonnage.image++;
        if (nvPersonnage.image > this.state.nbImagesDifferentes ) {
            nvPersonnage.image = 1;
        }
        this.setState({personnage: nvPersonnage});
    }// fin imageSuivanteHandle

    imagePrecedenteHandle = () => {
        const nvPersonnage = {...this.state.personnage};
        nvPersonnage.image--;
        if (nvPersonnage.image < 1 ) {
            nvPersonnage.image = this.state.nbImagesDifferentes;
        }
        this.setState({personnage: nvPersonnage});
    }// fin imagePrecedenteHandle

    ajoutPointCaracHandle = (nomStat, pointRestants) => {
        console.log(this.state.personnage[nomStat]);
        if (this.state.personnage[nomStat] >= 5 || pointRestants <= 0) {
            console.log("erreur ajout ");
        } else{
            const nvPersonnage = {...this.state.personnage};
            console.log("copie ");
            
            nvPersonnage[nomStat]++;
            console.log("ajout " + nomStat);
 
            this.setState({personnage: nvPersonnage});
            console.log("maj state ");
        }
    }// fin ajoutPointCaracHandle
    
    ajoutPointCaracHandleCorrection = (nomStat, pointRestants) => {
        this.setState((oldState, props) => {
            if (oldState.personnage[nomStat] >= 5 || pointRestants <= 0) return null;
            const nvPointCarac = oldState.personnage[nomStat]+1;
            const nvPersonnage = {...oldState.personnage};
            nvPersonnage[nomStat] = nvPointCarac;
            return {personnage: nvPersonnage};
        });

    }// fin ajoutPointCaracHandle

    retraitPointCaracHandle = (nomStat) => {
        console.log(this.state.personnage[nomStat]);
        if (this.state.personnage[nomStat] <= 0) {
            console.log("erreur retrait ");
        } else{
            const nvPersonnage = {...this.state.personnage};
            console.log("copie ");

            nvPersonnage[nomStat]--;
            console.log("retrait " + nomStat);

            this.setState({personnage: nvPersonnage});
            console.log("maj state ");
        }
    }// fin retraitPointCaracHandle

    changArmeHandle = (nomArme) => {
        console.log("change arme ");
        const nvPersonnage = {...this.state.personnage};
        nvPersonnage.armeActuelle = nomArme;
        this.setState({personnage: nvPersonnage});
        console.log("maj state ");
    }
    reinitialisationHandle = () => {
        console.log("debut reinit");
        /*const nvPersonnage = {...this.state.personnage};
        nvPersonnage.image = 1;
        nvPersonnage.force = 0;
        nvPersonnage.agilite = 0;
        nvPersonnage.intelligence = 0;
        nvPersonnage.armeActuelle = null;
        this.setState({personnage: nvPersonnage});*/
        this.setState({
            personnage : {
                id: 1,
                image: 1,
                force: 0,
                agilite: 0,
                intelligence: 0,
                armeActuelle: null
            },
            nbPointsMax: 7,
            nbImagesDifferentes: 3,
            armes: ["epee", "fleau", "arc", "hache"],
        });
        
        console.log("maj state reinit");
    }
    creerHandle = () => {
        console.log("debut creer");
        alert("Personnage Créé");
        console.log("fin creer");
    }
}

export default CreateurPersonnage;
