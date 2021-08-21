import React from 'react';
import BlocInfos from './BlocInfos';
import BlocForm from './BlocForm';

const ContactForm = () => {

   return (
      <section className="section-contact">
         <div className="color-g"></div>
         <div className="color-d"></div>
         <div className="blocs-contact container">
            <BlocInfos />
            <BlocForm />
         </div>
      </section>
   );
};

export default ContactForm;