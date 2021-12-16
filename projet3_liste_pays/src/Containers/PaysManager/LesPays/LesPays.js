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
            this.recupData(this.props.region);
            console.log("componentDidUpdate");
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
                return <UnPays key={cePays.name} {...cePays}/>
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

    recupData = (region) => {
        this.setState({loading: true});

        let url = "https://restcountries.com/v3.1/";
        if(region == null || region === "All"){url += "all";}
        else{url += `region/${region}`;}
        //region != "null" ? url += `region/${region}` : url += "all";
        console.log("region: " + region);
        console.log("majListePays");
        axios.get(url)
            .then(response => {
                console.log("then");
                const lesPays = Object.values(response.data);
                const nbPays = lesPays.length;
                this.setState({
                    listePays: lesPays,
                    loading: false,
                });
                this.props.majNbPays(nbPays);
                console.log(this.state);
            })
            .catch(error => {
                console.log(error);
                this.setState({loading: false});
            })
    }
}//fin LesPays

export default LesPays;