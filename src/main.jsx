import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './Footer.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>,
)
