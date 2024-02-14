import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//import ReserveNow from './components/ReserveNow'

import './App.css'

function App() {
  
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/services" element= {<Services/>}/>
     <Route path="/contactUs" element= {<ContactUs/>}/>
    
     </Routes>
     <Footer/>
     </Router>
    </>
  )
}

export default App
