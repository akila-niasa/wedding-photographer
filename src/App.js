import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Routes } from 'react-router-dom';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Routes>
        <Router/>
      </Routes> */}
      <Footer/>
    </div>
  );
}

export default App;
