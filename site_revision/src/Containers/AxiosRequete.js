import React, { Component } from 'react';
import axios from "axios";
import Titre from '../Components/Titre/Titre';

class AxiosRequete extends Component{
    
    state = {
        detailsPays: null,
        stringLangues : null,
        tabLangues : null,
        loading: false,
    }
    
    componentDidMount(){
        console.log("componentDidMount");
        this.setState({loading: true});

        let url = "https://restcountries.com/v3.1/name/";
        url += this.props.nomPays.toLowerCase(); //récup param nomPays dans adresse
        console.log(url);
        
        //console.log("requete SQL"); 
        axios.get(url)
            .then(reponse => {
                console.log("then");
                const stringLangues = this.recupStringLangues(reponse.data[0]);
                const tabLangues = this.recupTabLangues(reponse.data[0]);
                this.setState({
                    detailsPays: reponse.data[0], //0 important car tableau même si 1 seul élément
                    loading: false,
                    ...stringLangues,
                    ...tabLangues
                });
                console.log(this.state.detailsPays);
            })
            .catch(error => {
                console.log("catch");
                console.log(error);
                this.setState({loading: false});
            })
    }

    render() {
        let pays = this.state.detailsPays;
         
        return <div className="container">
            <Titre>Page du pays : {this.props.nomPays}</Titre>
            <div>Marche aussi avec Portugal Lesotho(plusieurs langues)</div>
            {this.state.loading && <div>Chargement en cours</div>}
            {pays &&
                <div className="text-center bg-warning">
                    <img className = "col-3 mt-2 " alt='drapeau' src={pays.flags.svg}/>
                    <div>Nom : {pays.translations.fra.common}</div>
                    <div>Abrébiation : {pays.cca3}</div>
                    <div>Capitale : {pays.capital}</div>
                    <div>Superficie : {pays.area} km2</div>
                    <div>Population : {pays.population} habitants</div>
                    <div>Region : {pays.region}</div>
                    <div>Sous-Region : {pays.subregion}</div>
                    <div>Langue Tab: {this.state.tabLangues}</div>
                    <div>Langue String: {this.state.stringLangues}</div>
                     {/*    */}
                </div>
            } 
        </div>;
    }//fin render

    recupTabLangues = (pays) => {
        let tableauLangues = [];

        for (let key in pays.languages) {
            tableauLangues.push(pays.languages[key]);
        }
        //console.log(listeLangueInfos);

        this.setState({tabLangues : tableauLangues});
    }
    recupStringLangues = (pays) => {
        let stringLangues = " ";

        for (let key in pays.languages) {
            stringLangues += pays.languages[key] + " ,  ";
        }
        stringLangues = stringLangues.slice(0, -4);
        //console.log(stringLangues);

        this.setState({stringLangues : stringLangues});
    }
    
}//fin DetailsPays

export default AxiosRequete;