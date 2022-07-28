import React from 'react'

function HeroBanner(props) {

  
  return (
    <div className="myHeader-container">
        <header>
                <div   div className="name-container">
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
                <li><p>Test Skill</p></li>
                <li><p>Test Skill</p></li>
                <li><p>Test Skill</p></li>
                <li><p>Test Skill</p></li>
                    
                    {/* <li><p>{myProcess.title}</p></li> */}
            {/* );})} */}

          


          </ul>
            </div>

        
    </div>

  )
}


export default HeroBanner
