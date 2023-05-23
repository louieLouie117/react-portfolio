import React, {useState} from 'react'

function WorkExperience(props) {

const [ToolsGarageSally, setToolsGarageSally] = useState(false);
const [ToolsTicketManagement, setToolsTicketManagement] = useState(false);
const [ToolsDeltaSportsBar, setToolsDeltaSportsBar] = useState(false);
const [ToolsJRlandscaping, setToolsJRlandscaping] = useState(false);
const [ToolsIsmaelRealtor, setToolsIsmaelRealtor] = useState(false);


const [IbUpholstery, setIbUpholstery] = useState(false);


const [FreeWebsites, setFreeWebsites ] = useState(true);
const [CustomerWebsite, setCustomerWebsite ] = useState(false);
const [CustomWebsite, setCustomWebsite ] = useState(false);


const [FreeWebsiteBTN, setFreeWebsiteBTN ] = useState(true);
const [CustomerReviewBTN, setCustomerReviewBTN  ] = useState(false);
const [CustomWebsiteBTN, setCustomWebsiteBTN ] = useState(false);

const CouponCodeFreeWebsite = (e) =>{
 console.log(e.target.id)
 if(e.target.id === "FreeWebsite"){
  alert("Add Code SAV1000 ang get this website free. Your website will be live in 24hr and includes hosting and maintenance." )
 }
 if(e.target.id === "FreeDesign"){
  alert("Add Code SAV500 to get free design. Your website will be ready in 3 business days and includes hosting and maintenance." )
 }

}

const FilterBTNHandler =(e) =>{
  console.log(e)
  if(e.target.innerText === "Free"){
    setFreeWebsiteBTN(true)
    setCustomerReviewBTN(false)
    setCustomWebsiteBTN(false)

    setFreeWebsites(true)
    setCustomerWebsite(false)
    setCustomWebsite(false)
  }


  if(e.target.innerText === "Portfolio"){
    setFreeWebsiteBTN(false)
    setCustomerReviewBTN(true)
    setCustomWebsiteBTN(false)

    setFreeWebsites(false)
    setCustomerWebsite(true)
    setCustomWebsite(false)
  }


  if(e.target.innerText === "Services"){
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

  
  if(e.target.id === "ToolsIsmaelRealtorId"){
    if(e.target.innerText === "Close"){
        setToolsIsmaelRealtor(false)
        e.target.innerText = "Review Read"
        return
      }else{
      setToolsIsmaelRealtor(true)
      e.target.innerText = "Close"
        return
  }

}


  if(e.target.id === "GarageSallyId"){
        if(e.target.innerText === "Close"){
            setToolsGarageSally(false)
            e.target.innerText = "Review Read"
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
        e.target.innerText = "Review Read"
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
        e.target.innerText = "Review Read"
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
      e.target.innerText = "Review Read"
      return
    }else{
    setToolsJRlandscaping(true)
    e.target.innerText = "Close"
      return
  }
}





if(e.target.id === "IbUpholsteryId"){
  if(e.target.innerText === "Close"){
    setIbUpholstery(false)
    e.target.innerText = "Review Read"
    return
  }else{
  setIbUpholstery(true)
  e.target.innerText = "Close"
    return
}
}







}

  

  return (
    <div >
      <div className="projectsPage-container" id='PageTop'>
      <nav className='FilterWebsite-Container'>

                  <ul>
                    <li>
                      
                    <button onClick={(e) => FilterBTNHandler(e)} className='FilterBTN' 
                      style={{ 
                        color: FreeWebsiteBTN ? "White" : "#0080BF", 
                        background: FreeWebsiteBTN ? "linear-gradient(to bottom, #00aecd, #136DC0 45%)" : "whitesmoke"}}>Free</button>
                        
                    </li>

                    <li>
                       
                      <button onClick={(e) => FilterBTNHandler(e)} className='FilterBTN'
                    style={{ 
                    color: CustomerReviewBTN ? "White" : "#0080BF", 
                    background: CustomerReviewBTN ? "linear-gradient(to bottom, #00aecd, #136DC0 45%)" : "whitesmoke"}} >Portfolio</button>
                    
                    </li>

                    <li>
                    
                      
                      <button onClick={(e) => FilterBTNHandler(e)} className='FilterBTN' 
                    style={{ 
                    color: CustomWebsiteBTN ? "White" : "#0080BF", 
                    background: CustomWebsiteBTN ? "linear-gradient(to bottom, #00aecd, #136DC0 45%)" : "whitesmoke"}}>Services</button>
                    
                    </li>


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

                        
                        <img src="img/projects/SugaRay.png" alt=''/>
                                      <div className="tools-container"  style={{ display: ToolsIsmaelRealtor ? "grid" : "none"}}>
                                      <div id="icon-container">
                                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                                <p>Mockup UX/UI</p>

                                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                                <p>Responsive Layout</p>

                                                <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                                <p>Behavior</p>
                                            </div>
                                            
                                    <aside>
                                        <a href="https://www.ismaelbanuelosrealtor.com/">
                                          <button>Website</button>
                                        </a>
                                    </aside>
                                    </div>
                                    <footer>                                 

                                    <button id="ToolsIsmaelRealtorId" onClick={ (e) => ToolsTechnologiesHandler(e)} >Visit</button> 

                                </footer>
                                                
                          
                        </li>

                        
                    <li>

                      <img src="img/projects/TheHookUp.png" alt=''/>
                                    <div className="tools-container"  style={{ display: ToolsIsmaelRealtor ? "grid" : "none"}}>
                                    <div id="icon-container">
                                              <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                              <p>Mockup UX/UI</p>

                                              <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                              <p>Responsive Layout</p>

                                              <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                              <p>Behavior</p>
                                          </div>
                                          
                                  <aside>
                                      <a href="https://www.thesugarayssweettea.com/">
                                        <button>Website</button>
                                      </a>
                                  </aside>
                                  </div>
                                  <footer>                                 

                                  <button id="ToolsIsmaelRealtorId" onClick={ (e) => ToolsTechnologiesHandler(e)} >Visit</button> 

                              </footer>
                                              
                        
                      </li>

                         <li>

                        
                        <img src="img/projects/IsmaelRealtor.png" alt=''/>
                                      <div className="tools-container"  style={{ display: ToolsIsmaelRealtor ? "grid" : "none"}}>
                                      <div id="icon-container">
                                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                                <p>Mockup UX/UI</p>

                                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                                <p>Responsive Layout</p>

                                                <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                                <p>Behavior</p>
                                            </div>
                                            
                                    <aside>
                                        <a href="https://www.ismaelbanuelosrealtor.com/">
                                          <button>Website</button>
                                        </a>
                                    </aside>
                                    </div>
                                    <footer>                                 

                                    <button id="ToolsIsmaelRealtorId" onClick={ (e) => ToolsTechnologiesHandler(e)} >Visit</button> 

                                </footer>
                                                
                          
                        </li>

                        <li>

                   
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

                                <button id="DeltaSportsBarId" onClick={ (e) => ToolsTechnologiesHandler(e)} >Visit</button> 

                            </footer>
                                            
                      
                    </li>


                        <li>

                     
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
                                    <button id="JRlandscapingId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Visit</button> 
                                </footer>
                        </li>

                        

                      
                        <li>

                        
                        <img src="img/projects/StMichealCardImg.png" alt=''/>
                                      <div className="tools-container"  style={{ display: ToolsIsmaelRealtor ? "grid" : "none"}}>
                                      <div id="icon-container">
                                                <div><img src="/img/Icons/iconXD.png" alt=""/></div>
                                                <p>Mockup UX/UI</p>

                                                <div><img src="/img/Icons/iconHtmlCss.png" alt=""/></div>
                                                <p>Responsive Layout</p>

                                                <div><img src="/img/Icons/iconJavaScript.png" alt=""/></div>
                                                <p>Behavior</p>
                                            </div>
                                            
                                    <aside>
                                        <a href="https://www.ismaelbanuelosrealtor.com/">
                                          <button>Website</button>
                                        </a>
                                    </aside>
                                    </div>
                                    <footer>                                 

                                    <button id="ToolsIsmaelRealtorId" onClick={ (e) => ToolsTechnologiesHandler(e)} >Visit</button> 

                                </footer>
                                                
                          
                        </li>

                   <li>

                       
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
                                    <button id="IbUpholsteryId" onClick={ (e) => ToolsTechnologiesHandler(e)}>Visit</button> 
                                </footer>
                        </li>   

                         <li>
                         
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

                              <button id='GarageSallyId' onClick={ (e) => ToolsTechnologiesHandler(e)}>Review Comming Soon</button>
                           



                            </footer>
                    </li>

                    <li>
                   

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
                              <button id="TicketManagementId" onClick={(e) => ToolsTechnologiesHandler(e)}>Visit</button> 
                            </footer>
                                            
                      
                    </li>
             

                 
                    <li></li>
                  </ul>

                <section className='AboutFree-Container' style={{display: FreeWebsites ? "grid" : "none"}}>

                  <h2>About my free website and free designs.</h2>
                  <p>All free websites or designs are only used once. Ensuring no two businesses have the same website. Once you get the website, we will work together to fit your business needs. </p>
                  </section>


                  <ul style={{display: FreeWebsites ? "flex" : "none"}}>    

                        <li>
                      
                        <img src="img/FreeWebsites/FreeWebsite1.png" alt=''/>
                   
                 

                                <footer className="FreeBTN-Container">   
                                    <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button onClick={(e)=> CouponCodeFreeWebsite(e)} id='FreeWebsite'>Get Website</button> 
                                    </a>

                                    <a href="https://icy-flower-0ac939810.1.azurestaticapps.net">View</a>

                                </footer>
                        </li>
                  

                      <li>

                     
                        <img src="img/FreeWebsites/FreeWebsite2.png" alt=''/>
                       

                                  <footer className="FreeBTN-Container">   
                                  <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button  onClick={(e)=> CouponCodeFreeWebsite(e)} id='FreeDesign'>Get Website</button> 
                                    </a>
                                    <a href="https://xd.adobe.com/view/a0dfff20-de8d-4e46-6b67-bbfc029b973f-d6ee/?fullscreen">View</a>

                                </footer>
                        </li>

                        
                      <li>

                       
                        <img src="img/FreeWebsites/FreeWebsite3.png" alt=''/>
                        


                        <footer className="FreeBTN-Container">   
                                  <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button onClick={(e)=> CouponCodeFreeWebsite(e)} id="FreeDesign">Get Website</button> 
                                    </a>
                                    <a href="https://icy-flower-0ac939810.1.azurestaticapps.net">View</a>

                                </footer>
                        </li>

                 
                    <li></li>

                
                  </ul>

                                            
                  <section style={{display: FreeWebsites ? "flex" : "none"}}>
                                        

                  <iframe title='EmailForm' width="2640px" height="880px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__lqWrRdURUVCUUNKRERCSFNDOVNIMUZDS1UySURGVC4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth: "100%", maxHeight:"120vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
                  </section>



                  </div>

                  
                  <div className='CustomWebsite-Container' style={{display: CustomWebsite ? "grid" : "none"}}>

                  <section className='AlignTop'>
                    <h1>Having a website is crucial for any business in today’s digital age. </h1>
                    <p>I can design, develop, and maintain your website.</p>
                    <a  href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">
                    <button className='MainBTN' >View My Services</button>
                    </a>
                  </section>

                  <picture>
                     <source media="(min-width: 1100px)" srcset="/img/DesktopFocusMobile.png"/>               
                    <img src="/img/MobileWebsite.png" alt="" />
                  </picture>
                    
                      <section>
                      <p>A website makes your business appear more professional and credible, and it allows you to reach a wider audience than ever before.</p>
                      <p>With a well-designed website, you can generate leads and sales for your business, showcase your work, and provide valuable information to repeat customers. </p>
                      <p>In addition, through the use of modern SEO tactics, you can beat your competitors online and establish yourself as a leader in your industry.</p>
                      </section>
             
                  </div>

                  </main>
                  


                  </div>
           

                

    </div>
  )
}


export default WorkExperience
