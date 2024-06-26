import React from 'react';
import cls from "./HomeBlock.module.scss"
import car from "./img/car.png"

function HomeBlock() {
   return ( 
      <div className={cls.content}>
         <h1 className={cls.title}>Аренда <strong className="light">экслюзив&shy;ных</strong> <strong className='light_mob'>авто</strong> в Крыму</h1>
         <div className={cls.row}>
            <div className={cls.text}>
               <p>Доставка в любую точку Крыма</p>
               <p>Бесплатно доп. аксессуары</p>
               <p>Любой способ оплаты</p>
               <a href="#carList" className={[cls.btn, "noMob"].join(" ")}>Выбрать авто</a>
            </div>
            <div className={cls.gradient}>
               <img src={car} alt="" />
            </div>
            <a href="#carList" className={[cls.btn, "yesMob"].join(" ")}>Выбрать авто</a>
         </div>
      </div>
   );
}

export default HomeBlock;