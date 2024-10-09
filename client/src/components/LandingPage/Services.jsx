import ServicesStyles from "../../modules/ServicesStyles.css";
import React, { useState } from 'react';
import HeroBanner from '../../components/LandingPage/HeroBanner';

function Services(props) {

    <ServicesStyles></ServicesStyles>
    const [ServiceTile, setServiceTile] = useState('Bring your business online.');
    const [ServiceDescription, setServiceDescription] = useState('Obtain a streamlined mobile website tailored to your immediate needs, compatible across all devices.');
    const [purchaseLink, setPurchaseLink] = useState('https://buy.stripe.com/aEU8wW5rV0oxgyk9AM?prefilled_promo_code=50OFF');
    const [monthlyServicePrice, setMonthlyServicePrice] = useState('50.00');
    const [purchaseBTNText, setPurchaseBTNText] = useState('Get Website');
    const [TotalAmount, setTotalAmount] = useState('$500.00');
    const [basicServiceBTNStyles, setBasicServiceBTNStyles] = useState({ backgroundColor: '#136db0', color: 'white' });
    const [plusServiceBTNStyles, setPlusServiceBTNStyles] = useState({ backgroundColor: 'white', color: '#0092db' });
    const [premiumServiceBTNStyles, setPremiumServiceBTNStyles] = useState({ backgroundColor: 'white', color: '#0092db' });

    const [monthlyServices, setMonthlyServices] = useState('Updates and Maintenance');
   

    const basicServiceHandler = () => {
        setServiceTile('Bring your business online.');
        setServiceDescription('Obtain a streamlined mobile website tailored to your immediate needs, compatible across all devices.');
        setBasicServiceBTNStyles({ backgroundColor: '#136db0', color: 'white' });
        setPlusServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPremiumServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPurchaseLink('https://buy.stripe.com/aEU8wW5rV0oxgyk9AM?prefilled_promo_code=50OFF');
        setMonthlyServicePrice('100.00');
        setPurchaseBTNText('Get Website');
        setMonthlyServices('Updates and Maintenance');
        setTotalAmount('$500.00');
    };

    const plusServiceHandler = () => {
        setServiceTile('Launch your online marketing and establish your social media presence.');
        setServiceDescription('Integrated Geo-targeted marketing for local visibility and keyword optimization for search engines.');
        setPlusServiceBTNStyles({ backgroundColor: '#136db0', color: 'white' });
        setBasicServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPremiumServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPurchaseLink('https://buy.stripe.com/aEU5kK6vZdbjci48wG');
        setMonthlyServicePrice('150.00');
        setPurchaseBTNText('Get Marketing');
        setMonthlyServices('Medial and Online Marketing');
        setTotalAmount('$1,650.00');
    };

    const premiumServiceHandler = () => {
        setServiceTile('Develop a Custom App or Convert Your Website into an App.');
        setServiceDescription('Get an app or convert your website into an app with an integrate a database. Take advantage of advanced analytics and improve your online presence.');
        setPremiumServiceBTNStyles({ backgroundColor: '#136db0', color: 'white' });
        setBasicServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPlusServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPurchaseLink('https://buy.stripe.com/bIYbJ86vZ2wFeqc6oz');
        setMonthlyServicePrice('240.00');
        setPurchaseBTNText('Get App');
        setMonthlyServices('Updates and Maintenance');
        setTotalAmount('$6,500.00');
    };


    return (
        <div className='Services-Container'>
            <main>
                <ul className='ServicesCard'>
                    <li>
                        <h2>Start Your Digital Presence.</h2>
                        <div className='ServiceCardInfo'>
                            <p>In today’s digital world, having a website is no longer a luxury—it’s a necessity. From enterprises to small local businesses, having a website is essential.</p>
                            <img src="/img/HeroImageMobile.png" alt="" />
                            <section className='Cost-Container'>
                                <main>
                                    <ul className='ServicesCard ServiceBackground'>
                                        <div className="MonthlyOptions">
                                            <button style={basicServiceBTNStyles} onClick={basicServiceHandler}>Website</button>
                                            <button style={plusServiceBTNStyles} onClick={plusServiceHandler}>Marketing</button>
                                            <button style={premiumServiceBTNStyles} onClick={premiumServiceHandler}>App</button>
                                        </div>
                                        <li>
                                            <header>
                                                <h2>{ServiceTile}</h2>
                                            </header>
                                            <main className='AppPricing-Container'>
                                                <section>
                                                    <div className="MonthlyServicesInfo"></div>
                                                </section>
                                                <section>
                                                    <ul className='pricing-container'>
                                                        <li><h2>{TotalAmount}</h2></li>
                                                    </ul>
                                                </section>
                                            </main>
                                            {ServiceDescription}
                                            <footer>
                                                <a id="PurchaseLink" href={purchaseLink}>
                                                    <button className='MainBTN'>{purchaseBTNText}</button>
                                                </a>
                                                <ul className='pricing-container'>
                                                    <li>{monthlyServices}........</li>
                                                    <li>${monthlyServicePrice}/m</li>
                                                </ul>
                                            </footer>
                                        </li>
                                    </ul>
                                </main>
                            </section>
                        </div>
                    </li>
                </ul>
                <section></section>
                <ul className='ServicesCard'>
                    <li>
                        <HeroBanner />
                        <p>I remember the first time I designed a website for a friend’s restaurant. Watching their business flourish online ignited my passion for web design and development. Since then, I’ve helped businesses establish their online presence and grow their brand.</p>

                        <p>Whether you’re looking to create a new website or revamp an existing one, or embrace an app. I can help.</p>

                        <p>Schedule an appointment today to discuss your digital needs, and let’s create something amazing together.</p>
                        <footer>
                            <a href="https://calendly.com/cardona-luis/30min">
                                <button className='MainBTN'>Schedule Appointment</button>
                            </a>
                        </footer>
                    </li>
                </ul>
            </main>
        </div>
    );
}

export default Services;
