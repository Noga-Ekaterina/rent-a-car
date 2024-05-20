import React, { useState } from 'react';
import cls from "./carImgs.module.scss"
import SliderImg from "../../../components/UI/sliderImg/SliderImg";

function CarImgs({id, newCls}) {
   const [bigImg, setBigImg] = useState(1);
   const arrImgs= [1, 2, 3, 4, 5]
   return (
       <div className={[cls.imgs, newCls].join(" ")}>
          <div className="noMob">
             <div><img src={`/rent-a-car/img/cars/carsPhoto/id_${id}/${bigImg}.webp`} alt=""/></div>
             <div className={cls.minImgs}>
                {
                   arrImgs.map(item =>
                       <div key={item} className={[cls.minImgs__item, item == bigImg && cls.active].join(" ")}
                            onClick={() => setBigImg(item)}>
                          <img src={`/rent-a-car/img/cars/carsPhoto/id_${id}/${item}min.webp`} alt=""/>
                       </div>
                   )
                }
             </div>
          </div>
          <SliderImg
              newClass='yesMob'
              arrImgs={arrImgs}
              imgs={{
                 directory: "cars/carsPhoto/",
                 id,
                 end: ".webp"
              }}
          />
       </div>
   );
}

export default CarImgs;