import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Page1 from "./pages/Page1";
import {LoginPage} from "./pages/LoginPage";
function App() {
  return (
      <>
          <BrowserRouter>
              <div>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/page1" element={<Page1 />} />
                      <Route path="/Login" element={<LoginPage />} />
                  </Routes>
              </div>
          </BrowserRouter>
      </>
  );
}

export default App;
