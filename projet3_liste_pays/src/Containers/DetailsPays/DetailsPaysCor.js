import React, { Component } from 'react'; 
import Titre from '../../Components/Titre/Titre';
import axios from "axios";
import UnPays from '../PaysManager/LesPays/UnPays/UnPays';

class DetailsPaysCor extends Component{
    
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
        url += this.props.nomPays.toLowerCase();
        //url += "?fullText=true";
        //console.log("requete SQL"); 
        axios.get(url)
            .then(reponse => {
                console.log("then");
                const stringLangues = this.recupStringLangues(reponse.data[0]);
                const tabLangues = this.recupTabLangues(reponse.data[0]);
                this.setState({
                    detailsPays: reponse.data[0],
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
        console.log(this.props);
        let pays = this.state.detailsPays;
        console.log("pays: " + pays);
        console.log(pays);
         
        return <div className="container">
            <Titre>Page du pays : {this.props.nomPays}</Titre>
            {this.state.loading && <div>Chargement en cours</div>}
            {pays !== null &&
                <UnPays {...pays} solo={true}/>
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
    /*recupInfosLangues = (pays) => {
        let stringLangueInfos = " ";
        let listeLangueInfos = [];
        //recup liste langue sting

        for (let key in pays.languages) {
            stringLangueInfos += pays.languages[key] + " ,  ";
        stringLangueInfos = stringLangueInfos.slice(0, -4);
        //console.log(stringLangueInfos);
        
        //recup liste langue tableau

        for (let key in pays.languages) {
            listeLangueInfos.push(pays.languages[key]);
        }
        //console.log(listeLangueInfos);

        this.setState({
            stringLangue : stringLangueInfos,
            listeLangue : listeLangueInfos
        });
    }*/
    
}//fin DetailsPays

export default DetailsPaysCor;