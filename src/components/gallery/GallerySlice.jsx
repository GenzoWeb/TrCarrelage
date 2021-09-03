import React from 'react';
import Zoom from 'react-medium-image-zoom';

const GallerySlice = (props) => {
   return (
      <div className="d-flex flex-wrap justify-content-center mt-5 gallery-images" 
         data-aos="fade-left" 
         data-aos-duration="1000" 
         data-aos-once="true"
      >
         {props.imagesPagin
            .map(data =>                   
               <div key={data.id}>
                  <div className="card-example">
                     <Zoom zoomMargin={40} overlayBgColorEnd='rgba(61, 61, 61, 0.95)' >
                        <img src={data.image} alt="photos d'exemple" width="100%" />
                     </Zoom>
                  </div>
               </div>
            )
         }
      </div> 
   );
};

export default GallerySlice;