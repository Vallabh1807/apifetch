import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import CreateProduct from '../pages/CreateProduct'
import SingleProduct from '../pages/SingleProduct'

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<SingleProduct />} />
        <Route path='/create-product' element={<CreateProduct />} />
      </Routes>
    </div>
  )
}

export default MainRouter