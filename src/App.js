import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home.js";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/lala' element={<Home></Home>}></Route>
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
