import React from 'react'
import ServicesStyles from "../../modules/ServicesStyles.css"

function Services(props) {

    <ServicesStyles></ServicesStyles>
  return (
    <div className='Services-Container'>
        {/* <header>
            <h1>My Services</h1>

            </header> */}

            <main>
                <section>
                    <ul className='ServicesCard'>

                        <li>
                            <h2>Dedicated Application</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/MVPImg.png" alt="" />
                            <p>Unlock efficiency and drive success with a Minimum Viable Product (MVP). Streamlining processes involves pinpointing and eliminating redundant and unnecessary steps, transforming your workflow into a lean, effective powerhouse. By embracing streamlined processes, businesses can go paperless, reclaim valuable time, and optimize their financial resources</p>
                            </div>

                        </li>
                    </ul>
                </section>

                <section>
                    <div className="PeaceOfMind">
                        <h2>Peace of mind</h2>
                        <main>
                        <img src="/img/PeaceOfMindImg.png" alt="" />

                            <div className="PeaceOfMindInfo">
                            <h3>One Call Away</h3>
                            <p>Have a web expert at your fingertips that you can call any time.</p>

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
                        <li>
                            <header>
                            <h2>Website and Marketing</h2>
                            <p>Get your business online.</p>
                            </header>
                            <main>
                            <h3>Design</h3>
                            <ul className='pricing-container'>
                                <li>Mobile.................</li>
                                <li>$500.00</li>
                                <li>Tablet.................</li>
                                <li>$500.00</li>
                                <li>Desktop.................</li>
                                <li>$500.00</li> 
                            </ul>

                            <h3>Development</h3>
                            <ul className='pricing-container'>
                                <li>Mobile.................</li>
                                <li>$500.00</li>
                                <li>Tablet.................</li>
                                <li>$500.00</li>
                                <li>Desktop.................</li>
                                <li>$500.00</li> 
                            </ul>

                            <h3>Subscription</h3>
                            <ul className='pricing-container'>
                                <li>Hosting and Maintenance.........</li>
                                <li>$120.00/m</li>
                             
                            </ul>
                            <ul className='pricing-container'>
                                <li>Total........................................................</li>
                                <li>$3,120.00</li>
                             
                            </ul>
                            </main>
                            <footer>
                            <a href="https://buy.stripe.com/6oEaF46vZc7fbe0144">
                            <button className='MainBTN'>Get Services</button>
                            </a>
                            </footer>
                        </li>


                

                        <li>
                            <header>
                            <h2>Software Development</h2>
                            <p>Go paperless and streamline your business process.</p>
                            </header>
                            <main>
                            <h3>Research, Design, and Develop.</h3>

                            <ul className='BulletPoint'>
                                <li>Identify the goal or end result.</li>
                                <li>Break down the process into discrete steps or tasks.</li>
                                <li>Analyze the process steps, perform value chain analysis, evaluate handoffs, and identify bottlenecks.</li>
                                <li>Gather input from those who perform the process and related tasks, or who benefit from the process.</li>
                                <li>Identify unnecessary activities.</li>
                                <li>Identify redundant activities.</li>
                                <li>Identify activities that can be automated using technology.</li>
                            </ul>

                           
                            </main>
                            <footer>
                            <a href="https://calendly.com/cardona-luis/15min">
                            <button className='MainBTN'>Schedule Consultation</button>
                            </a>
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
