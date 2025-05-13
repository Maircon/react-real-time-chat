import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AuthProdiver from './context/AuthProvider.jsx'
import SocketProvider from './context/SocketProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProdiver>
        <SocketProvider>
          <App />
        </SocketProvider>
      </AuthProdiver>
    </BrowserRouter>
  </StrictMode>,
)
