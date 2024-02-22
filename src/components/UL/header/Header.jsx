import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cls from "./header.module.scss"

function Header() {
   const [openMenu, setOpenMenu] = useState(false);
   const classMenu= [cls.menu]
   if (openMenu){
      classMenu.push(cls.open)
   }

   const [links, setLinks]= useState([
      {to: "/", name: "Наш парк"},
      {to: "/rent-terms", name: "Условия аренды"},
      {to: "/comments", name:"Отзывы"},
      {to: "/contacts", name: "Контакты"}
   ])
   
   const pathname= useLocation().pathname
   useEffect(()=>{
      console.log(pathname);
      const updatedLinks = links.map(link => ({
         ...link,
         cls: link.to === pathname ? `${cls.menu__item} ${cls.active}` : cls.menu__item
      }));
      setLinks(updatedLinks)
   }, [pathname])

   const closeMenu=()=> setOpenMenu(false);
   return ( 
      <header className={[cls.header, "content"].join(" ")}>
         <div className={cls.logo}>
            <picture>
               <source media="(max-width: 767px)" srcSet="img/logo2.png" />
               <img src="img/logo.png" alt="" />
            </picture>
         </div>
         <div className={classMenu.join(" ")}>
            {
               links.map((link, index)=>
                  <Link to={link.to} onClick={closeMenu} className={link.cls} key={index}>{link.name}</Link>   
               )
            }
            <a href="tel:+79781173839">+79781173839</a>
         </div>
         <div className={cls.openMenu} onClick={()=> 
            openMenu?closeMenu() :setOpenMenu(true)
         }>
            <img src="img/open_menu.png" alt=''/>
         </div>
      </header>
   );
}

export default Header;