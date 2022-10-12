import React from 'react'
import Footer from './component/Footer'
import Header from './component/Header'
import Service from './component/Service/Service'
import Product from './component/Product/Product'
import Home from './component/Home/Home'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App = () => {
  return (
    <>
     <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/service" element={ <Service/> } />
      </Routes>
    <Footer/>
    </BrowserRouter>
 
    
 

    </>
  )
}

export default App