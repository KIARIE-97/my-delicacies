import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='parentNav'>
      <Link to= "/">Home</Link>
      <Link to= "/Services">servives</Link>
      <Link to= "/contactUs">contacts</Link>
    </div>
  )
}

export default Navbar