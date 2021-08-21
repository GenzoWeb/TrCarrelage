import React from 'react';

const BlocInfos = () => {
   return (
      <div className="bloc-infos">
         <div className="infos">
            <div className="address">
               <i className="fas fa-map-marker-alt"></i>
               <h4>Adresse:</h4>
               <p>54770 BOUXIÈRES AUX CHÊNES</p>
            </div>

            <div className="email">
               <i className="fas fa-envelope"></i>
               <h4>Email:</h4>
               <p>remi.tissier84@gmail.com</p>
            </div>

            <div className="phone">
               <i className="fas fa-mobile-alt"></i>
               <h4>Téléphone:</h4>
               <p>06 71 21 83 80</p>
            </div>
            <div className="facebook">
               <a href="https://www.facebook.com/TR-Carrelage-104708727622378">
                  <i className="fab fa-facebook"></i>
                  <h4>facebook</h4>
               </a>
            </div>
         </div>
      </div>
   );
};

export default BlocInfos;