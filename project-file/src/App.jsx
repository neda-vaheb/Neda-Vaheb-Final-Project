import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Router from './Router/Router'

function App() {

  return (
    <BrowserRouter>
    <Router/>
    <ReactQueryDevtools/>
    </BrowserRouter>
   
  )
}

export default App
