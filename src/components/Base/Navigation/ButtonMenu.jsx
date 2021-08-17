import React, { useState } from 'react';
import Burger from './Burger';

function ButtonMenu({menuOpen}) {
   const [menuShow, setMenuShow] = useState(false);
   const [animateBurger, setAnimateBurger] = useState('#navbarSupportedContent');
   
   const test = function(){
      setAnimateBurger("")
      setTimeout(function(){
         setAnimateBurger("#navbarSupportedContent")
      }, 350);

      if(animateBurger === "#navbarSupportedContent"){
         setMenuShow((s) => !s)
      }
   }

   return (
      <button id="burger-button" className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target={animateBurger} aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() =>{test()}}>
         <Burger menuOpen={menuShow}></Burger>
      </button>
   );
};

export default ButtonMenu;