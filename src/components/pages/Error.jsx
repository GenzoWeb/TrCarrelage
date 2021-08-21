import React from 'react';
import error404 from '../../images/emoji_404.png';
import {Link} from 'react-router-dom';

const Error = () => {
   return (
      <div className="error-page">
         <div className="error-page-content">
            <p className="text-error-page">Cette page n'existe pas</p>   
            <div className="image404">
               <img src={error404} alt="emoji désolé" />
            </div>
         </div>
         <div className="link-404">
            <Link className="btn-base" to="/">Retour</Link>
         </div>
      </div>
   );
};

export default Error;