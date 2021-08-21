import React, { useRef } from 'react';

function ButtonMenu({menuOpen}) {
   const refBurgerAnim = useRef(null);
   const refButtonBurger = useRef(null);

   const toggleMenu = function(){
      if(!refButtonBurger.current.classList.contains("collapsed")){
         refBurgerAnim.current.classList.add('header_icon_anim')
      }else {
         refBurgerAnim.current.classList.remove('header_icon_anim')
      }
   };

   return (
      <button ref={refButtonBurger} id="burger-button" className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() =>{toggleMenu()}}>
         <span ref={refBurgerAnim} id ="burger" className="navbar-toggler-icon header_icon"></span>
      </button>
   );
};

export default ButtonMenu;