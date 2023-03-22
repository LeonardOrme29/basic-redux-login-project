import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import Layout from './components/Layout.js'
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path='home' element={<Home/>}/>
          <Route index element={<Home/>}/>
          <Route path='login' element={<MainSection/>}/> 
          </Route>
        </Routes>
      </BrowserRouter>
    </>
   
  );
}

export default App;
