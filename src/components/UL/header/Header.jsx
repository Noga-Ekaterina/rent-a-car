import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cls from "./header.module.scss"

function Header() {
   const [openMenu, setOpenMenu] = useState(false);
   const classMenu= [cls.menu]
   if (openMenu){
      classMenu.push(cls.open)
   }
   return ( 
      <header className={[cls.header, "content"].join(" ")}>
         <div className={cls.logo}>
            <picture>
               <source media="(max-width: 767px)" srcSet="img/logo2.png" />
               <img src="img/logo.png" alt="" />
            </picture>
         </div>
         <div className={classMenu.join(" ")}>
            <Link to="/" className={cls.menu__item}>Наш парк</Link>
            <Link to="/rent-terms" className={cls.menu__item}>Условия аренды</Link>
            <Link to="/comments" className={cls.menu__item}>Отзывы</Link>
            <Link to="/contacts" className={cls.menu__item}>Контакты</Link>
            <a href="tel:+79781173839">+79781173839</a>
         </div>
         <div className={cls.openMenu} onClick={()=> 
            openMenu?setOpenMenu(false) :setOpenMenu(true)
         }>
            <img src="img/open_menu.png" />
         </div>
      </header>
   );
}

export default Header;