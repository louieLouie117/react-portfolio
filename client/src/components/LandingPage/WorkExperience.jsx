import React, {useState} from 'react'

function WorkExperience(props) {



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





  

  return (
    <div >
      <div className="projectsPage-container" id='PageTop'>
      <nav className='FilterWebsite-Container'>

                  <ul>

                  <li>
                    
                      
                    <button onClick={(e) => FilterBTNHandler(e)} className='FilterBTN' 
                  style={{ 
                  color: CustomWebsiteBTN ? "White" : "#0080BF", 
                  background: CustomWebsiteBTN ? "linear-gradient(to bottom, #00aecd, #136DC0 45%)" : "whitesmoke"}}>Services</button>
                  
                  </li>
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

                        
                        <img src="img/Portfolio/SugarRayWebsite.png" alt=''/>
                                     
                                    <footer className='CardFooter-Container'>                                 
                                  <a href="https://www.thesugarayssweettea.com/">
                                    <button>Visit</button> 
                                    </a>
                                    </footer>
                                                
                          
                        </li>

                        
                    <li>

                      <img src="img/Portfolio/TheHookUpWebsite.png" alt=''/>
                                  
                                  <footer className='CardFooter-Container'>                                 

                                  <a href="https://www.thehookup671islandbbq.com/">
                                  <button>Visit</button> 
                                  </a>

                              </footer>
                                              
                        
                      </li>

                         <li>

                        
                        <img src="img/Portfolio/IsmaelRealtorWebsite.png" alt=''/>
                     
                                    <footer className='CardFooter-Container'>                                 
                                    <a href="https://www.ismaelbanuelosrealtor.com/">
                                          <button>Visit</button>
                                        </a>
                               
                                </footer>
                                                
                          
                        </li>

                        <li>

                   
                    <img src="img/Portfolio/DeltaWebsite.png" alt=''/>
                           
                                <footer className='CardFooter-Container'>                                 

                                <a href="https://www.deltasportsbar.com/">
                                      <button>Website</button>
                                    </a>

                            </footer>
                                            
                      
                    </li>


                        <li>

                     
                        <img src="img/Portfolio/JRLandscapingWebsite.png" alt=''/>
                     

                            <footer className='CardFooter-Container'>                                                                          
                                <a href="https://www.jrprolandscaping.com/">
                                  <button>Website</button>
                              </a>
                            </footer>
                        </li>

                        

                      
                        <li>

                        
                        <img src="img/Portfolio/StMichealWebsite.png" alt=''/>
                        
                                    <footer className='CardFooter-Container'>                                 

                                    <a href="https://www.stmichaeloakgrove.com/">
                                          <button>Website</button>
                                        </a>

                                </footer>
                                                
                          
                        </li>

                   <li>

                       
                        <img src="img/Portfolio/IBUpholsteryWebsite.png" alt=''/>
                  

                                <footer>                                                                          
                                <a href="https://www.ibupholstery.com/">
                                  <button>Website</button>
                              </a>
                                </footer>
                        </li>   

                         <li>
                         
                            <img src="img/Portfolio/GarageSallyWebsite.png" alt=''/>                          

                                <footer className='CardFooter-Container'>                                  
                                <a href="https://garagesallyapp.com/">
                                  <button>Website</button>
                                  </a>



                            </footer>
                    </li>

                    <li>
                   

                      <img src="img/Portfolio/JournalPocketWebsite.png" alt=''/>
                            <footer className='CardFooter-Container'>
                            <a href="https://github.com/louieLouie117/Responsive-ProgressLogger">
                                  <button>Coming Soon</button>
                                  </a>

                            </footer>
                                            
                      
                    </li>
             

                 
                    <li></li>
                  </ul>

                <section className='AboutFree-Container' style={{display: FreeWebsites ? "grid" : "none"}}>

                  <h2>About my free website and free designs.</h2>
                  <p>I design a website every month. All free websites or designs are only used once. Ensuring no two businesses have the same website. Once you get the website, we will work together to fit your business needs. </p>
                  </section>


                  <ul style={{display: FreeWebsites ? "flex" : "none"}}>    

                        <li>
                      
                        <img src="img/FreeWebsites/FreeWebsite1.png" alt=''/>
                   
                 

                                <footer className="CardFooter-Container">   
                                    <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button onClick={(e)=> CouponCodeFreeWebsite(e)} id='FreeWebsite'>Get Website</button> 
                                    </a>

                                    <a href="https://icy-flower-0ac939810.1.azurestaticapps.net">View</a>

                                </footer>
                        </li>
                  

                      <li>

                     
                        <img src="img/FreeWebsites/FreeWebsite2.png" alt=''/>
                       

                                  <footer className="CardFooter-Container">   
                                  <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button  onClick={(e)=> CouponCodeFreeWebsite(e)} id='FreeDesign'>Get Website</button> 
                                    </a>
                                    <a href="https://xd.adobe.com/view/a0dfff20-de8d-4e46-6b67-bbfc029b973f-d6ee/?fullscreen">View</a>

                                </footer>
                        </li>

                        
                      <li>

                       
                        <img src="img/FreeWebsites/FreeWebsite3.png" alt=''/>
                        


                        <footer className="CardFooter-Container">   
                                  <a href="https://buy.stripe.com/aEU6rFcPy7qj6xGeUV">                                                                       
                                    <button onClick={(e)=> CouponCodeFreeWebsite(e)} id="FreeDesign">Get Website</button> 
                                    </a>
                                    <a href="https://xd.adobe.com/view/2c35bed9-b4dd-409f-9606-5815b7d37875-7966/?fullscreen">View</a>

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
