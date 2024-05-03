import React from 'react';
import cls from "./inputsMinMax.module.scss"

function InputsMinMax({title, valueMinMax, setValueMinMax, name}) {
   const checkInput = (el, key) => {
      setValueMinMax(prevValue => ({
         ...prevValue,
         [name]: {
            ...prevValue[name],
            [key]: el.target.value
         }
      }));
   }
   const step= name=="motor"? "0.1": "1"
   return ( 
      <div>
         {title}
         <div className={cls.inputs}>
            <label htmlFor={`${name}Min`}>от</label>
            <input type="number" step={step} name={`${name}Min`} id={`${name}Min`} value={valueMinMax[name].min} onChange={el=> checkInput(el, "min")}/>

            <label htmlFor={`${name}Max`}>до</label>
            <input type="number" step={step} name={`${name}Max`} id={`${name}Max`} value={valueMinMax[name].max} onChange={el=> checkInput(el, "max")}/>
         </div>
      </div>
   );
}

export default InputsMinMax;