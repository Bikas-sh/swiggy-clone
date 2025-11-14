import React from 'react'
import Navbar from './component/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import placeOrder from './pages/PlaceOrder/placeOrder'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<placeOrder />} />
        </Routes>

      </div>
      <Footer />

    </>

  )
}

export default App
