import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero section/Hero'
import City from './Components/Popular/City'
import { Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
   <Header/>
   <Hero/>
   <City/>

    </>
  )
}

export default App
