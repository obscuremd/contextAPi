import "./App.css"
import { BrowserRouter, Route, Routes } from 
"react-router-dom"
import Home from "./components/Home"
import Cart from "./components/pages/Cart"
import Product from "./components/pages/Product"
import Navbar from "./components/Navbar"
import { CartProvider } from "./components/context/CardContext"
import ProductDetails from "./components/pages/ProductDetails"


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/product/:id}" element={<ProductDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
