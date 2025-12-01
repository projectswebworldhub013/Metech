import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import About from './pages/About'
import Privacy from './pages/Privacy'
import Term from './pages/Term'
import Contact from './pages/Contact'
import Showcase from './pages/Showcase'
import Engineering from './pages/Engineering'
import Service from './pages/Service'
import Products from './pages/Products'
import ServiceDetail from './pages/ServiceDetail'
import ProductDetail from './pages/ProductDetail'
import FloatingButtons from "./components/FloatingButtons"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/showcase' element={<Showcase/>}/>
    <Route path='/engineering' element={<Engineering/>}/>
    <Route path='/services' element={<Service/>}/>
    <Route path='/services/:slug' element={<ServiceDetail/>}/>
    <Route path='/products' element={<Products/>}/>
      <Route path='/products/:slug' element={<ProductDetail/>}/>
    <Route path='/privacy&policy' element={<Privacy/>}/>
    <Route path='/term&condition' element={<Term/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <FloatingButtons/>
    <Footer/>
    </BrowserRouter>
  )
}

export default App