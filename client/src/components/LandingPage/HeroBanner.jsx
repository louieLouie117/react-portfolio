import React from 'react'


function HeroBanner(props) {


  
  return (
    <div className="myHeader-container">
        <header>
                <div className="name-container">
                <header>
                <h3>Hello, my name is </h3>
                <div>
                <h1>Luis Cardona</h1>

                <p>Full-Stack Development</p>
                </div>
            

            </header>
            <img src="/img/portfolioImg.png" alt=""/>
            </div>
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
