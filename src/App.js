import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./home.js";
import AvatarSelection from './avatarselection.js';
import Topics from './topics.js';
import NewsCard from './newscard.js';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/gaga' element={<NewsCard></NewsCard>}></Route>
      <Route path='/hehe' element={<Topics></Topics>}></Route>
      <Route path='/haha' element={<AvatarSelection></AvatarSelection>}></Route>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
