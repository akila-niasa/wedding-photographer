import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,  Routes } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutMe/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
