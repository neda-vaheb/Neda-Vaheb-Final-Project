
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
