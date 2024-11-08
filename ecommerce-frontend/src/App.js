import React, { useState } from 'react';
import ProductList from './components/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';

function App() {
    const [view, setView] = useState('home'); // 'home' or 'auth'

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
