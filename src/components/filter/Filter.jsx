import React, {useRef, useState} from 'react';
import cls from "./filter.module.scss"
import Btn from '../UL/btn/Btn';
import DetailsChecbox from './details/DetailsCheckbox';
import InputsMinMax from './inputsMinMax/InputsMinMax';
import {useClose} from "../../hoocs/useClose";

function Filter({cars, filter, setFilter}) {
   const [isOpen, setIsOpen] = useState(false);
   const filterRef= useRef(null);

   useClose(filterRef, isOpen, setIsOpen);

   const newArr = (option, obj) => {
      const newArr = []
      cars.forEach(car => {
         const el = obj ? car[obj][option] : car[option]
         if (!newArr.includes(el))
            newArr.push(el)
      });
      newArr.sort()
      return newArr
   }

   const changeCheck = (e, name) => {
      const arr = checkbox[name]
      const target = e.target
      const value = target.value

      if (target.checked)
         setCheckbox({...checkbox, [name]: [...arr, value]})
      else
         setCheckbox({...checkbox, [name]: arr.filter(item => item != value)})
   }

   const marcas = newArr("marca")
   const gasoline = newArr("gasoline", "options")
   const [checkbox, setCheckbox] = useState({marca: [], gasoline: []});
   const [valueMinMax, setValueMinMax] = useState({
      year: {min: 0, max: ""},
      motor: {min: 0, max: ""},
      horsepower: {min: 0, max: ""},
      price: {min: 0, max: ""}
   });

   const submitForm = (ev) => {
      ev.preventDefault()
      setFilter({
         ...filter,
         marca: checkbox.marca,
         year: valueMinMax.year,
         motor: valueMinMax.motor,
         horsepower: valueMinMax.horsepower,
         gasoline: checkbox.gasoline,
         price: valueMinMax.price
      })
      setIsOpen(false)
   }

   return (
       <>
          <div className={ cls.filter__openWrapper}>
             <Btn newCls={cls.filter__openBtn} onClick={() => setIsOpen(true)}>Фильтр</Btn>
          </div>
          <div ref={filterRef} className={[cls.filter__wrapper, isOpen && cls.open].join(' ')}>
             <div className={cls.filter__header}>
                <div className={cls.filter__title}>Фильтр</div>
                <div className={cls.filter__close} onClick={() => setIsOpen(false)}>x</div>
             </div>

             <form method='post' className={cls.filter} onSubmit={ev => submitForm(ev)}>
                <div>
                   <DetailsChecbox title="Марка" arr={marcas} name="marca" changeCheck={changeCheck}/>
                </div>
                <InputsMinMax title="Год" name="year" valueMinMax={valueMinMax} setValueMinMax={setValueMinMax}/>
                <InputsMinMax title="Объем двигателя (л)" name="motor" valueMinMax={valueMinMax}
                              setValueMinMax={setValueMinMax}/>
                <InputsMinMax title="Лошадиная сила" name="horsepower" valueMinMax={valueMinMax}
                              setValueMinMax={setValueMinMax}/>
                <DetailsChecbox title="Топливо" arr={gasoline} name="gasoline" changeCheck={changeCheck}/>
                <InputsMinMax title="Цена" name="price" valueMinMax={valueMinMax} setValueMinMax={setValueMinMax}/>
                <div className={cls.filter__btnWrapper}>
                   <Btn newCls={cls.filter__btn}>Применить</Btn>
                </div>
             </form>
          </div>
       </>
   );
}

export default Filter;