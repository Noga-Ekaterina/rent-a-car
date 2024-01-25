import React from 'react';
import Header from './components/UL/header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header/>
         </BrowserRouter>
      </div>
   );
}

export default App;
