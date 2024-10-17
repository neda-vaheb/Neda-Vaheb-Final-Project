import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import Login from '../Components/template/Login'
import Register from '../Components/template/Register'
import PageNotFound from '../pages/404'

function Router() {
    
  return (
    <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='*' element={<PageNotFound/>}/>



    </Routes>
      
    
  )
}

export default Router
