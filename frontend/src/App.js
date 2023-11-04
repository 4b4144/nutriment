import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Catalogue from './components/catalogue/catalogue';
import DetailsAliment from './components/details-aliment/details-aliment';
import AlimentCard from './components/aliment-card/aliment-card';


const App = () => {
  return (
    <div className="App bg-beige max-h-screen m-0 p-0">
      <NavBar></NavBar>
      <Routes>
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/catalogue/:id' element={<DetailsAliment />} />
      </Routes>   
      <Footer></Footer>
    </div>
  );
}

export default App;
