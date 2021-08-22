import React from 'react';
import Navbar from '../base/navigation/Navbar';
import Footer from '../base/footer/Footer';
import Presta from '../prestations/Presta';

const Prestations = () => {
   return (
      <div>
         <Navbar />
         <Presta />
         <Footer />
      </div>
   );
};

export default Prestations;