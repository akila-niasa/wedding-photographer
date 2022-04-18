import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,  Routes } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Login from './Pages/Login/Login';
import CheckOut from './Pages/CheckOut/CheckOut';
import Registers from './Pages/Registers/Registers';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import { createContext, useState } from 'react';
import useData from './hooks/useData';




function App() {
  
  return (
    <div className="App">
      <Header/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutMe/>}/>
      <Route path='/blogs' element={<Blogs/>}/>
      <Route path='/checkout/:id' element={<RequireAuth>
        <CheckOut/>
      </RequireAuth>}/>
     
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Registers/>}/>
      <Route path='*' element={<NotFound/>}/>

      </Routes>
    
     
    </div>
  );
}

export default App;
