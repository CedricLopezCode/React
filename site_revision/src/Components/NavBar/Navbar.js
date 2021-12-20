import React from "react";
import { NavLink } from "react-router-dom";

const navBar = (props) => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-3 fw-bold ">
                    <li className="nav-item">
                    {/* exact empeche le active si liensEtRoutage/toto  */}
                        <NavLink to="/" 
                            exact 
                            className="nav-link text-black"
                            activeClassName={"active activeAccueil text-warning"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/generalites" 
                            exact 
                            className="nav-link text-black"
                            activeClassName={"active"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Généralités
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/liensEtRoutage" 
                            exact 
                            className="nav-link text-black"
                            activeClassName={"active"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Liens&Routage
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/majState" 
                            exact 
                            className="nav-link text-black"
                            activeClassName={"active"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            MajState
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/tabetboucles" 
                            exact 
                            className="nav-link text-black"
                            activeClassName={"active"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Tab&Boucles
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/axiosrequete/France" 
                            exact 
                            className="nav-link text-black"
                            activeClassName={"active"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Axios Requete
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/formCRUD" 
                            exact 
                            className="nav-link text-black"
                            activeClassName={"active"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Form & CRUD
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/miseenligne" 
                            exact 
                            className="nav-link text-black"
                            activeClassName={"active"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Mise en Ligne
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
};

export default navBar;