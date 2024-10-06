import ServicesStyles from "../../modules/ServicesStyles.css"

import React, { useState } from 'react';
import HeroBanner from '../../components/LandingPage/HeroBanner'


function Services(props) {

    const renderBasicService = () => {
        return (
            <ul className='pricing-container'>
                <li>Website design and development.......</li>
                <li>$500.00</li>
            </ul>
        );
    };

    // render puls service
    const renderPlusService = () => {
        return (
            <ul className='pricing-container' style={PlusServers}>
            <li>Setup Online Marketing.......</li>
            <li>$500.00</li>
            </ul>
        );
    };

    const renderPremiumService = () => {
        return (
            <ul className='pricing-container' style={brandingLogoIntegration}>
            <li>App design and development....</li>
            <li>$1,000.00</li>
            <li>Logo and Branding.......</li>
            <li>$2,000.00</li>
            <li>Database</li>
            <li>$5,000.00</li>
            </ul>
        );
    };
    
    


    <ServicesStyles></ServicesStyles>
    // service tile
    const [ServiceTile, setServiceTile] = useState('Mobile Website');
    // service description
    const [ServiceDescription, setServiceDescription] = useState('Website Basic Service: Obtain a streamlined mobile website tailored to your immediate needs, compatible across all devices. Benefit from regular updates and cost-efficiency, with an exclusive 50% discount for the first year.');
    // service purchase link
    const [purchaseLink, setPurchaseLink] = useState('https://buy.stripe.com/aEU8wW5rV0oxgyk9AM?prefilled_promo_code=50OFF');
    // monthly service price
    const [monthlyServicePrice, setMonthlyServicePrice] = useState('50.00');
    // purchase button text
    const [purchaseBTNText, setPurchaseBTNText] = useState('Get Basic');
   

    // branding logo integration
    const [brandingLogoIntegration, setBrandingLogoIntegration] = useState({display: 'none'});
    // total amount
    const [TotalAmount, setTotalAmount] = useState('$550.00');
    // analytics integration
    const [PlusServers, setPlusServers] = useState({display: 'none'});
    // highlight analytics
    const [HighlightAnalytics, setHighlightAnalytics] = useState({color: '#0092db'});

    // updated button to link to stripe
    const [basicServiceBTNStyles, setBasicServiceBTNStyles] = useState({backgroundColor: '#136db0', color: 'white'});
    const [plusServiceBTNStyles, setPlusServiceBTNStyles] = useState({backgroundColor: 'white', color: '#0092db'});
    const [premiumServiceBTNStyles, setPremiumServiceBTNStyles] = useState({backgroundColor: 'white', color: '#0092db'});
    // branding styles
    const [brandingStyles] = useState({color: '#0092db'});

// basicServiceHandler
const basicServiceHandler = () => {
    //service tile
    setServiceTile('Mobile Website');
    // service description
    setServiceDescription('Website Basic Service: Obtain a streamlined mobile website tailored to your immediate needs, compatible across all devices. Benefit from regular updates and cost-efficiency, with an exclusive 50% discount for the first year.');
    setBasicServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPurchaseLink('https://buy.stripe.com/aEU8wW5rV0oxgyk9AM?prefilled_promo_code=50OFF');
    // set monthly service price
    setMonthlyServicePrice('50.00');
    // set purchase button text
    setPurchaseBTNText('Get Basic');
    // payment integration

    setPlusServers({display: 'none'});
    setBrandingLogoIntegration({display: 'none'});

    setTotalAmount('$550.00');


}
// plusServiceHandler
const plusServiceHandler = () => {
    //service tile
    setServiceTile('Website & Marketing');
    // service description
    setServiceDescription('Plus: Enhance your website and kickstart online marketing. Integrated Geo-targeted marketing for local visibility and keyword optimization for search engines.');
    setPlusServiceBTNStyles({backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPremiumServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});  
    setPurchaseLink('https://buy.stripe.com/aEU5kK6vZdbjci48wG');
    // set monthly service price
    setMonthlyServicePrice('150.00');
    // set purchase button text
    setPurchaseBTNText('Get Plus');
    // total amount
    setTotalAmount('$1,650.00');

    // brandingLogoIntegration
    setBrandingLogoIntegration({display: 'none'});
    // analytics integration
    setPlusServers({display: 'grid'});
    setHighlightAnalytics({color: '#0092db'});
}
  
// premiumServiceHandler
const premiumServiceHandler = () => {
    //service tile
    setServiceTile('Website & App');
    // service description
    setServiceDescription('Premium: Get a custom logo design aligned with your business identity.Elevate your social media presence with regular content posting to engage your audience.');
    setPremiumServiceBTNStyles( {backgroundColor: '#136db0', color: 'white'});
    setBasicServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    setPlusServiceBTNStyles({backgroundColor: 'white', color: '#136db0'});
    
    setPurchaseLink('https://buy.stripe.com/bIYbJ86vZ2wFeqc6oz');
    // set monthly service price
    setMonthlyServicePrice('240.00');
    // set purchase button text
    setPurchaseBTNText('Get Premium');

    // total amount
    setTotalAmount('$6,740.00');
    
   // analytics integration
    setPlusServers({display: 'grid'});
    setHighlightAnalytics({color: 'black'});
    // brandingLogoIntegration
    setBrandingLogoIntegration({display: 'grid'});





}





  return (
    <div className='Services-Container'>
        {/* <header>
            <h1>My Services</h1>

            </header> */}

            <main>
               
    

                <section className='Cost-Container'>
                <aside>

<h1>Get a website that fits your business needed.</h1>

</aside>


                    <main>
                    <ul className='ServicesCard ServiceBackground'>
                    <div className="MonthlyOptions">
                                    <button style={basicServiceBTNStyles} onClick={() => basicServiceHandler()}>Basic</button>

                                    <button style={ plusServiceBTNStyles }  onClick={() => plusServiceHandler()}>Plus</button>

                                    <button style={premiumServiceBTNStyles}  onClick={() => premiumServiceHandler()}>Premium</button>

                                </div>
                        <li>
                            
                            <header>
                      
                            <h2>{ServiceTile}</h2>
                       
                            </header>
                            <main className='AppPricing-Container'>
                            <section>
                                {renderBasicService()}

                                </section>
                                <section>
                                {renderPlusService()}
                                </section>

                                <section>
                                {renderPremiumService()}
                                </section>


                            

                              

                                <section>
                                <h3>Monthly Services</h3>
                                
                                <div className="MonthlyServicesInfo">
                            
                               
                                </div>
                                <ul className='pricing-container'>
                                    <li>{ServiceDescription}..........</li>
                                    <li  >${monthlyServicePrice}/m</li>
                                
                                </ul>
                                </section>
                              
                            </main>
                            <footer>
                            <a id="PurchaseLink" href={purchaseLink}>
                            {/* button to update link */}
                            <button className='MainBTN' >{purchaseBTNText}</button>

                            </a>
                            <section>
                                    
                                    <ul className='pricing-container'>
                                        <li>Total........................................................</li>
                                        <li>{TotalAmount}</li>
                                    
                                    </ul>
                                    </section>
                            </footer>
                        </li>


                

                        



                    </ul>
                    </main>
                </section>

                <section>
      <HeroBanner></HeroBanner>

                </section>

                <section>
                    <ul className='ServicesCard'>

                        <li>
                            <h2>Crafting Your Digital Presence with Passion.</h2>
                            <div className='ServiceCardInfo'>
                            <img src="/img/HeroImageMobile.png" alt="" />

                            <p>
                            In today’s digital world, having a website is no longer a luxury—it’s a necessity. From enterprises to small local businesses, having a website is essential.
                            </p>

                            <p> I remember the first time I designed a website for a friend’s restaurant. Watching their business flourish online ignited my passion for web design and development. Since then, I’ve helped numerous businesses establish their online presence and grow their brand.</p>

                            <p>Whether you’re looking to create a new website or revamp an existing one, I can help. I specialize in creating custom websites tailored to your unique needs and goals.</p>

                            <p>Schedule an appointment today to discuss your website needs, and let’s create something amazing together.</p>
      
                            </div>
                            <footer>
                            <a href="https://calendly.com/cardona-luis/30min">
                            <button className='MainBTN'>Schedule Appointment</button>
                            </a>
                            </footer>


                        </li>
                    </ul>
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