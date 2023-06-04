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
                            <h2>Website</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/WebsiteDevices.png" alt="" />

                            <p>Having a website is essential for businesses because it makes the business appear more professional and credible. A website can help businesses reach more people and create a stronger online presence. Finally, having a website can increase the chances of getting leads and generating more revenue.</p>
                            </div>
                        </li>

                        <li>
                            <h2>Marketing</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/MarketingImg.png" alt="" />
                            <p>Marketing online is a powerful tool that can help take your business to the next level. By creating two-way communication with your customers through social media and other channels, you can build trust and loyalty. So don’t be afraid to get started with internet marketing.</p>
                            </div>

                        </li>

                        <li>
                            <h2>Software Application</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/MVPImg.png" alt="" />
                            <p>A Minimum Viable Product (MVP) is a development technique that allows businesses to streamlining processes is the act of identifying and eliminating repetitive and unnecessary steps or activities in a process to make it more efficient and effective. By streamlining processes, businesses can go paperless, save time and money.</p>
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
                            <h2>Website</h2>
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
                            <a href="https://buy.stripe.com/3cs9DRg1K9yr4py3ch">
                            <button className='MainBTN'>Get Services</button>
                            </a>
                            </footer>
                        </li>


                        <li>
                            <header>
                            <h2>Marketing</h2>
                            <p>Start growing your business online.</p>
                            </header>
                            <main>
                            <h3>Google Ads</h3>
                            <ul className='pricing-container'>
                                <li>Geo Location Ads.................</li>
                                <li>$1200.00/y</li>
                            </ul>

                            <h3>Social Media</h3>
                            <ul className='pricing-container'>
                                <li>Instagram/Facebook Ads.................</li>
                                <li>$720.00/y</li>
                        
                            </ul>

                           
                            <ul className='pricing-container'>
                                <li>Total........................................................</li>
                                <li>$1,920.00/y</li>
                             
                            </ul>
                            </main>
                            <footer>
                            <a href="https://buy.stripe.com/00gaHV4j24e7e08fZ4">
                            <button className='MainBTN'>Start Marketing</button>
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
