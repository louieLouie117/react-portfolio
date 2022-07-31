import React, {useState} from 'react'

function WorkExperience(props) {

const [ToolsGarageSally, setToolsGarageSally] = useState(false);
const [ToolsTicketManagement, setToolsTicketManagement] = useState(false);
const [ToolsDeltaSportsBar, setToolsDeltaSportsBar] = useState(false);
const [ToolsJRlandscaping, setToolsJRlandscaping] = useState(false);
const [PaceBuilders, setPaceBuilders] = useState(false);
const [IbUpholstery, setIbUpholstery] = useState(false);
const [WeedingLee, setWeedingLee] = useState(false);
const [Pizzeria, setPizzeria] = useState(false);








const ToolsTechnologiesHandler = (e)=>{
  console.log("Tools", e.target.innerText)
  console.log("Tools", e.target.id)


  if(e.target.id === "GarageSallyId"){
        if(e.target.innerText === "Close"){
            setToolsGarageSally(false)
            e.target.innerText = "Tools and Technologies"
            return
          }else{
          setToolsGarageSally(true)
          e.target.innerText = "Close"
            return
      }

    }

    if(e.target.id === "TicketManagementId"){
      if(e.target.innerText === "Close"){
        setToolsTicketManagement(false)
        e.target.innerText = "Tools and Technologies"
        return
      }else{
      setToolsTicketManagement(true)
      e.target.innerText = "Close"
        return
    }
  }

    if(e.target.id === "DeltaSportsBarId"){
      if(e.target.innerText === "Close"){
        setToolsDeltaSportsBar(false)
        e.target.innerText = "Tools and Technologies"
        return
      }else{
      setToolsDeltaSportsBar(true)
      e.target.innerText = "Close"
        return
    }
  }


  if(e.target.id === "JRlandscapingId"){
    if(e.target.innerText === "Close"){
      setToolsJRlandscaping(false)
      e.target.innerText = "Tools and Technologies"
      return
    }else{
    setToolsJRlandscaping(true)
    e.target.innerText = "Close"
      return
  }
}


if(e.target.id === "PaceBuildersId"){
  if(e.target.innerText === "Close"){
    setPaceBuilders(false)
    e.target.innerText = "Tools and Technologies"
    return
  }else{
  setPaceBuilders(true)
  e.target.innerText = "Close"
    return
}
}


if(e.target.id === "IbUpholsteryId"){
  if(e.target.innerText === "Close"){
    setIbUpholstery(false)
    e.target.innerText = "Tools and Technologies"
    return
  }else{
  setIbUpholstery(true)
  e.target.innerText = "Close"
    return
}
}


if(e.target.id === "WeedingLeeId"){
  if(e.target.innerText === "Close"){
    setWeedingLee(false)
    e.target.innerText = "Tools and Technologies"
    return
  }else{
  setWeedingLee(true)
  e.target.innerText = "Close"
    return
}
}

if(e.target.id === "PizzeriaId"){
  if(e.target.innerText === "Close"){
    setPizzeria(false)
    e.target.innerText = "Tools and Technologies"
    return
  }else{
  setPizzeria(true)
  e.target.innerText = "Close"
    return
}
}

}

  

  return (
    <div >
      <div className="projectsPage-container">
        <h1>Work Experience</h1>


        <main>
                <picture class="headerImage-container">
                    <source media="(min-width: 1300px)" srcset="/img/desktopImg.png" />
                    <source media="(min-width: 725px)" srcset="/img/tabletImg.png" />
                    <img src="/img/mobileImgLarge.png" alt="" />
                </picture>
        
                <div className="cardItems">
                  <ul>
                    <li>
                            <header>
                              <h2>Garage Sally</h2>
                            </header>
                            <img src="img/projects/garageSally.png" alt=''/>

                                  <div  className="tools-container" style={{ display: ToolsGarageSally ? "grid" : "none"}}>
                                    <div id="icon-container">

                                        <div><img  src="/img/Icons/iconXD.png" alt="test"/></div>
                                        <p>Mockup UX/UI</p>
                                        <div><img  src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                        <p>Responsive Layout</p>

                                        <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                        <p>Behavior</p>

                                        <div><img  src="/img/Icons/iconCSharp.png" alt=""/></div>
                                        <p>Backend Logic</p>

                                        <div><img  src="/img/Icons/iconNet.png" alt=""/></div>
                                        <p>Framework</p>
                                        
                                        <div><img  src="/img/Icons/iconMySql.png" alt=""/></div>
                                        <p>Date Base</p>   
                                    </div>

                                  <aside>
                                  <button>Watch Video</button>
                                  <button>Website</button>
                                </aside>

                                </div>
                             

                                <footer>                                  

                              <button id='GarageSallyId' onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button>
                           



                            </footer>
                    </li>

                    <li>
                      <aside>
                        <h2>Ticket Management</h2>
                      </aside>

                      <img src="img/projects/progresslyPage.png" alt=''/>
                      <div  className="tools-container" style={{ display: ToolsTicketManagement ? "grid" : "none"}}>                         
                                    <div id="icon-container">

                                        <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                        <p>Mockup UI</p>

                                        <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                        <p>Responsive Layout</p>

                                        <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                        <p>Behavior</p>

                                        <div><img src="/img/Icons/iconCSharp.png" alt=""/></div>
                                        <p>Backend Logic</p>

                                        <div><img src="/img/Icons/iconNet.png" alt=""/></div>
                                        <p>Framework</p>
                                        
                                        <div><img src="/img/Icons/iconMySql.png" alt=""/></div>
                                        <p>Date Base</p>   
                                    </div>
                                <aside>
                                  <button>Github</button>
                                  <button>Website</button>
                                </aside>
                                </div>
                            

                            <footer>
                              <button id="TicketManagementId" onClick={(e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                            </footer>
                                            
                      
                    </li>

                 

                    <li>

                        <aside>
                            <h2>Delta Sports Bar</h2>
                        </aside>
                        <img src="img/projects/deltaSportsBar.png" alt=''/>
                                      <div className="tools-container"  style={{ display: ToolsDeltaSportsBar ? "grid" : "none"}}>
                                      <div id="icon-container">
                                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                                <p>Mockup UX/UI</p>

                                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                                <p>Responsive Layout</p>

                                                <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                                <p>Behavior</p>
                                            </div>
                                            
                                    <aside>
                                      <button>Website</button>
                                    </aside>
                                    </div>
                                    <footer>                                 

                                    <button id="DeltaSportsBarId" onClick={ (e) => ToolsTechnologiesHandler(e)} >Tools and Technologies</button> 

                                </footer>
                                                
                          
                        </li>


                        <li>

                        <aside>
                        <h2>JR Landscaping</h2>
                        </aside>
                        <img src="img/projects/JRlandscaping.png" alt=''/>
                        <div className="tools-container" style={{ display: ToolsJRlandscaping ? "grid" : "none"}}>
                          <div id="icon-container">
                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Mockup UX/UI</p>
                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                <p>Responsive Layout</p>
                                <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                <p>Behavior</p>
                            </div>
                                    <aside>
                                      <button>Website</button>
                                    </aside>
                                  </div>

                                <footer>                                                                          
                                    <button id="JRlandscapingId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                                </footer>
                        </li>

                        

                        <li>

                        <aside>
                        <h2>Pace Builders</h2>
                        </aside>
                        <img src="img/projects/PaceBuilders.png" alt=''/>
                        <div className="tools-container" style={{ display: PaceBuilders ? "grid" : "none"}}>
                          <div id="icon-container">
                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Mockup UX/UI</p>
                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                <p>Responsive Layout</p>
                                <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                <p>Behavior</p>
                            </div>
                                    <aside>
                                      <button>Website</button>
                                    </aside>
                                  </div>

                                <footer>                                                                          
                                    <button id="PaceBuildersId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                                </footer>
                        </li>
                  

                   <li>

                        <aside>
                        <h2>IB Upholstery</h2>
                        </aside>
                        <img src="img/projects/IbUpholstery.png" alt=''/>
                        <div className="tools-container" style={{ display: IbUpholstery ? "grid" : "none"}}>
                          <div id="icon-container">
                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Mockup UX/UI</p>
                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                <p>Responsive Layout</p>
                                <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                <p>Behavior</p>
                            </div>
                                    <aside>
                                      <button>Website</button>
                                    </aside>
                                  </div>

                                <footer>                                                                          
                                    <button id="IbUpholsteryId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                                </footer>
                        </li>

                      <li>

                        <aside>
                        <h2>Weeding Lee</h2>
                        </aside>
                        <img src="img/projects/WeddingLee.png" alt=''/>
                        <div className="tools-container" style={{ display: WeedingLee ? "grid" : "none"}}>
                          <div id="icon-container">
                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                            <p>Mockup UX/UI</p>
                            </div>
                                 
                                  </div>

                                <footer>                                                                          
                                    <button id="WeedingLeeId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                                </footer>
                        </li>

                        
                      <li>

                        <aside>
                        <h2>Pizzeria</h2>
                        </aside>

                        <img src="img/projects/Pizzeria.png" alt=''/>
                        <div className="tools-container" style={{ display: Pizzeria ? "grid" : "none"}}>
                              <div id="icon-container">
                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Mockup UX/UI</p>
                                  
                              </div>
                                    
                        </div>

                                <footer>                                                                          
                                    <button id="PizzeriaId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                                </footer>
                        </li>

                 
                    <li></li>
                  </ul>
                  </div>

                  </main>


                  </div>
           

                

    </div>
  )
}


export default WorkExperience
