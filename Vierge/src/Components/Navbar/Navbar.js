import React from "react";
import { NavLink } from "react-router-dom";

const navBar = (props) => {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/" 
                            exact 
                            className="nav-link"
                            activeClassName={"active activeAccueil"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Page d'accueil Link
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/pays" 
                            exact 
                            className="nav-link"
                            activeClassName={"active activePays"}
                            activeStyle={{textDecoration:"underline"}}
                        >
                            Page des pays Link
                        </NavLink>
                        {/* exact empeche le active si pays/france  */}
                    </li>
                </ul>
            </div>
        </div>
    </nav>
};

export default navBar;