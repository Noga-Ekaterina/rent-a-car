import React from 'react';
import cls from "./imgAndText.module.scss"

function ImgAndText({img, text, newClass}) {
   return (
       <div className={[cls.imgAndText, newClass].join(' ')}>
          <img src={img} className={cls.imgAndText__img} />
          <p className={cls.imgAndText__text}>{text}</p>
       </div>
   );
}

export default ImgAndText;