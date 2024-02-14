import React from 'react'
import "./footer.css"
import facebook from "../assets/images/facebook.png"
import insta from "../assets/images/insta.png"
import twitter from "../assets/images/twitter.png"

function Footer() {
  return (
    <div className='footer__navs'>
     <div className="footer__links">
      <h3>our platforms</h3>
      <ul className="socialmedia">
        <li><img src={facebook}/></li>
        <li><img src={insta} width = "25px"/></li>
        <li><img src={twitter} width = "25px"/></li>
      </ul>
     </div>
     
     
     
     
      <div className="footer__below">
        <div className="footer__copyright">
          <p>
            @{new Date().getFullYear()} made with <span role="img" aria-label="heart">❤️</span>.All rights reserved. 
          </p>
        </div>
    
          
       
      </div>
    </div>
  )
}

export default Footer