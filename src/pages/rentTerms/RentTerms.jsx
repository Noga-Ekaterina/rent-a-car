import React from 'react';
import cls from "./rentTerms.module.scss"
import pasport from './img/pasport.svg'
import driver from './img/driver-license.svg'
import age from "./img/age.svg"
import steering from "./img/steering-wheel.svg";
import car from "./img/car.png"
import ImgAndText from "../../components/UL/imgAndText/ImgAndText";
import Btn from "../../components/UL/btn/Btn";

function RentTerms() {
   return ( 
      <div className={cls.rentTerms}>
         <div className={cls.rentTerms__content}>
            <h2><span className='light'>Условия</span> аренды</h2>
            <div className={cls.rentTerms__garadient}></div>
            <div className={cls.rentTerms__items}>
               <ImgAndText img={pasport} text="Паспорт"/>
               <ImgAndText img={driver}
               text="Водительское удостоверение"/>
               <ImgAndText img={age} text="Возраст от 22 лет"/>
               <ImgAndText img={steering} text="Водительский стаж от 3 лет"/>
            </div>
            <Btn newCls={cls.rentTerms__btn}>Договор аренды</Btn>
            <img src={car} alt="" className={cls.rentTerms__img}/>
         </div>
      </div>
   );
}

export default RentTerms;