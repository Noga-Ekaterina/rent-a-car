import React from 'react';
import Header from './components/UI/header/Header';
import { BrowserRouter } from 'react-router-dom';
import RoutesApp from './components/RoutesApp';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header/>
            <RoutesApp/>
         </BrowserRouter>
      </div>
   );
}

export default App;
