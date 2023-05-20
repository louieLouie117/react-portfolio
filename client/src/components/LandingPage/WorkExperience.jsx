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


const [FreeWebsites, setFreeWebsites ] = useState(true);
const [CustomerWebsite, setCustomerWebsite ] = useState(false);
const [CustomWebsite, setCustomWebsite ] = useState(false);


const [FreeWebsiteBTN, setFreeWebsiteBTN ] = useState(true);
const [CustomerReviewBTN, setCustomerReviewBTN  ] = useState(false);
const [CustomWebsiteBTN, setCustomWebsiteBTN ] = useState(false);

const CouponCodeFreeWebsite = (e) =>{
 console.log(e.target.id)
 if(e.target.id === "FreeWebsite"){
  alert("Please go to view details use code SAV1000 on to make this website free. Your website will be live in 24hr and includes hosting and maintenance." )
 }
 if(e.target.id === "FreeDesign"){
  alert("Please go to view details use code SAV500 on to get free website design. Your website will be ready in 3 business days and includes hosting and maintenance." )
 }

}

const FilterBTNHandler =(e) =>{
  console.log(e)
  if(e.target.innerText === "Free Websites"){
    setFreeWebsiteBTN(true)
    setCustomerReviewBTN(false)
    setCustomWebsiteBTN(false)

    setFreeWebsites(true)
    setCustomerWebsite(false)
    setCustomWebsite(false)
  }


  if(e.target.innerText === "Customer Review"){
    setFreeWebsiteBTN(false)
    setCustomerReviewBTN(true)
    setCustomWebsiteBTN(false)

    setFreeWebsites(false)
    setCustomerWebsite(true)
    setCustomWebsite(false)
  }


  if(e.target.innerText === "Custom Website"){
    setFreeWebsiteBTN(false)
    setCustomerReviewBTN(false)
    setCustomWebsiteBTN(true)

    setFreeWebsites(false)
    setCustomerWebsite(false)
    setCustomWebsite(true)
  }

}





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
      <nav className='FilterWebsite-Container'>

                  <ul>
                    <li>
                    <button onClick={(e) => FilterBTNHandler(e)} className='FilterBTN' 
                      style={{ 
                        color: FreeWebsiteBTN ? "White" : "#0080BF", 
                        background: FreeWebsiteBTN ? "linear-gradient(to bottom, #00aecd, #136DC0 45%)" : "whitesmoke"}}>Free Websites</button>
                    </li>

                    <li><button onClick={(e) => FilterBTNHandler(e)} className='FilterBTN'
                    style={{ 
                    color: CustomerReviewBTN ? "White" : "#0080BF", 
                    background: CustomerReviewBTN ? "linear-gradient(to bottom, #00aecd, #136DC0 45%)" : "whitesmoke"}} >Customer Review</button></li>

                    <li><button onClick={(e) => FilterBTNHandler(e)} className='FilterBTN' 
                    style={{ 
                    color: CustomWebsiteBTN ? "White" : "#0080BF", 
                    background: CustomWebsiteBTN ? "linear-gradient(to bottom, #00aecd, #136DC0 45%)" : "whitesmoke"}}>Custom Website </button></li>


                  </ul>
                </nav>
        <main>
                {/* <picture class="headerImage-container">
                    <source media="(min-width: 1300px)" srcset="/img/desktopImg.png" />
                    <source media="(min-width: 725px)" srcset="/img/tabletImg.png" />
                    <img src="/img/mobileImgLarge.png" alt="" />
                </picture> */}
               
        
        <div className="cardItems">
          
                  <ul style={{display: CustomerWebsite ? "flex" : "none"}}>              

                    <li>

                        <aside>
                            <h2>Website</h2>
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
                                        <a href="https://www.deltabarandgrill.com/">
                                          <button>Website</button>
                                        </a>
                                    </aside>
                                    </div>
                                    <footer>                                 

                                    <button id="DeltaSportsBarId" onClick={ (e) => ToolsTechnologiesHandler(e)} >Tools and Technologies</button> 

                                </footer>
                                                
                          
                        </li>


                        <li>

                        <aside>
                        <h2>Website</h2>
                        </aside>
                        <img src="img/projects/jrlandScaping.png" alt=''/>
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
                              <a href="https://www.jrprolandscaping.com/">
                                  <button>Website</button>
                              </a>
                            </aside>
                                  </div>

                                <footer>                                                                          
                                    <button id="JRlandscapingId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                                </footer>
                        </li>

                        

                      
                  

                   <li>

                        <aside>
                        <h2>Website</h2>
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
                                <a href="https://www.ibupholstery.com/">
                                  <button>Website</button>
                              </a>
                                </aside>
                                  </div>

                                <footer>                                                                          
                                    <button id="IbUpholsteryId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                                </footer>
                        </li>   

                         <li>
                            <header>
                              <h2>Application</h2>
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
                                    <a href="https://github.com/louieLouie117/GarageSally">
                                  <button>GitHub</button>
                                  </a>

                                  <a href="https://garagesallyapp.com/">
                                  <button>Website</button>
                                  </a>
                                 
                                </aside>

                                </div>
                             

                                <footer>                                  

                              <button id='GarageSallyId' onClick={ (e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button>
                           



                            </footer>
                    </li>

                    <li>
                      <aside>
                        <h2>Application</h2>
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
                                <a href="https://github.com/louieLouie117/Responsive-ProgressLogger">
                                  <button>GitHub</button>
                                  </a>

                                  {/* <a href="https://www.deltabarandgrill.com/">
                                  <button>Website</button>
                                  </a> */}
                                  
                                </aside>
                                </div>
                            

                            <footer>
                              <button id="TicketManagementId" onClick={(e) => ToolsTechnologiesHandler(e)}>Tools and Technologies</button> 
                            </footer>
                                            
                      
                    </li>
             

                 
                    <li></li>
                  </ul>

                  <ul style={{display: FreeWebsites ? "flex" : "none"}}>    

                        <li>

                      
                        <img src="img/projects/paceBuilders.png" alt=''/>
                        <aside>
                        <h2>Free Design and Development</h2>


                        </aside>
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
                              <a href="https://icy-flower-0ac939810.1.azurestaticapps.net/">
                                  <button>Website</button>
                              </a>
                            </aside>
                                    
                                  </div>

                                <footer className="FreeBTN-Container">   
                                    <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button onClick={(e)=> CouponCodeFreeWebsite(e)} id='FreeWebsite'>Get Website</button> 
                                    </a>

                                    <a href="https://icy-flower-0ac939810.1.azurestaticapps.net">View</a>

                                </footer>
                        </li>
                  

                      <li>

                        <aside>
                        <h2>Free Design</h2>
                        </aside>
                        <img src="img/projects/WeddingLee.png" alt=''/>
                        <div className="tools-container" style={{ display: WeedingLee ? "grid" : "none"}}>
                          <div id="icon-container">
                            <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                            <p>Mockup UX/UI</p>
                            </div>
                                 
                                  </div>

                                  <footer className="FreeBTN-Container">   
                                  <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button  onClick={(e)=> CouponCodeFreeWebsite(e)} id='FreeDesign'>Get Website</button> 
                                    </a>
                                    <a href="https://icy-flower-0ac939810.1.azurestaticapps.net">View</a>

                                </footer>
                        </li>

                        
                      <li>

                       
                        <img src="img/projects/Pizzeria.png" alt=''/>
                        <div className="tools-container" style={{ display: Pizzeria ? "grid" : "none"}}>
                              <div id="icon-container">
                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                <p>Mockup UX/UI</p>
                                  
                              </div>
                                    
                        </div>

                        <aside>
                        <h2>Free Design</h2>
                        </aside>

                        <footer className="FreeBTN-Container">   
                                  <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button onClick={(e)=> CouponCodeFreeWebsite(e)} id="FreeDesign">Get Website</button> 
                                    </a>
                                    <a href="https://icy-flower-0ac939810.1.azurestaticapps.net">View</a>

                                </footer>
                        </li>

                 
                    <li></li>
                  </ul>
                  </div>
                  
                  <div className='CustomWebsite-Container' style={{display: CustomWebsite ? "grid" : "none"}}>
                    <iframe width="640px" height="880px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__lqWrRdUMFU1RE1CMDlQS0tPRk5XN1EzRzZXNElOMy4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth: "100%", maxHeight:"100vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
                  </div>

                  </main>
                  


                  </div>
           

                

    </div>
  )
}


export default WorkExperience
