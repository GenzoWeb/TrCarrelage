import React from 'react';

function Burger({menuOpen}) {
   let className = 'navbar-toggler-icon header_icon';
   if(menuOpen) {
      className += ' header_icon_anim';
   }

   return (
      <span id ="burger" className={className}></span>
   );
};

export default Burger;