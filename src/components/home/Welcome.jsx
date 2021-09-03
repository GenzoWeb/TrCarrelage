import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
   return (
      <section id="image-welcome" className="d-flex align-items-center">
         <div className="container text-center position-relative"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
         >
            <h1>T.R Carrelage</h1>
            <h2>Carrelages, Faïences, Mosaïques...</h2>
            <Link className="btn-get-started" to="/contact">Me contacter</Link>
         </div>
      </section>
   );
};

export default Welcome;