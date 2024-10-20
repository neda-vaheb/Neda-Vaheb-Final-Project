import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from '../pages/ProductList'

import PageNotFound from '../pages/404'
import Auth from '../pages/Auth'
import Dashboard from '../pages/Dashboard'

function Router() {
    
  return (
    <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='*' element={<PageNotFound/>}/>



    </Routes>
      
    
  )
}

export default Router
