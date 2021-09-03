import React from 'react';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';

const Prestations = () => {
   return (
      <section className="section-prestations">
         <div className="container pt-4">
            <h1 className="text-center">Mes prestations</h1>
            <hr className="divider" />
            <div className="row my-4 prestation">
               <div className="col-lg-6 col-md-6"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
               >
                  <div className="prestations-images">
                     <img src={image2} alt="" className="img-fluid" /> 
                  </div>
               </div>
               <div className="col-lg-6 col-md-6">
                  <div className="pr-3 mb-5 mb-lg-0">
                     <div className="prestations-text"
                        data-aos="fade-left" 
                        data-aos-duration="750" 
                        data-aos-once="true"
                     >
                        <h3 className="mt-3 mb-4">Neuf et rénovation</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic veniam quidem possimus nulla fuga quae numquam praesentium aliquid quia inventore, corporis laudantium laboriosam deserunt.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row mb-4">
               <div className="col-lg-6 col-md-6">
                  <div className="pr-3 mb-5 mb-lg-0">
                     <div className="prestations-text"
                        data-aos="fade-right"
                        data-aos-duration="750"
                        data-aos-once="true"
                     >
                        <h3 className="mt-3 mb-4">Douche italienne mosaïque</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic veniam quidem possimus nulla fuga quae numquam praesentium aliquid quia inventore, corporis laudantium laboriosam deserunt.</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-6 col-md-6">
                  <div className="prestations-images"
                     data-aos="fade-left"
                     data-aos-duration="750"
                     data-aos-once="true"
                  >
                     <img src={image1} alt="" className="img-fluid" /> 
                  </div>
               </div>
            </div>
            <div className="row mb-4 prestation">
               <div className="col-lg-6 col-md-6">
                  <div className="prestations-images"
                     data-aos="fade-right"
                     data-aos-duration="750"
                     data-aos-once="true"
                  >
                     <img src={image3} alt="" className="img-fluid" /> 
                  </div>
               </div>
               <div className="col-lg-6 col-md-6">
                  <div className="pr-3 mb-5 mb-lg-0">
                     <div className="prestations-text"
                        data-aos="fade-left"
                        data-aos-duration="750"
                        data-aos-once="true"
                     >
                        <h3 className="mt-3 mb-4">Pose de parquets / petits travaux de placo</h3>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic veniam quidem possimus nulla fuga quae numquam praesentium aliquid quia inventore, corporis laudantium laboriosam deserunt.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Prestations;