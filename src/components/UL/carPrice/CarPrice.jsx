import React from 'react';
import cls from "./carPrice.module.scss"

function CarPrice({price}) {
   return ( 
      <table className={cls.price}>
         <caption className={cls.title}>Цены</caption>
         <tbody className={cls.price__table}>
            <tr>
               <td className={cls.price__td}>1-2 суток</td>
               <td className={cls.price__td}>{price.d1_2}</td>
            </tr>
            <tr>
               <td className={cls.price__td}>3-6 суток</td>
               <td className={cls.price__td}>{price.d3_6}</td>
            </tr>
            <tr>
               <td className={cls.price__td}>от 7 суток</td>
               <td className={cls.price__td}>{price.d7}</td>
            </tr>
            <tr>
               <td className={cls.price__td}>залог</td>
               <td className={cls.price__td}>{price.pledge}</td>
            </tr>
         </tbody>
      </table>
   );
}

export default CarPrice;