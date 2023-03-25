import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';
import Add from './components/modal/add/add';
import { useEffect, useState } from 'react';

import Edit from './components/modal/edit/edit';
import { store } from './redux/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { counter, minuscounter } from './redux/action';
import Ecom from './components/ecom/ecom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fav from './components/fapage/favepage';
import Cartpage from './components/fapage/cartpage';
import Nav from './components/modal/delete/nav';

function App() {


  





  
 
  return (
    <BrowserRouter>

<div className="App">
     <Nav/>
   
    
    <Routes>
      <Route path="/fakestore" element={<Ecom/>}/>
      <Route path="/fav" element={<Fav />}/>
      <Route path="/cart" element={<Cartpage />}/>
    </Routes>
    </div>
  </BrowserRouter>
     
    
  );
}

export default App;
