import React from 'react';
import Header from './components/UL/header/Header';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Header/>
         </BrowserRouter>
         <Home/>
      </div>
   );
}

export default App;
