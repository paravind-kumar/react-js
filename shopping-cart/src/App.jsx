import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Products'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
