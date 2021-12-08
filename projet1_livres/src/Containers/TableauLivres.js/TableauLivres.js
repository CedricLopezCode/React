
import React, { Component } from 'react'; 
import BoutonCor from '../../Components/Boutons/BoutonsCor';
import FormulaireAjout from '../FormulaireAjout/FormulaireAjout';
import FormAjoutFormik from '../FormulaireAjout/FormAjoutFormik';
import FormAjoutFormikYup from '../FormulaireAjout/FormAjoutFormikYup';
import FormulaireModif from '../FormulaireModif/FormulaireModif';
import FormModifFormik from '../FormulaireModif/FormModifFormik';
import FormModifFormikYup from '../FormulaireModif/FormModifFormikYup';
import UnLivre from './UnLivre.js/unLivre';

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
                
                <table className="table text-center">
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
        console.log("add démarré");
        
        const nvListeLivre = [...this.state.livres];
        console.log("copie effectuée");

        const nvLivre = {
            id: this.state.lastIdLivre+1,
            titre: titre,
            auteur: auteur,
            nbPages: nbPages,
        };
        console.log("livre créé");

        nvListeLivre.push(nvLivre);
        console.log("livre ajouté");

        //this.setState({lastIdLivre: nvLivre.id});
        this.setState(oldState => {
            return {
                lastIdLivre: oldState.lastIdLivre+1,
                livres: nvListeLivre
            };
        })
        console.log("id+");

        //this.setState({livres:nvListeLivre});
        console.log("added");

        this.props.fermerFormAjout();
        console.log("fermeture auto du form");
        
        this.props.changAlert("ajout");
        console.log("Alerte Ajout");
    }
    updateLivreHandler = (id, titre, auteur, nbPages) => {
        console.log("modif démarré");
        
        const livreIndexTableau = this.state.livres.findIndex( element => {
            return element.id === id;
        });
        console.log("index trouve");

        const nvListeLivre = [...this.state.livres];
        console.log("copie liste effectuée");


        this.props.changFormModif();
        console.log("Ouverture du form");

        nvListeLivre[livreIndexTableau] = {
            id, //ne marche que si les noms sont équivalent
            titre,  //J'aurais pu le faire partout mais au moins je vois de quoi je parle
            auteur: auteur,
            nbPages: nbPages,
        };

        console.log("infos livres passé");

        this.setState({livres:nvListeLivre});
        console.log("maj state Liste");

        this.setState({idLivreAModidier:0});
        console.log("maj state idlivre à modif");

        this.props.changFormModif();
        console.log("arret auto du form");

        this.props.changAlert("modif");
        console.log("Alerte modif");
    }
    deleteLivreHandler = (id) => {
        console.log("supp démarré" +id);

        const nvListeLivre = [...this.state.livres];
        console.log("copie effectuée" +id);

        const livreIndexTableau = this.state.livres.findIndex( element => {
            return element.id === id;
        });
        console.log("index trouve");

        nvListeLivre.splice(livreIndexTableau,1);
        console.log("index Supprimmé");

        this.setState({livres:nvListeLivre});
        console.log("delete fini");

        this.props.changAlert("supp");
        console.log("Alerte Supp");
    }
}//fin TableauLivres

export default TableauLivres;

/*
<tbody>
    {
        this.state.livres.map(livre => {
            return <tr key={livre.id}> 
                <td>{livre.id}</td>
                <td>{livre.titre}</td>
                <td>{livre.auteur}</td>
                <td>{livre.nbPages} pages</td>
                <td><BoutonCor typeBtn="btn-warning" clic={() => console.log("Modifier")}>Modifier</BoutonCor></td>
                <td><BoutonCor typeBtn="btn-danger" clic={() => console.log("Supprimer")}>Supprimmer</BoutonCor></td>
            </tr>;
        })
    }
</tbody>
<tbody>
    {
        this.state.livres.map(livre => {
            return (
                <tr key={livre.id}>
                    <UnLivre {...livre}/>
                </tr>
            );
        })
    }
</tbody>
*/