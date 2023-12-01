import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Login from './pages/Login/login'
import Footer from './components/footer/footer'
import Tabs from './components/tabs/Tab'
import Cadastro from './pages/Cadastro/Cadastro'
import ForgotPassword from './pages/forgot password/ForgotPasswor'


function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/dashboard/new-event' element={<Tabs controler={"NewEvents"}/>}/>
      <Route path='/dashboard/Subscribes' element={<Tabs controler={"Subscribes"} />}/>
      <Route path='/dashboard/my-events' element={<Tabs controler={"MyEvents"}/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
