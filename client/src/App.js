import React from "react";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
import List from './pages/List/List.jsx';
import Home from './pages/Home/Home.jsx';
import Hotel from './pages/Hotel/Hotel.jsx';
import Login from "./pages/login/Login.jsx";
// import Listpage from './pages/List/Listpage.jsx';
import Register from "./pages/Auth/Register.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/hotels' element={<List/>}></Route>
        <Route exact path='/hotels/:id' element={<Hotel/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/register' element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}


