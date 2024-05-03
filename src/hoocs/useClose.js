import {useEffect} from "react";

export const useClose = (ref, isOpen, setIsOpen, vw=0) => {

   const handleOutsideClick = (e) => {
      if (ref.current && !ref.current.contains(e.target) && window.innerWidth > vw) {
         setIsOpen(false);
      }
   };

   useEffect(() => {
      if (isOpen) {
         document.addEventListener('mousedown', handleOutsideClick);
      } else {
         document.removeEventListener('mousedown', handleOutsideClick);
      }

      return () => {
         document.removeEventListener('mousedown', handleOutsideClick);
      }
   }, [isOpen])

}