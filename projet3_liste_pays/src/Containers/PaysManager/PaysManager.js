import React, { Component } from 'react';
import Titre from "../../Components/Titre/Titre";
import Bouton from "../../Components/Bouton/Bouton";
import LesPays from './LesPays/LesPays';
import Pagination from "../../Components/Pagination/Pagination";

class PaysManager extends Component{
    
    state = {
        nombrePays: 0,
        refresh: false,
        region : null,
        numPage : 1,
    }

    render() {
        return <>
            <Titre>Liste des Pays du Monde</Titre>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("All")}
                selected= {this.state.region === "All" || this.state.region == null}
            >
                Tous
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Europe")}
                selected= {this.state.region === "Europe"}
            >
                Europe
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Africa")}
                selected= {this.state.region === "Africa"}
            >
                Afrique
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Asia")}
                selected= {this.state.region === "Asia"}
            >
                Asie
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Americas")}
                selected= {this.state.region === "Americas"}
            >
                Amérique
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Oceania")}
                selected= {this.state.region === "Oceania"}
            >
                Océanie
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Antarctic")}
                selected= {this.state.region === "Antarctic"}
            >
                Antarctique
            </Bouton>
            <span>Nombre de Pays: <span className="badge bg-success">{this.state.nombrePays}</span></span>
            <LesPays 
                majNbPays={this.majNbPays} 
                region={this.state.region}
                refresh={this.state.refresh}
            />
            <Pagination />
        </>;
    }//fin render
    
    changRegionHandle = (regionSelec) => {
        console.log("change Region");
        this.refreshHandle();
        this.setState({region: regionSelec});
        console.log(this.state.region);
    }
    boutonClique = () => {
        console.log("Bouton cliqué");
    }
    majNbPays = (nbPays) => {
        this.setState({nombrePays: nbPays});
    }
    refreshHandle = () => {
        this.setState((oldState) => {
            return {refresh: !oldState.refresh};
          });
      }
}//fin PaysManager

export default PaysManager;