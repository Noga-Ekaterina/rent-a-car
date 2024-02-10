import React from 'react'; 
import cls from "./carOptions.module.scss"
import year from "./img/year.png"
import box from "./img/box.png"
import motor from "./img/motor.png"
import gasoline from "./img/gasoline.png"

function CarOptions({options}) {
   return ( 
      <div className={cls.carOptions}>
         <div className={cls.carOptions__year}>
            <div className={cls.imgAndText}>
               <img src={year} alt="" />
               <p className={cls.year}>{options.year}</p>
            </div>
            <p>год</p>
         </div>
         <div className={cls.carOptions__box}>
            <div className=""><img src={box} alt="" /></div>
            <p>{options.box}</p>
         </div>
         <div className={cls.carOptions__motor}>
            <div className={cls.imgAndText}>
               <img src={motor} alt="" />
               <p>{options.motor}</p>
            </div>
            <p>{options.tank} л.с.</p>
         </div>
         <div className={cls.carOptions__gasoline}>
            <div className=""><img src={gasoline} alt="" /></div>
            <p>{options.gasoline}</p>
         </div>
      </div>
   );
}

export default CarOptions;