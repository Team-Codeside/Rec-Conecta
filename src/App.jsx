import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Login from './pages/Login/login'
import Footer from './components/footer/footer'


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      
    </Routes>
   </BrowserRouter>
  )
}

export default App
