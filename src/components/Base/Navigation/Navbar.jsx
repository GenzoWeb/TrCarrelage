import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {

   return (
      <div>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
               <a className="navbar-brand" href="/"><img src="/images/logo.png" alt="Logo T.R Carrelage" /><span>T.R Carrelage</span></a>
               <button id="burger-button" className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span id ="burger" className="navbar-toggler-icon header_icon"></span>
               </button>
               <div className="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                  <ul className="navbar-nav mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink exact to="/" activeClassName="active" className="nav-link">Accueil</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink exact to="/Prestations" activeClassName="active" className="nav-link">Prestations</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink exact to="/Photos" activeClassName="active" className="nav-link">Photos</NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink exact to="/Contact" activeClassName="active" className="nav-link">Contact</NavLink>  
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </div>
   );
};

export default Navbar;