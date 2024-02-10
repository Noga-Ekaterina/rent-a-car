import React from 'react';
import cls from "./carTitle.module.scss"

function CarTitle({title, newCls}) {
   return (
      <div className={[cls.carTitle, newCls].join(" ")}>
         <div><img src={`img/cars/marca/${title.marca}.svg`} alt="" /></div>
         <div>
            {title.marca} <span className="light">{title.model}</span> {title.name}
         </div>
      </div>
   );
}

export default CarTitle;