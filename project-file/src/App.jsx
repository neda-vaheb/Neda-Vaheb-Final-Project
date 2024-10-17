
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from './Router/Router'
import defaultOptions from './configs/reactQuery.js'

function App() {
  const queryClint = new QueryClient({defaultOptions});
  return (
    <QueryClientProvider client={queryClint}>
    <BrowserRouter>
    <Router/>
    <ReactQueryDevtools/>
    </BrowserRouter>
    </QueryClientProvider>
   
  )
}

export default App
