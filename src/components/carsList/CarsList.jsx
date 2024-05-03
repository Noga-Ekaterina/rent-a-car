import React from 'react';
import CarItemHome from './CarItemHome';
import cls from "./carList.module.scss"

function CarList({cars}) {
   return ( 
      <div className={cls.carList} id='carList'>
         <div className={[cls.gradient, "noMob"].join(" ")}></div>
         {cars.map((car)=>
            <CarItemHome key={car.id} id={car.id} 
            cls={{
               item: cls.item,
               title: cls.title,
               bigImg: cls.bigImg,
               priceAndBtn: cls.priceAndBtn,
               price: cls.price,
               btn: cls.btn
            }}
            title={{
               marca: car.marca,
               model: car.model,
               name: car.name
            }}
            options={car.options} price={car.price}/>
         )}
      </div>
   );
}

export default CarList;