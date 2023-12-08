import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar'
import Home from './pages/home/home'
import Login from './pages/Login/login'
import Footer from './components/footer/footer'
import Tabs from './components/tabs/Tab'
import Cadastro from './pages/Cadastro/Cadastro'
import ForgotPassword from './pages/forgot password/ForgotPasswor'
import Sobre from './pages/sobre/sobre'
import Perfil from './pages/Perfil/perfil'
import Evento from './pages/Evento/Evento'
import{UserProvider} from './context/UserContext'
import Message from './components/msg/message'





function App() {
  return (
   <BrowserRouter>
   <UserProvider>
   <Message/>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/cadastro' element={<Cadastro/>}/>
      <Route path='/dashboard/new-event' element={<Tabs controler={"NewEvents"}/>}/>
      <Route path='/dashboard/Subscribes' element={<Tabs controler={"Subscribes"} />}/>
      <Route path='/dashboard/my-events' element={<Tabs controler={"MyEvents"}/>}/>
      <Route path='/Perfil' element={<Perfil/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
      <Route path='/Evento/:id' element={<Evento/>}/>
    </Routes>
    </UserProvider>
   </BrowserRouter>
  )
}

export default App
