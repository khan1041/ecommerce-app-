


import React, { useState } from 'react'
import Navbar from './page/Navbar'
import ShowItems from './page/ShowItems'
import { productItems } from './Items'
import {Routes,Route, useLocation, createBrowserRouter, RouterProvider, UNSAFE_RemixErrorBoundary } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ProductDetails from './page/ProductDetails'
import SearchItems from './page/SearchItems'
import Cart from './page/Cart'
import Slider from './page/Slider'
import ProductBrand from './page/ProductBrand'
import BestUser from './page/BestUser'
import Footer from './page/Footer'
import Login from './page/Login'
import Singup from './page/Singup'
import About from './page/About'

function App() {
  const [data,setdata]=useState([...productItems])
  const [cart,setCart]=useState([])
  const location = useLocation();
  const hideNavbarFooter = [ "/login", "/register"].includes(
    location.pathname
  );
  
  return (
    <div>
   {!hideNavbarFooter&&<Navbar cart={cart} setdata={setdata}  />}  

 {location.pathname=="/"&&<ProductBrand/>}

    <div>


    </div>

    <Routes>
    <Route  path="/details/:id" element={<ProductDetails />} />
    <Route  path="/search/:term" element={<SearchItems  cart={cart} setCart={setCart} />} />
    <Route  path="/register" element={<Singup/>} />
    <Route  path="/login" element={<Login/>} />
    <Route  path="/about" element={<About/>} />

    <Route path='/cart'  element={<Cart cart={cart} setCart={setCart}/>}/>
    <Route  path="/" element={<ShowItems items={data} cart={cart} setCart={setCart}/>

   
} />

  </Routes>  
 {location.pathname=="/"&&<Footer/>}
      
    </div>
  )
}

export default App

