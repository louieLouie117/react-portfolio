import React from 'react'
import ServicesStyles from "../../modules/ServicesStyles.css"

function Services(props) {

    <ServicesStyles></ServicesStyles>

    // updated button to link to stripe


  return (
    <div className='Services-Container'>
        {/* <header>
            <h1>My Services</h1>

            </header> */}

            <main>
                <section>
                    <ul className='ServicesCard'>

                        <li>
                            <h2>MVP Application</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/mvpFlat.png" alt="" />
                            <p>Unlock efficiency and drive success with a Minimum Viable Product (MVP).</p>
                            <p>
                            Streamlining processes involves pinpointing and eliminating redundant and unnecessary steps, transforming your workflow into a lean, effective powerhouse.
                            </p>
                            <p>
                            By embracing streamlined processes, businesses can go paperless, reclaim valuable time, and optimize their financial resources.</p>
                            </div>
                            <footer>
                            <a href="https://calendly.com/cardona-luis/15min">
                            <button className='MainBTN'>Schedule Consultation</button>
                            </a>
                            </footer>

                        </li>
                    </ul>
                </section>

                <section>
                    <div className="PeaceOfMind">
                        <h2>Peace of mind</h2>
                        <main>
                        <img src="/img/PeaceOfMindImg.png" alt="" />

                            <div className="PeaceOfMindInfo">
                            <h3>Have a expert at your fingertips that you can call any time.</h3>
                            

                            </div>

                        </main>
                    </div>
                </section>

                <section className='Cost-Container'>
                    <header>
                    <img src="/img/CostImg.png" alt="" />
                    <h2>Cost for Services</h2>
                    {/* <p>You can build a price base on your buisness needs or get full services.</p>
                    <nav>
                    <button>Build a price</button>
                    <button>Full Services</button>
                    </nav> */}

                    </header>

                    <main>
                    <ul className='ServicesCard ServiceBackground'>
                    <div className="MonthlyOptions">
                                    <button>Basic</button>
                                    <button>Plus</button>
                                    <button>Premium</button>

                                </div>
                        <li>
                            
                            <header>
                      
                            <h2>MVP Application</h2>
                            </header>
                            <main className='AppPricing-Container'>
                                <section>
                                <h3>App Design</h3>
                                <ul className='pricing-container'>
                                    <li>Mobile, Tablet, and Desktop...........</li>
                                    <li>$2,500.00</li>
                                
                                </ul>
                                </section>

                                <section>
                                <h3>App Development</h3>
                                <ul className='pricing-container'>
                                <li>Mobile, Tablet, and Desktop...........</li>
                                    <li>$2,500.00</li>
                                </ul>
                                </section>


                                <section>
                                <h3>Monthly Services</h3>
                                
                                <div className="MonthlyServicesInfo">
                            
                               
                                </div>
                                <ul className='pricing-container'>
                                    <li>The basic tier covers essential services, including app maintenance, bug fixes, and minor updates..........</li>
                                    <li>$120.00/m</li>
                                
                                </ul>
                                </section>
                              
                            </main>
                            <footer>
                            <a id="PurchaseLink" href="https://buy.stripe.com/3cscNcg6z1sB0zm4gj">
                            <button className='MainBTN'>Get Basic</button>
                            </a>
                            <section>
                                    
                                    <ul className='pricing-container'>
                                        <li>Total........................................................</li>
                                        <li>$3,120.00</li>
                                    
                                    </ul>
                                    </section>
                            </footer>
                        </li>


                

                        



                    </ul>
                    </main>
                </section>
            </main>








            {/* <div className='CustomWebsite-Container' >

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

            </div> */}
    </div>
  )
}


export default Services
