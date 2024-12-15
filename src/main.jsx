import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProductDetails from './Components/ProductDetails'
import Navbar from './Components/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <ProductDetails />
  </StrictMode>,
)
