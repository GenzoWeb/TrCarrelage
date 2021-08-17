import React from 'react';

const Example = () => {
   return (
      <section className="page-section">
         <div className="container">
            <h2 className="text-center">Quelques réalisations</h2>
            <hr className="divider" />
            <div className="d-flex flex-wrap justify-content-center mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
               <div className="text-center animate-box"> 
                  <div className="card-example">
                     <img src="/images/image1.jpg" alt="" />
                  </div>
               </div>
               <div className="text-center animate-box">
                  <div className="card-example">
                     <img src="/images/image2.jpg" alt="" />
                  </div>
               </div>
               <div className="text-center animate-box">
                  <div className="card-example">
                     <img src="/images/image3.jpg" alt="" />
                  </div>
               </div>
            </div>
            <div className="text-center"><a href="/Photos" className="btn-example">En voir plus</a></div>
         </div>
      </section>
   );
};

export default Example;