import './style/App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './style/theme'; // 만든 테마 파일 경로에 맞게 수정

import Home from './views/Home';
import Assistant from './views/Assistant';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/assistant" element={<Assistant />} />
      </Routes>
    </ChakraProvider>

  );
}

export default App;
