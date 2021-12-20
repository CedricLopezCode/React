import React from "react";
import {Link, NavLink} from "react-router-dom"; //NavLink aussis

const liensEtRoutage = (props) => {
    let parametreDynamque = "parametredynamque"
    return <>
        {/* Normal:  mais plus Single Page Application car rechargement de la page à chaque cliquage de lien...*/} 
        <a href="/" className="mx-5">Page d'accueil Lien Standard</a>
        <a href="/pays" className="mx-5">Page des pays Lien Standard</a>
            {/* Link  juste maj*/} 
        <Link to="/" className="mx-5">Page d'accueil Link</Link>
        <Link to="/pays" className="mx-5">Page des pays Link</Link>

        <h3>Le routage est dans App.js</h3>
        <h3>Avec le routage plutot des Navlink</h3>
        <NavLink to="/" className="nav-link">Accueil</NavLink>
        <NavLink to="/exact" className="nav-link">Avec Exact</NavLink>
        <NavLink to="/render" className="nav-link">Render</NavLink>
        <NavLink to="/component" className="nav-link">Page Component</NavLink>
        <NavLink to="/avecparam/aaa" className="nav-link">Avec 1 Param</NavLink>
        <NavLink to="/avecparam/bbb/ccc" className="nav-link">Avec 2 Params</NavLink>
    {/* <NavLink to={props.match.url+"/"+props.translations.fra.common} className="nav-link">Plus de détails via url</NavLink> */}
        <NavLink to={`/avecparam/${parametreDynamque}`} className="nav-link">Avec Param Dynamique</NavLink> {/* Mieux car évite d'avoir des repetitions   */}
        <NavLink to="/returndirect/rgsf/" className="nav-link">Return Direct</NavLink>
        <h3>Dans la navBar on met active souvent</h3>
        <NavLink to="/" 
            exact 
            className="nav-link"
            activeClassName={"active activeAccueil"}
            activeStyle={{textDecoration:"underline"}}
        >
            Accueil
        </NavLink>
    </>
};

export default liensEtRoutage;