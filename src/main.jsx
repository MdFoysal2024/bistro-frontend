import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './Routes/router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <HelmetProvider>

        <div >
          <RouterProvider router={router} />
        </div>

      </HelmetProvider>
    </AuthProvider>

  </StrictMode>,
)
