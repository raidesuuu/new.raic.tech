import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.scss"
import App from './App.tsx'
import Header from '@components/Header.tsx'
import Footer from '@components/Footer.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <Footer />
    </BrowserRouter>

  </StrictMode>,
)
