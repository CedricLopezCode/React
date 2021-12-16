import React, { Component } from 'react';
import Titre from "../../Components/Titre/Titre";
import Bouton from "../../Components/Bouton/Bouton";
import LesPays from './LesPays/LesPays';

class PaysManager extends Component{
    
    state = {
        nombrePays: 0,
        refresh: false,
        regionSelec : null,
        numPage : 1,
    }
    
    render() {
        const nombrePaysParPage = 10;
        let pagination = [];
        if(this.state.nombrePays > 0){
            let nbPage = 0;
            this.state.nombrePays % 10 === 0 ?
                nbPage = this.state.nombrePays/nombrePaysParPage :
                nbPage = (this.state.nombrePays/nombrePaysParPage)+1 ;

            for(let i = 1; i <= nbPage; i++){
                pagination.push(
                    <Bouton key={i}
                        typeBtn="btn-info" 
                        clic={() => this.changPageHandle(i)}
                        selected= {this.state.numPage === i}
                    >
                        {i}
                    </Bouton>
                );
            }
        }

        return <div className="container">
            <Titre>Liste des Pays du Monde</Titre>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("All")}
                selected= {this.state.regionSelec === "All" || this.state.regionSelec == null}
            >
                Tous
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Europe")}
                selected= {this.state.regionSelec === "Europe"}
            >
                Europe
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Africa")}
                selected= {this.state.regionSelec === "Africa"}
            >
                Afrique
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Asia")}
                selected= {this.state.regionSelec === "Asia"}
            >
                Asie
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Americas")}
                selected= {this.state.regionSelec === "Americas"}
            >
                Amérique
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Oceania")}
                selected= {this.state.regionSelec === "Oceania"}
            >
                Océanie
            </Bouton>
            <Bouton 
                typeBtn="btn-info" 
                clic={() => this.changRegionHandle("Antarctic")}
                selected= {this.state.regionSelec === "Antarctic"}
            >
                Antarctique
            </Bouton>
            <span>Nombre de Pays: <span className="badge bg-success">{this.state.nombrePays}</span></span>
            <LesPays 
                majNbPays={this.majNbPays} 
                regionSelec={this.state.regionSelec}
                numPage= {this.state.numPage}
                refresh={this.state.refresh}
                {...this.props}
            />
            <div>{pagination}</div>
        </div>;
    }//fin render
    
    changRegionHandle = (regionSelec) => {
        console.log("change Region");
        this.refreshHandle();
        this.setState({
            regionSelec: regionSelec,
            numPage : 1
        });
        console.log(this.state.regionSelec);
    }
    boutonClique = () => {
        console.log("Bouton cliqué");
    }
    majNbPays = (nbPays) => {
        this.setState({nombrePays: nbPays});
    }
    changPageHandle = (numPage) => {
        this.setState({numPage: numPage});
    }
    refreshHandle = () => {
    this.setState((oldState) => {
        return {refresh: !oldState.refresh};
        });
    }
}//fin PaysManager

export default PaysManager;