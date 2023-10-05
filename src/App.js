import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar"
import Home from './Components/Home';
import Location from './Components/Location';
import ParkingSpot from './Components/ParkingSpot';
import MakeParkingAdmin from './Components/MakeParkingAdmin';
import CartList from './Components/CartList';
import Login from './Components/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

// Import the 'list' data
import list from './Components/data';

function App() {
  // Define state variable 'cart' and its setter function 'setCart' using useState hook
  const [cart, setCart] = useState([]);
  
  // Function to add an item to the cart
  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  return (
    <Router>      
      <Navbar/>:
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Location" element={<Location />} />
        {/* Pass the 'list' data as a prop to the ParkingSpot component */}
        <Route path="/ParkingSpot" element={<ParkingSpot addToCart={addToCart} list={list} />}/>
        <Route path="/MakeParkingAdmin" element={<MakeParkingAdmin />} />
        <Route path="/CartList" element={<CartList Cart={cart} />} />
      </Routes>
    </Router>
  );
}

export default App;
