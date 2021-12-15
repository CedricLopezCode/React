import React, { Component } from 'react';
import axios from "axios";
import UnPerso from './UnPerso/UnPerso';

class ListePersos extends Component{
    
    state = {
        loading: false,
        listePerso: null
    }

    componentDidMount(){
        console.log("componentDidMount");
        this.recupData();
    }

    componentDidUpdate(oldProps, oldState){
        console.log("componentDidUpdate");
        if (oldProps.refresh !== this.props.refresh) {
            this.recupData();
             
        }
    }

    render() {
        return <>
            {this.state.loading && <div> chargememnt en cours</div>}
            {!this.state.loading && this.state.listePerso &&
                <div className="row no-gutters">
                    {this.state.listePerso.map(monPerso => {
                        console.log(monPerso);
                        return <div className = "col-6 border border-dark p-2 rounded">
                            <UnPerso key={monPerso.perso.id}
                                {...monPerso.perso}
                                pseudo= {monPerso.pseudo}
                            />
                        </div>
                    })}
                </div>
            }
        </>;
    }//fin render

    recupData = () => {
        this.setState({loading: true});
        axios.get("https://projet2-createurpersonnage-default-rtdb.europe-west1.firebasedatabase.app/listepersonnages.json")
            .then(response => {
                console.log("then");
                const listePersosRecup = Object.values(response.data);
                console.log(listePersosRecup);
                this.setState({
                    listePerso: listePersosRecup,
                    loading: false,
                });
                console.log(this.state);
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            })
    }

}//fin ListePersos

export default ListePersos;