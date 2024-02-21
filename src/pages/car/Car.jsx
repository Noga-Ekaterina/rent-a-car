import React from 'react';
import { useParams } from 'react-router-dom';
import cars from '../../API/cars.json'
import CarTitle from '../../components/UL/carTitle/CarTitle';
import cls from "./car.module.scss"
import CarImgs from '../../components/UL/carImgs/CarImgs';
import CarOptions from '../../components/UL/carOptions/CarOptions';
import CarPrice from '../../components/UL/carPrice/CarPrice';

function Car() {
   const params = useParams()
   const car= cars.find(item=> item.id==params.id)
   console.log(params);
   console.log(cars[10].id==params.id);
   return ( 
      <div className={["content", cls.carPage].join(" ")}>
         <CarImgs id={car.id} newCls="noMob"/>
      <div>
            <CarTitle newCls={cls.title} title={{
               marca: car.marca,
               model: car.model,
               name: car.name
            }}/>
            <CarImgs id={car.id} newCls="yesMob"/>
            <CarOptions options={car.options} />
            <CarPrice price={car.price}/>
         </div>
      </div>
   );
}

export default Car;