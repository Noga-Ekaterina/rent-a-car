import React from 'react';
import CarTitle from './UL/carTitle/CarTitle';
import CarOptions from './UL/carOptions/CarOptions';
import { useNavigate } from 'react-router-dom';

function CarItemHome({ id, cls, title, options, price }) {
   function findMin(obj) {
      let min = Number.MAX_VALUE; // Устанавливаем начальное значение min как самое большое возможное число
      for (let key in obj) {
         if (obj[key] < min) {
            min = obj[key];
         }
      }
      return min;
   }
   const route= useNavigate()
   return (
      <div className={cls.item}>
         <CarTitle title={title} newCls={cls.title} />
         <div className={cls.bigImg}>
            <img src={`/rent-a-car/img/cars/carsPhoto/id_${id}/home.png`} alt="" />
         </div>
         <CarOptions options={options} />
         <div className={cls.priceAndBtn}>
            <div className={cls.price}>от {findMin(price)} р. / сутки</div>
            <div className={cls.btn} onClick={()=> route(`/rent-a-car/car/${id}`)}>Арендовать авто</div>
         </div>
      </div>
   );
}

export default CarItemHome;