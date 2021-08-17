import React from 'react';
import Navbar from '../base/navigation/Navbar';
import Footer from '../base/footer/Footer';
import Welcome from '../home/Welcome';
import AboutUs from '../home/AboutUs';
import Example from '../home/Example';

const Home = () => {
   return (
      <div>
         <Navbar />
         <Welcome />
         <AboutUs />
         <Example />
         <Footer />
      </div>
   );
};

export default Home;