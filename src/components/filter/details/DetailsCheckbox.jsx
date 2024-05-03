import React, {useRef, useState, useEffect} from 'react';
import cls from "./detailsCheckbox.module.scss"
import {useClose} from "../../../hoocs/useClose";

function DetailsChecbox({title, arr, name, changeCheck}) {
   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef(null);

   useClose(dropdownRef, isOpen, setIsOpen, 768);
   return ( 
      <div className={[cls.detailsCheckbox, isOpen && cls.open].join(" ")} ref={dropdownRef}>
         <div className={cls.detailsCheckbox__title} onClick={()=> setIsOpen(!isOpen)}>{title}</div>
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