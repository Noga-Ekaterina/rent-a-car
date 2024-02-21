import React, { useState } from 'react';
import cls from "./carImgs.module.scss"

function CarImgs({id, newCls}) {
   const [bigImg, setBigImg] = useState(1);
   const arrImgs= [1, 2, 3, 4, 5]
   return (
      <div className={[cls.imgs, newCls].join(" ")}>
         <div><img src={`img/cars/carsPhoto/id_${id}/${bigImg}.webp`} alt="" /></div>
         <div className={cls.minImgs}>
            {
               arrImgs.map(item=>
                  <div key={item} onClick={()=> setBigImg(item)}><img src={`img/cars/carsPhoto/id_${id}/${item}min.webp`} alt="" /></div>
               )
            }
         </div>
      </div>
   );
}

export default CarImgs;