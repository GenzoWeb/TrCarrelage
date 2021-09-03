import React from 'react';
import Navbar from '../base/navigation/Navbar';
import Footer from '../base/footer/Footer';
import Gallery from '../gallery/Gallery';

const Photos = () => {
   return (
      <div>
         <Navbar />
         <Gallery />
         <Footer />
      </div>
   );
};

export default Photos;