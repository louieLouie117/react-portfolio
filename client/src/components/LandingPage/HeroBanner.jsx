import React from 'react'
import { useState } from 'react'
import Footer from '../Footer';
import WorkExperience from './WorkExperience';



function HeroBanner(props) {

const [timeLabel, setTimeLabel] = useState("Hello");


window.onload = function() {

    const current = new Date();
    const time = current.getHours();
    console.log(time);

    if(time >= 0 && time <= 3){
      console.log("Hello Night Owl")
      setTimeLabel("Hello Night Owl");
      return;
    }

    if(time >= 4 && time <= 6){
      console.log("Hello Early Bird")
      setTimeLabel("Hello Early Bird");
      return;
    }

    if(time >= 7  &&time <= 11){
      console.log("Good Morning")
      setTimeLabel("Good Morning");
      return;

    }

    if(time >= 12  && time <= 17){
      console.log("Good Afternoon")
      setTimeLabel("Good Afternoon");
      return;

    }
  
    if(time >= 18 && time <= 23){
      console.log("Good Evening")
      setTimeLabel("Good Evening");
      return;

    }

}







  
  return (
    <div className="myHeader-container">
          <header>
            {/* <img src="/img/portfolioImg.png" alt=""/> */}

              
                    <div className="name-container">

                    <header>
                    <h2>{timeLabel},</h2>
                    <h3>my name is </h3>
                    <h1>Luis Cardona</h1>
                    {/* <p>LC Solutions</p> */}
                
                  </header>
                  
  
                  <img id="PortfolioImg" src="/img/PortfolioPhoto350.png" alt="" />
                  </div>
                  <footer>
                  <h2>I help businesses grow online.</h2>
               

                  </footer>

                  <div className='GridContainer'>
                    {/* <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">
                      <button>My Services</button>
                    </a> */}

                    {/* <button onClick={ContactMeHandler}>Contact me</button> */}

                    </div>
         

                

                                  
             

                


         </header>
        <WorkExperience></WorkExperience>


         <div>
         <ul  className='ServicesCard'>
                    <li>
                        {/* <p>I remember the first time I designed a website for a friend’s restaurant. Watching their business flourish online ignited my passion for web design and development. Since then, I’ve helped businesses establish their online presence and grow their brand.</p> */}

                        <p>Whether you need a new website, a redesign, or an app, I'm here to help. Reach out to me via call, text, email, or DM.</p>


                       
                    </li>
                </ul>
         </div>

         <Footer></Footer>
                  


     
        
    </div>

  )
}


export default HeroBanner