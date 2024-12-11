import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home, { ImageSlider } from './pages/home.jsx'
import Header from './components/header'

import Contact from './pages/contactUs.jsx'
import FAQs from './pages/faq.jsx'
import About from './pages/Aboutus.jsx'


function App() {
  const [count, setCount] = useState(0)

   const location = useLocation();

   const hideHeaderRoutes  = ['/worksyte','/register','/afterlogin'];

  return (
    <div> 
     {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      


      <Routes>
      
       <Route path='/' element={<Home/>} />
     
      <Route path='/contactus' element={<Contact/>} />
      <Route path='/faqs' element={<FAQs/>} />
      <Route path='/aboutus' element={<About/>} />
      
      
     
      </Routes> 
      
    </div>
      
       
    )
}

export default App
