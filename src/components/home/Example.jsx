import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

const Example = () => {
   return (
      <section className="page-section">
         <div className="container">
            <h2 className="text-center">Quelques réalisations</h2>
            <hr className="divider" />
            <div className="d-flex flex-wrap justify-content-center mt-5" 
               data-aos="fade-up" 
               data-aos-duration="1000" 
               data-aos-once="true"
            >
               <div className="text-center animate-box"> 
                  <div className="card-example">
                     <img src={image1} alt="exemple 1" />
                  </div>
               </div>
               <div className="text-center animate-box">
                  <div className="card-example">
                     <img src={image2} alt="exemple 2" />
                  </div>
               </div>
               <div className="text-center animate-box">
                  <div className="card-example">
                     <img src={image3} alt="exemple 3" />
                  </div>
               </div>
            </div>
            <div className="text-center">
               <Link className="btn-base" to="/Photos">En voir plus</Link>
            </div>
         </div>
      </section>
   );
};

export default Example;