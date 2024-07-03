import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Assistant from './views/Assistant';

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/assistant" element={<Assistant />} />
    </Routes>
  );
}

export default App;
