import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Girls from './miniproducts/Girls';
import Women from './miniproducts/Women';
import Men from './miniproducts/Men';
import Dector from './miniproducts/Dector';
import Beauty from './miniproducts/Beauty';
import Cart from './pages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/women' element={<Women/>}/>
        <Route path='/men' element={<Men/>}/>
        <Route path='/dector' element={<Dector/>}/>
        <Route path='/beauty' element={<Beauty/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

      <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
