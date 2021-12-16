import React, { Component } from 'react';
import axios from "axios";

class DetailsPays extends Component{
    
    state = {
        detailsPays: [],
        loading: false,
    }
    
    componentDidMount(){
        console.log("componentDidMount");
        this.setState({loading: true});

        let url = "https://restcountries.com/v3.1/name/";
        url += this.props.nomPays.toLowerCase();
        console.log("detail: "); 
        axios.get(url)
            .then(reponse => {
                console.log("then");
                console.log(reponse);
                this.setState({
                    detailsPays: Object.values(reponse.data),
                    loading: false,
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

        return <div className="container">
            {this.state.loading && <div>Chargement en cours</div>}
            {!this.state.loading && this.state.detailsPays.length>0 &&
                <div className="row no-gutters">
                    <div>details du Pays</div>
                    <div>pays : {this.props.nomPays}</div>
                    <div>state: {this.state.detailsPays[0].name.common}</div>
                </div>
            } 
        </div>;
      
        //console.log(this.props);
        //let titi=this.state.detailsPays[10].region;
        //console.log("lg: "+this.state.detailsPays.length);
        //console.log("titi: "+titi);
        //console.log("pays2: "+this.state.detailsPays[10].region);
        //console.log("pays2: "+toto);
      //console.log("longueur: "+this.state.detailsPays.name.length());

    }//fin render
    
}//fin DetailsPays

export default DetailsPays;