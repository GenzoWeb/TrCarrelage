import React from 'react';
import {NavLink} from 'react-router-dom';
import ButtonMenu from './ButtonMenu';

function Navbar() {

   return (
      <div>
         <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
               <a className="navbar-brand" href="/"><img src="/images/logo.png" alt="Logo T.R Carrelage" /><span>T.R Carrelage</span></a>
               <ButtonMenu />
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