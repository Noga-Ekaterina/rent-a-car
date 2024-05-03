import React, {useRef, useState, useEffect} from 'react';
import cls from "./detailsCheckbox.module.scss"

function DetailsChecbox({title, arr, name, changeCheck}) {
   const [open, setOpen] = useState(false);
   const dropdownRef = useRef(null);

   const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) && window.innerWidth > 768) {
         setOpen(false);
      }
   };

   useEffect(() => {
      if (open) {
         document.addEventListener('mousedown', handleOutsideClick);
      } else {
         document.removeEventListener('mousedown', handleOutsideClick);
      }

      return () => {
         document.removeEventListener('mousedown', handleOutsideClick);
      }
   }, [open])

   return ( 
      <div className={[cls.detailsCheckbox, open && cls.open].join(" ")} ref={dropdownRef}>
         <div className={cls.detailsCheckbox__title} onClick={()=> setOpen(!open)}>{title}</div>
         <div className={cls.detailsCheckbox__content}>
            {
               arr.map((item)=>
                   <div key={item}>
                      <input type='checkbox' name={name} id={item} value={item} onChange={e=> changeCheck(e, name)}/>
                      <label htmlFor={item}>{item}</label>
                   </div>
               )
            }

         </div>
      </div>
   );
}

export default DetailsChecbox;