import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import PageNotFound from '../pages/404'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
import Register from '../pages/Register'

import { getCookie } from '../utiles/cookie'

function Router() {
  const cookie =getCookie();
  return (
    <Routes>
        <Route path='\' element={cookie ? <Login/> : <Register/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>

        <Route path='dashboard' element={ cookie ? <Dashboard/> :<Register/>}/>
        <Route path='*' element={<PageNotFound/>}/>

    </Routes>
      
    
  )
}

export default Router
