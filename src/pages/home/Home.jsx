import React, { useState } from 'react';
import HomeBlock from './homeBlock/HomeBlock';
import cars from "../../API/cars.json"
import CarList from '../../components/carsList/CarsList';
import Filter from '../../components/filter/Filter';
import { useFilter } from '../../hoocs/useFilter';

function Home() {
   const [filter, setFilter] = useState({
      marca: [],
      year: {
         min: "",
         max: ""
      },
      motor:  {
         min: "",
         max: ""
      },
      horsepower: {
         min: "",
         max: ""
      },
      gasoline:[],
      price: {
         min: "",
         max: ""
      }
   });
   const carsFilter= useFilter(cars, filter)
   console.log(filter);
   return ( 
      <>
         <HomeBlock/>
         <h2>Наш <strong className="light">автопарк</strong></h2>
         <Filter cars={cars} filter={filter} setFilter={setFilter}/>
         <CarList cars={carsFilter}/>
      </>
   );
}

export default Home;