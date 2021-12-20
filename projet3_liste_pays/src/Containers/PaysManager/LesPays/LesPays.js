import React, { Component } from 'react';
import UnPays from './UnPays/UnPays';
import axios from "axios";


class LesPays extends Component{
    
    state = {
        listePays: null,
        loading: false,
    }
    
    componentDidMount(){
        console.log("componentDidMount");
        this.recupData();
        
    }

    componentDidUpdate(oldProps, oldState){
        console.log("componentDidUpdate");
        if (oldProps.refresh !== this.props.refresh) {
            this.recupData(this.props.regionSelec);
            console.log("componentDidUpdate ok");
        }
    }

    render() {
        let listePaysReduite = null;
        let listePays = null;
        let debut = 0;
        let fin = 0;
        if(!this.state.loading && this.state.listePays){
            debut = (this.props.numPage-1) * 10;
            fin = (this.props.numPage * 10);
            listePaysReduite = this.state.listePays.slice(debut, fin);
            listePays = listePaysReduite.map(cePays => { 
                return <UnPays key={cePays.name} {...cePays} {...this.props}/> //les props pour avoir le match donc l'url
            })
        }
        
        return <>
            {this.state.loading && <div>Cargement en cours</div>}
            {!this.state.loading && this.state.listePays &&
                <div className="row no-gutters">
                    {listePays}
                </div>
            }
        </>;
    }//fin render

    recupData = (regionSelec) => {
        this.setState({loading: true});

        let url = "https://restcountries.com/v3.1/";
        if(regionSelec == null || regionSelec === "All"){url += "all";}
        else{url += `region/${regionSelec}`;}
        //region != "null" ? url += `region/${region}` : url += "all";
        console.log("majListePays de la region: " + regionSelec); 
        axios.get(url)
            .then(response => {
                console.log("then");
                const lesPays = Object.values(response.data).map(pays => {
                    return {
                        key: pays.name.common,
                        flags : pays.flags,
                        translations : pays.translations,
                        capital : pays.capital,
                        region : pays.region,
                    }
                });
                const nbPays = lesPays.length;
                this.setState({
                    listePays: lesPays,
                    loading: false,
                });
                this.props.majNbPays(nbPays);
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            })
    }
}//fin LesPays

export default LesPays;