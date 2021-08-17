import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md">
                  <div className="footer-widget mb-md-2">
                     <h2 className="footer-title">Liens</h2>
                     <ul className="list-unstyled footer-links">
                        <li><NavLink exact to="/">Accueil</NavLink></li>
                        <li><NavLink exact to="/Prestations">Prestations</NavLink></li>
                        <li><NavLink exact to="/Photos">Photos</NavLink></li>
                        <li><NavLink exact to="/Contact">Contact</NavLink></li>
                     </ul>
                  </div>
               </div>
               <div className="col-md">
                  <div className="footer-widget float-md-end">
                     <h2 className="footer-title">Contactez-moi</h2>
                     <ul className="footer-infos">
                        <li><span className="icon"><i className="fas fa-map-marker-alt"></i></span><span className="text">54770 Bouxières aux Chênes</span></li>
                        <li><span className="icon"><i className="fas fa-mobile-alt"></i></span><span className="text">06 71 21 83 80</span></li>
                        <li><span className="icon"><i className="fas fa-envelope"></i></span><span className="text">remi.tissier84@gmail.com</span></li>
                        <li><a className="link-facebook" href="https://www.facebook.com/TR-Carrelage-104708727622378"><span className="icon"><i className="fab fa-facebook"></i></span><span className="text">facebook</span></a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;