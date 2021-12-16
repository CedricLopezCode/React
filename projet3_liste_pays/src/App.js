import React, { Component } from 'react';
import PaysManager from './Containers/PaysManager/PaysManager';
import DetailsPays from './Containers/DetailsPays/DetailsPays';
import {BrowserRouter, Route} from "react-router-dom"; //Link & NavLink aussi
import Navbar from './Components/Navbar/Navbar';
import NavBarbis from './Components/Navbar/NavBarbis';

class App extends Component{
  render(){
    return (
      <BrowserRouter>

        <Navbar/>
        
        <Route path="/admin" exact render={() => <h1>Page d'administration</h1>}/>
        <Route path="/admin" component={NavBarbis}/> {/* une Navbar spécifique pour une page spécifique*/}

        <Route path="/" exact render={() => <h1>Page d'acceuil</h1>}/> 
        <Route path="/pays" exact component={PaysManager}/> 
        <Route path="/pays/:id" render={(props) => <DetailsPays nomPays={props.match.params.id}/>}/>
        

      </BrowserRouter>
    );
  }
  
}

export default App;