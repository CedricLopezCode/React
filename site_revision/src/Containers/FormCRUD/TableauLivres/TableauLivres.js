
import React, { Component } from 'react'; 
import FormulaireAjout from '../FormulaireAjout/FormulaireAjout';
import FormAjoutFormik from '../FormulaireAjout/FormAjoutFormik';
import FormAjoutFormikYup from '../FormulaireAjout/FormAjoutFormikYup';
import FormulaireModif from '../FormulaireModif/FormulaireModif';
import FormModifFormik from '../FormulaireModif/FormModifFormik';
import FormModifFormikYup from '../FormulaireModif/FormModifFormikYup';
import UnLivre from './UnLivre/unLivre';

class TableauLivres extends Component{

    state = {
        livres:[
            {id: 1, titre: "aaa", auteur:"aaaaa", nbPages:111},
            {id: 2, titre: "bbb", auteur:"bbbbb", nbPages:22}, 
            {id: 3, titre: "ccc", auteur:"ccccc", nbPages:33},
            {id: 4, titre: "ddd", auteur:"ddddd", nbPages:44},
        ],
        lastIdLivre : 4,
        idLivreAModidier: 0
    }

    render() {
        return <>
            <div className="container">
                
                <table className="table text-center text-primary fs-4 fw-bolder">
                    <thead>
                        <tr className="table-dark">
                            <th>id</th>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Nombre de pages</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.livres.map(livre => {
                                if(livre.id === this.state.idLivreAModidier){
                                    return (
                                        <tr key={livre.id}>                                
                                            <FormModifFormikYup 
                                                id={livre.id} 
                                                titre={livre.titre} 
                                                auteur={livre.auteur} 
                                                nbPages={livre.nbPages}
                                                modification={this.updateLivreHandler}
                                            />
                                        </tr>
                                    );
                                }else{
                                    return (
                                        <tr key={livre.id}>                                
                                            <UnLivre 
                                                id={livre.id} 
                                                titre={livre.titre} 
                                                auteur={livre.auteur} 
                                                nbPages={livre.nbPages}
                                                modification={() => this.setState({idLivreAModidier: livre.id})}
                                                suppression={() => this.deleteLivreHandler(livre.id)}
                                            />
                                        </tr>
                                    );
                                }
                            })
                        }
                    </tbody>
                </table>
                {this.props.modeAjout && <FormAjoutFormikYup validation={this.addLivreHandler}/>}
            </div>
        </>;
                //FormulaireAjout ou FormAjoutFormik ou FormAjoutFormikYup
                //FormulaireModif ou FormModifFormik ou FormModifFormikYup
    }//fin render
    addLivreHandler = (titre, auteur , nbPages) => {
        const nvListeLivre = [...this.state.livres];
        const nvLivre = {
            id: this.state.lastIdLivre+1,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages,
        };
        nvListeLivre.push(nvLivre);
        this.setState(oldState => {
            return {
                lastIdLivre: oldState.lastIdLivre+1,
                livres: nvListeLivre
            };
        })
        this.props.fermerFormAjout();  
        this.props.changAlert("ajout");
    }
    updateLivreHandler = (id, titre, auteur, nbPages) => {
        const livreIndexTableau = this.state.livres.findIndex( element => {
            return element.id === id;
        });
        const nvListeLivre = [...this.state.livres];
        this.props.changFormModif();
        nvListeLivre[livreIndexTableau] = {
            id, //ne marche que si les noms sont équivalent
            titre,  //J'aurais pu le faire partout mais au moins je vois de quoi je parle
            auteur: auteur,
            nbPages: nbPages,
        };
        this.setState({livres:nvListeLivre});
        this.setState({idLivreAModidier:0});
        this.props.changFormModif();
        this.props.changAlert("modif");
    }
    deleteLivreHandler = (id) => {
        const nvListeLivre = [...this.state.livres];
        const livreIndexTableau = this.state.livres.findIndex( element => {
            return element.id === id;
        });
        nvListeLivre.splice(livreIndexTableau,1);
        this.setState({livres:nvListeLivre});
        this.props.changAlert("supp");
    }
}//fin TableauLivres

export default TableauLivres;
