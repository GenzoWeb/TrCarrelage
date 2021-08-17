import React from 'react';

const AboutUs = () => {
   return (
      <section className="page-section about">s
         <div className="container px-4 px-lg-5">
            <h2 className="text-center mt-0">À propos</h2>
            <hr className="divider" />
            <div className="row gx-4 gx-lg-5" data-aos="fade-down" data-aos-duration="700" data-aos-once="true">
               <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                        <div className="mb-2"><i className="far fa-clone"></i></div>
                        <h3 className="h4 mb-2">Carrelages</h3> 
                        <p className="mb-0">Pose de carrelages / Mosaïques sur sols / murs / escaliers</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                        <div className="mb-2"><i className="far fa-edit"></i></div>
                        <h3 className="h4 mb-2">Devis</h3>
                        <p className="mb-0">Devis gratuit</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                        <div className="mb-2"><i className="fas fa-phone-volume"></i></div>
                        <h3 className="h4 mb-2">Conseils</h3>
                        <p className="mb-0">Des conseils pour être sur de votre choix</p>
                  </div>
               </div>
               <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                        <div className="mb-2"><i className="fas fa-map-marker-alt"></i></div>
                        <h3 className="h4 mb-2">Zone d'intervention</h3>
                        <p className="mb-0">Dans le département de Meurthe-et-Moselle</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AboutUs;