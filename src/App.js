import './style/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Assistant from './views/Assistant';
import Hospital from './views/Hospital';
import Supplement from './views/Supplement';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Hospital" element={<Hospital />} />
      <Route path="/assistant" element={<Assistant />} />
      <Route path="/supplement" element={<Supplement />} />
    </Routes>
  );
}

export default App;
