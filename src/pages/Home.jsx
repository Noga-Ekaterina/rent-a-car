import React from 'react';
import HomeBlock from '../components/UL/homeBlock/HomeBlock';
import CarList from '../components/carsList/CarsList';

function Home() {
   return ( 
      <div>
         <HomeBlock/>
         <h2>Наш <strong className="light">автопарк</strong></h2>
         <CarList/>
      </div>
   );
}

export default Home;