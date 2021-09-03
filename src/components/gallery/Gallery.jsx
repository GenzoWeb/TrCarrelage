import React, { useState } from 'react';
import { galleryData } from '../../data/galleryData';
import GallerySlice from './GallerySlice';

const Gallery = () => {
   const [page, setPage] = useState(1);
   const numberImages = galleryData.length;
   const numberImagesPage = 3;
   const numberPage = Math.ceil(numberImages / numberImagesPage);
   const listPages = [];
   const [gallerySlice, setgallerySlice] = useState( galleryData.slice( 0 , numberImagesPage) );

   for (let i = 1; i <= numberPage; i++) {
      listPages.push(i);
   }

   const handleSliceGallery = (p) => {
      const s = p * numberImagesPage
      const slice = galleryData.slice(s-numberImagesPage ,s)
      setgallerySlice(slice)
      setPage(p)
   }

   const handlePrev = () => {
      if(page > 1) {
         handleSliceGallery(page - 1)
      }
   }

   const handleNext = () => {
      if(page < numberPage) {
         handleSliceGallery(page + 1);
      }
   }

   return (
      <section className="container pt-4">
         <h1 className="text-center">Quelques photos</h1>
         <hr className="divider" />
         <div>
            <ul className="pagination justify-content-center">
               <li className="page-item">
                  <button className={page === 1 ? "pagin-button-block" : "pagin-button"} onClick={() =>{ handlePrev() }}>&lt;&lt;</button>
               </li>
               {listPages
                  .map((p) =>
                     <li key={p} className={page === p ? "page-item active" : "page-item"}><button className="page-link" onClick={() =>{ handleSliceGallery(p) }}>{p}</button></li>
                  )
               }
               <li className="page-item">
                  <button className={page === numberPage ? "pagin-button-block" : "pagin-button"} onClick={() =>{ handleNext() }}>&gt;&gt;</button>
               </li>
            </ul>
         </div>
         < GallerySlice imagesPagin = { gallerySlice } />
      </section>
   );
};

export default Gallery;