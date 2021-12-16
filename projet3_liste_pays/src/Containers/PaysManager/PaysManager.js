import React, { Component } from 'react';
import Titre from "../../Components/Titre/Titre";
import Bouton from "../../Components/Bouton/Bouton";
import LesPays from './LesPays/LesPays';

class PaysManager extends Component{
    
    state = {
        nombrePays: 0,
        refresh: false,
        region : null,
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
                numPage= {this.state.numPage}
                refresh={this.state.refresh}
            />
            <div>{pagination}</div>
        </div>;
    }//fin render
    
    changRegionHandle = (regionSelec) => {
        console.log("change Region");
        this.refreshHandle();
        this.setState({
            region: regionSelec,
            numPage : 1
        });
        console.log(this.state.region);
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