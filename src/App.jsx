import { useState } from 'react'
import './App.css'
import './components/header/Navigation'
import Navigation from './components/header/Navigation'
import Footer from './components/footer/Footer'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Shop from './components/shop/Shop'
import Cart from './components/bag/Cart'
import Checkout from './components/checkout/Checkout'
import NotFound from './components/home/NotFound'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navigation /><Home/><Footer /></>
    },
    {
      path: '/about',
      element: <><Navigation /><About /><Footer /></>
    },
    {
      path: '/product/:id',
      element: <><Navigation /><Shop /><Footer /></>
    },
    {
      path: '/cart',
      element: <><Navigation /><Cart /><Footer /></>
    },
    {
      path: '/checkout',
      element: <><Checkout /><Footer /></>
    },
    {
      path: '*',
      element: <><NotFound /></>
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
