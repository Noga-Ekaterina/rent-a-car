import React, { useMemo } from 'react';
import { findMin } from '../utils/findMin';

export const useFilter = (arr, filter)=>{
   const arrFilter = useMemo(()=>{
      console.log(filter);
      for (const key in filter) {
         const el = filter[key];
         //console.log(key);
            if (el.length!=0.) {
            arr= arr.filter(item=>{
               const itemKey = key!= "marca" && key!= "price"? item.options[key] :item[key];
               //console.log(itemKey);
               if (Array.isArray(el)) 
                  return el.includes(itemKey);
               
               else if (typeof el =="object"){
                  const num = key=="price"? findMin(itemKey): itemKey;
                  const boolMin = el.min!="";
                  const boolNumMin = parseFloat(num)>= parseFloat(el.min);
                  const boolMax = el.max!="";
                  const boolNumMax = parseFloat(num)<= parseFloat(el.max)
                  console.log(`${key} ${el.min} min`);
                  if (boolMin && boolNumMin && !boolMax){
                     return true
                  }
                  else if (boolMax && boolNumMax && !boolMin){
                     console.log(`${key} ${num} max`);
                     
                     return true
                  }
                  else if (boolMax && boolMin && boolNumMax && boolNumMin)
                     return true
                  else if (!boolMax && !boolMin)
                     return true
                                 }
               else {
                  return itemKey==el
               }
            })
         }
         //console.log({[key]:arr});
         
      }
      return arr
   }, [filter])
   return arrFilter
};