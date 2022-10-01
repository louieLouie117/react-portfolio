import React from 'react'
import { useState } from 'react'



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

               



                {(() =>{
                if (window.innerWidth < "550") {
                  return(
                    <div className="name-container">

                    <header>
                    <h2>{timeLabel},</h2>
                    <h3>my name is </h3>
                    <h1>Luis Cardona</h1>
  
                  <p>Full-Stack Developer.</p>
  
                  </header>
  
                  <img id="PortfolioImg" src="/img/portfolioImg.png" alt="" />
                  </div>

                    
                    )}
                    })()}
                                    {(() =>{
                if (window.innerWidth > "751") {
                  return(
                    <div className="name-container">

                    <header>
                    <h2>{timeLabel},</h2>
                    <h3>my name is </h3>
                    <h1>Luis Cardona</h1>
                    <img id="PortfolioImg" src="/img/portfolioImg.png" alt=""/>
  
                  <p>Full-Stack Developer.</p>
  
                  </header>
  
                  </div>

                    
                    )}
                    })()}


         </header>

      
        <div className="mySkills-container">
              <h1>My Skills</h1>
            


          <ul>
            {/* {myProcess.map((myProcess)=>{ 
            if(myProcess.category === "MySkills")
            return(   */}
                <li><p>Problem-solving</p></li>
                <li><p>Critical Thinking</p></li>
                <li><p>Creative Thinker</p></li>

                <li><p>Communication</p></li>
                <li><p>Attention to detail</p></li>
                <li><p>People skills</p></li>

                <li><p>Public Speaking</p></li>
                <li><p>Self-motivated</p></li>
                <li><p>Charismatic</p></li>

                <li><p>Leadership</p></li>
                <li><p>Time Management</p></li>
                <li><p>Teamwork</p></li>

                <li><p>Intuition</p></li>
                <li><p>Optimistic</p></li>
                <li><p>Patient</p></li>

      



                    
                    {/* <li><p>{myProcess.title}</p></li> */}
            {/* );})} */}

          


          </ul>
      </div>
     
        
    </div>

  )
}


export default HeroBanner
