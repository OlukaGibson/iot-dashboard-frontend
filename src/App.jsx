import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/pages/HomeScreen';
import Computers from './components/pages/Computers';
import Services from './components/pages/Services';
import Accessories from './components/pages/Accessories';
import Explore from './components/pages/Explore';
import Computerdetails from './components/Computerdetails';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />

        <Route path="/computers" element={<Computers />} />
        <Route path="/services" element={<Services />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/computers/:id" element={<Computerdetails />} />
      </Routes>
    </Router>
  );
};

export default App;
