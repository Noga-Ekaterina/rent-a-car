import React from 'react';
import cls from "./btn.module.scss"

function Btn({children, newCls, ...props}) {
   return (
      <button {...props} className={[cls.btn, newCls].join(" ")}>{children}</button>
   );
}

export default Btn;