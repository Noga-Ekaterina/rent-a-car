export function findMin(obj) {
   let min = Number.MAX_VALUE; // Устанавливаем начальное значение min как самое большое возможное число
   for (let key in obj) {
      if (obj[key] < min) {
         min = obj[key];
      }
   }
   return min;
}