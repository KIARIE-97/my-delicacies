import React from 'react'
import "./services.css"
import ricedish from "../assets/images/riceDishes.png"
import chicken from "../assets/images/chicken.png"
import potato from "../assets/images/potato.png"
import chips from "../assets/images/chip and dip.png"
import eggs from "../assets/images/eggs.png/"
import pizza from "../assets/images/pizza.jpeg"

function Services() {
  return (
    <div>
   <div className="dishes">
    <div className="dish__type">
        <h1>🍚Our Rice, The Heart of Every Dish🍚</h1>. <br />  <br />  
      <p>
At sarah delicacies, we take our rice and mostly customer satisfaction seriously. <br /> 
Each grain is carefully selected, cooked to perfection, and seasoned with love. <br />
Whether it's our fluffy basmati rice, aromatic jasmine rice, or savory risotto, our commitment to quality and flavor shines through in every bite. <br />
 We believe that great rice is the foundation of a memorable meal, and we're proud to serve you the best. <br />
 Enjoy the harmony of flavors and textures that our rice brings to your plate.</p>
    </div>
    <div className="img__dish">
     <img src={ricedish}/>
    </div>
    </div>

    <div className="dishes">

    <div className="img__dish">
     <img  src={eggs} width={"50%"}/> 
     </div>
     
    <div className="dish__type">
        <h1>🥚The Versatile World of Proteins 🍗</h1> <br /> <br />
      <p>
At sarah delicacies, we understand that protein is the heart of a satisfying meal. <br />
 While our menu showcases a diverse range of proteins, let's take a moment to appreciate the incredible versatility of eggs and other protein sources. 🍳
<br />
Eggs 🥚: <br />
🥚 Whether you like them sunny-side up, scrambled, or poached, eggs are the ultimate breakfast delight. <br />
They're also a key ingredient in many of our dishes, lending their unique creamy texture and rich flavor.
</p>
    </div>
    
    </div>
    
    <div className="dishes">
    <div className="dish__type">
        <h1>🥔 Our Love Affair with Potatoes 🥔</h1><br /> <br /> <br /> 
      <p>

At sarah delicacies, we believe that potatoes are more than just a side dish; 
they're a culinary canvas waiting to be transformed into delectable delights. <br />
From crispy French fries to creamy mashed potatoes, these versatile tubers play a starring role in many of our dishes. <br />
We source the finest spuds to ensure that every bite is a celebration of the humble, yet incredibly versatile, potato. <br />
Join us in savoring the magic of this beloved ingredient in every dish we create.</p>
    </div>
    <div className="img__dish">
     <img src={potato}/>
    </div>
    </div>
 <div className="final__text">
  🍗 Our commitment to providing a well-rounded dining experience.  <br />
 We offer a plethora of protein choices, from succulent meats like steak and chicken to plant-based options like tofu and legumes for our vegetarian and vegan guests. <br />

No matter your protein preference, we're dedicated to creating flavorful, memorable dishes that celebrate the diversity of ingredients. <br />
Dive into a world of culinary possibilities at sarah delicacies and savor the delicious union of proteins with every bite! 🍽️🌟
</div>
 
    <div className="final__dishes">
      <img src={chicken} width="350px"/>
      <img src={chips} width="300px"/>
      <img src={pizza} width="300px"/>
    </div>
    </div>
  )
}

export default Services