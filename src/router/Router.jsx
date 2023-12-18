import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'

import SingleProduct from '../pages/SingleProduct'
import Cart from '../pages/Cart'

const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='shop/:id' element={<SingleProduct/>}/>
        <Route path='cart' element={<Cart/>}/>
    </Routes>
    </>
  )
}

export default Router