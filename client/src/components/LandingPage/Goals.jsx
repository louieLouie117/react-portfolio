import React from 'react'

function Goals(props) {

  
  return (
    <div>
        {/* {(() =>{
                    if (window.innerWidth < "750") {
                                     return( */}
            <main>
            <div className="myFocus-container">
            <h1>My Specializations</h1>
            <ul>  
                
                    <li>
                    <h2>Design to code.</h2>
                    <p>HTML and CSS have become part of my intuition, and I can translate any design into code no matter how simple or complex the design is. I love translating design into code since it allows me to use both creativity and logic to develop any UI need.</p>

                    </li>

                    <li>
                      <h2>SPA and PWA</h2>
                      <p>I love the structure and complexity that SPA development comes with. SPA incress productivity when developing, debugging, and maintaining the website.</p>

                    </li>

                    
                    <li>
                      <h2>Mobile First</h2>
                      <p>Mobile device are the in the hands of many users. That is why my focus is mobile-first. To keep the page simple, concise and increases the page load speed on mobile devices. Using CSS Grid, Flex, and the Box Modle I insure that all content is pixel perfect and legible.</p>

                    </li>

                    <li>
                      <h2>Interactivity</h2>
                      <p>I love the complexity of making a website interactive. I always ask myself how can I get the user to use their thumbs or mouse to interact with the content.</p>

                    </li>

                    <li>
                      <h2>Database</h2>
                      <p>Collecting data and rendering it back to the user opens the door to endless possibilities for website/webapps. I always ask myself, what can I collect form a user to; help them in life or connect them with others.</p>
                    </li>
                    

                    <li>
                      <h2>Session and Cookies</h2>
                      <p>Cookies are a very powerful tool. I use this tool to keep track of what the user is interacting with on the website and enhance the user experience.</p>

                    </li>

                    <li>
                      <h2>Readability</h2>
                      <p>I place an extra efficacy on readability. To make sure it is enjoyable and pleasing to the eyes. At a glance, the user must understand the big picture and spark interest to read more.</p>

                    </li>

                    
                    <li>
                      <h2>Behavior on db</h2>
                      <p>Adding animation on a static website is simple and has become part of my intuition. Adding animation to a website that is rendering a collection of data is complex and I love the complexity since it challenges me.</p>

                    </li>

                              

                    <li>
                      <h2>Responsive Layout</h2>
                      <p>Larger screens have more real-estate and allow users to be more productive. When I am designing or developing a UI for tablets and desktops, my focus is on making the user more productive.</p>
                    </li>

                    <li>
                      <h2>From Validation</h2>
                      <p>My focus when it comes to forms are make it clear, intuitive and informative. A user must a good esperance while filing out the from. Validation on forms are also important and help keep the user informed.</p>
                    </li>


                
                </ul>
                <button>See All</button>

                {/* <ul>  
                {myProcess.map((myProcess)=>{ 
                if(myProcess.category === "MyFocus")
                return(       
                    // <li  id={myProcess._id +"list"}>
                    <h2 id={myProcess._id} onClick={(e)=>FocusItem(e)}>{myProcess.title}</h2>
                    <p onChange={firstItem}  id={myProcess._id +"text"}>{myProcess.summary}</p>
                    

                    </li>
                );})}
                

                
                </ul> */}
            </div>

            </main>    

{/* )}
})()} */}


    </div>
  )
}


export default Goals
