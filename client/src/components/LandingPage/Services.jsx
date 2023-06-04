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

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia voluptas ex facilis cumque distinctio possimus velit consequuntur eaque hic assumenda labore, ducimus enim rerum similique, modi obcaecati odit delectus?</p>
                            </div>
                        </li>

                        <li>
                            <h2>Marketing</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/MarketingImg.png" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia voluptas ex facilis cumque distinctio possimus velit consequuntur eaque hic assumenda labore, ducimus enim rerum similique, modi obcaecati odit delectus?</p>
                            </div>

                        </li>

                        <li>
                            <h2>Software Application</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/MVPImg.png" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia voluptas ex facilis cumque distinctio possimus velit consequuntur eaque hic assumenda labore, ducimus enim rerum similique, modi obcaecati odit delectus?</p>
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
