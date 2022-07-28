import React from 'react'

function ToolsTechnologies(props) {
  return (
    <div className="devTools-container">
        <h2>Tools and Technologies</h2>
            
            <section>
            <div className="blueLine"></div>

            <ul>
                    <li>
                    <h2>Languages</h2>
                    <h3>JavaScript, and ...</h3>
                    </li>

                    <li>
                    <h2>Database</h2>
                    <h3>This is the databse items</h3>
                    </li>

                    <li>
                    <h2>Version Control</h2>
                    <h3>Version Control</h3>
                    </li>

                    <li></li>
                </ul>
              </section>

              
            <section>
            <div className="blueLine"></div>

            <ul>
                    <li id="frameworks">
                    <h2>Frameworks</h2>
                    <h3>React, Express,</h3>
                    </li>

                

                </ul>
            {/* {myInfo.map((myInfo)=>{
            return(
                <ul>
                    <li id="frameworks">
                    <h2>Languages</h2>
                    <h3>{myInfo.frameworksLibraries}</h3>
                    </li>

                

                </ul>

        );})} */}

            </section>


              
    </div>
  )
}


export default ToolsTechnologies
