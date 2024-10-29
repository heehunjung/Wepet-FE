import './style/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './style/theme';

import Home from './views/Home';
import Assistant from './views/Assistant';
import Hospital from './views/Hospital';
import Supplement from './views/Supplement';
import Chatbot from './global/Chatbot';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/Home" element={<Home />} />
        <Route path ="/Hospital" element={<Hospital/>}/>
        <Route path ="/assistant" element={<Assistant />} />
        <Route path ="/supplement" element={<Supplement />} />
        <Route path ="/Chatbot" element={<Chatbot />} />
      
      </Routes>
    </ChakraProvider>
  );
}

export default App;
