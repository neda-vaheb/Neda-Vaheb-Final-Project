import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import PageNotFound from '../pages/404'
import Login from '../pages/Login'
import Register from '../pages/Register'

import { getCookie } from '../utiles/cookie'
import ProductPage from '../pages/ProductPage'

function Router() {
  const token = getCookie("token"); 
  
  return (
    <Routes>
         <Route
          path="/"
          element={token ? <ProductPage /> : <Navigate to="login" />}
        />
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<PageNotFound/>}/>

    </Routes>
      
    
  )
}

export default Router
