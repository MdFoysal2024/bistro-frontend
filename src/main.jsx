import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './Routes/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'



const queryClient = new QueryClient()


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>

      <QueryClientProvider client={queryClient}>

        <HelmetProvider>
          <div >
            <RouterProvider router={router} />
          </div>
        </HelmetProvider>

      </QueryClientProvider>

    </AuthProvider>

  </StrictMode>,
)
