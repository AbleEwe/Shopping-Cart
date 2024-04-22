import './App.css';
import { ItemList } from './components/ItemList';
import { Navbar } from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ShoppingCart } from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemList/>}/>
        <Route path="/cart" element={<ShoppingCart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
