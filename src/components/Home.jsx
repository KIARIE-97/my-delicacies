import React from 'react'
import "./home.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ourDishes from "../assets/images/our dishes.png"

function Home() {


  return (
    <div className="homeNav">
        <div className='home-desc'>
            <h1>Welcome to sarah delicacies</h1>
            <p>🌟 A Feast for the Senses; <br />

Explore our diverse menu featuring a delectable selection of dishes from around the world. <br />
From succulent steaks to fresh seafood, vegetarian delights, and a wide range of tantalizing desserts, there's something for every palate. <br />
Pair your meal with our carefully curated wine and cocktail list to elevate your dining experience. <br /><br />
🧡 Experience Excellence <br />

Thank you for considering <span>sarah delicacies</span> for your dining experience. We look forward to serving you with the utmost dedication and creating moments to cherish. <br /><br />

📞 Reserve Your Table <br />~

Ready to explore our menu? Reserve your table now and experience the art of exceptional dining. <br /> <br />

<button >Reserve Now</button> <br /><br />

We can't wait to welcome you to <span>sarah delicacies</span>!
</p>
        </div>
        <div className="home-img">
            <img src={ourDishes}/>
        </div>
    </div>
  )
}

export default Home