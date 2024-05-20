import React from 'react';
import { useParams } from 'react-router-dom';
import cars from '../../API/cars.json'
import CarTitle from '../../components/UI/carTitle/CarTitle';
import cls from "./car.module.scss"
import CarImgs from './carImgs/CarImgs';
import CarOptions from '../../components/UI/carOptions/CarOptions';
import CarPrice from '../../components/UI/carPrice/CarPrice';
import Btn from '../../components/UI/btn/Btn';

function Car() {
   const params = useParams()
   const car= cars.find(item=> item.id==params.id)
   console.log(params);
   console.log(cars[10].id==params.id);
   return ( 
      <div className={cls.carPage}>
         <div className={["noMob", cls.imgsAndBtn].join(" ")}>
            <CarImgs id={car.id}/>
            <Btn>Арендовать</Btn>
         </div>
         <div>
            <CarTitle newCls={cls.title} title={{
               marca: car.marca,
               model: car.model,
               name: car.name
            }}/>
            <CarImgs id={car.id} newCls="yesMob"/>
            <div className={cls.carContent}>
               <div className={cls.carContent__gradient}/>
               <CarOptions options={car.options} />
               <CarPrice price={car.price}/>
               <Btn newCls="yesMob" style={{fontWeight: "700"}}>Арендовать авто</Btn>
            </div>
         </div>
      </div>
   );
}

export default Car;