// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NookiForest from './components/NookiForest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nooki-forest" element={<NookiForest />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
