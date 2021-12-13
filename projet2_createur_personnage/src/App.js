import React, { Component } from 'react';
import CreateurPersoAxios from './Containers/CreateurPersonnage/CreateurPersoAxios';
import CreateurPersonnage from './Containers/CreateurPersonnage/CreateurPersonnage';
import ListePersos from './Containers/ListePersos/ListePersos';


class App extends Component{
  
  state = {
    refresh: false,
  }

  render(){
    return <div className="container">
      <CreateurPersoAxios refresh={this.refreshHandle}/>
      <ListePersos refresh={this.state.refresh}/>
      <CreateurPersonnage />
    </div>;
  }

  refreshHandle = () => {
    this.setState((oldState) => {
        return {refresh: !oldState.refresh};
      });
  }

}

export default App;
