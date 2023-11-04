import React from 'react';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Catalogue from './components/catalogue/catalogue';
import DetailsAliment from './components/details-aliment/details-aliment';
import AlimentCard from './components/aliment-card/aliment-card';
import SearchAliment from './components/search-aliment/search-aliment';


const App = () => {
  return (
    <div className="App flex flex-col bg-gradient-to-t from-mauve to-beige h-full justify-between m-0 p-0">
      <NavBar></NavBar>
      <Routes>
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/catalogue/:id' element={<DetailsAliment />} />
          <Route path='/search' element={<SearchAliment />} />
      </Routes>   
      <Footer></Footer>
    </div>
  );
}

export default App;
