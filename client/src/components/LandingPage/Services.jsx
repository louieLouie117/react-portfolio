import ServicesStyles from "../../modules/ServicesStyles.css";
import React, { useState } from 'react';

function Services(props) {

    const [appDetails, setAppDetails] = useState('');
    const [BudgetSelected, setBudgetSelected] = useState('Select Budget');

    const handleAppDetailsChange = (event) => {
        setAppDetails(event.target.value);
    };

   

    const sendEstimate = () => {
        console.log('Estimate sent for:', appDetails);
        //check if textarea is empty
        if (appDetails === '') {
            alert('Please provide a brief description of the app you would like to create.');
            return;
        }

        //check if budget is selected
        if (BudgetSelected === 'Select Budget') {
            alert('Please select a budget range.');
            return;
        }
    
        const subject = encodeURIComponent('App estimate request.');
        const body = encodeURIComponent(`App Description:\n${appDetails}\n\nBudget:\n${BudgetSelected}\n\nThank you for your interest in app development services. I understand that getting an app can be very complicated, and I will provide details on what your app will need and a timeline on how long the app will take. Please feel free to add any questions you might have in this email before sending it. Looking forward to working with you!`);
        const mailtoLink = `mailto:lcwebsitesolutions@outlook.com?subject=${subject}&body=${body}`;
    
        window.location.href = mailtoLink;
    };

    const [RenderWebsiteServices, setRenderWebsiteServices] = useState({display: 'grid', gap: '10px'});

    const renderWebsiteServices = () =>{
        return(
            <li style={RenderWebsiteServices} >
                <header>
                    <h2>{ServiceTile}</h2>
                </header>
                {ServiceDescription}

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
        );
    }

    const [RenderAppServices , setRenderAppServices] = useState({display: 'none', gap: '10px'});

    const handleBudgetChange = (event) => {
        setBudgetSelected(event.target.value);
    };
    const renderAppServices = () => {
        return (
            <li style={RenderAppServices} >
            <header>
            <h2>{ServiceTile}</h2>
            </header>
            {ServiceDescription}
            
            <form onSubmit={(e) => { e.preventDefault(); sendEstimate(); }}>
            <textarea
            value={appDetails}
            onChange={handleAppDetailsChange}
            placeholder="Please provide a brief description of the app you would like to create."
            rows="4"
            cols="50"
            />
            <select id="budget" name="budget" value={BudgetSelected} onChange={handleBudgetChange}>
            <option value="Select Budget">Select Budget</option>
            <option value="$1000-$2000">$1000-$2000</option>
            <option value="$2000-$5000">$2000-$5000</option>
            <option value="$5000-$10000">$5000-$10000</option>
            <option value="$10000-$20000">$10000-$20000</option>
            <option value="$20000-$50000">$20000-$50000</option>
            </select>
          
            <button className='MainBTN' type="submit">Email Description.</button>
            </form>
            <footer>
                   
                    <ul className='pricing-container'>
                        <li>{monthlyServices}........</li>
                        <li>${monthlyServicePrice}/m</li>
                    </ul>
                </footer>
            </li>
        );
    };



    

    <ServicesStyles></ServicesStyles>

    const [ServiceTile, setServiceTile] = useState('Bring your business online.');
    const [ServiceDescription, setServiceDescription] = useState('Obtain a streamlined mobile website tailored to your immediate needs, compatible across all devices.');
    const [purchaseLink, setPurchaseLink] = useState('https://buy.stripe.com/aEU8wW5rV0oxgyk9AM?prefilled_promo_code=50OFF');
    const [monthlyServicePrice, setMonthlyServicePrice] = useState('100.00');
    const [purchaseBTNText, setPurchaseBTNText] = useState('Get Website');
    const [TotalAmount, setTotalAmount] = useState('$500.00');
    const [basicServiceBTNStyles, setBasicServiceBTNStyles] = useState({ backgroundColor: '#136db0', color: 'white' });
    const [plusServiceBTNStyles, setPlusServiceBTNStyles] = useState({ backgroundColor: 'white', color: '#0092db' });
    const [premiumServiceBTNStyles, setPremiumServiceBTNStyles] = useState({ backgroundColor: 'white', color: '#0092db' });

    const [monthlyServices, setMonthlyServices] = useState('Enjoy 50% off on Updates and Maintenance for the first year');
   

    const basicServiceHandler = () => {
        setServiceTile('Bring your business online.');
        setServiceDescription('Obtain a streamlined mobile website tailored to your immediate needs, compatible across all devices.');
        setBasicServiceBTNStyles({ backgroundColor: '#136db0', color: 'white' });
        setPlusServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPremiumServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPurchaseLink('https://buy.stripe.com/aEU8wW5rV0oxgyk9AM?prefilled_promo_code=50OFF');
        setMonthlyServicePrice('100.00');
        setPurchaseBTNText('Get Website');
        setMonthlyServices('Enjoy 50% off on Updates and Maintenance for the first year');
        setTotalAmount('$500.00');
        setRenderAppServices({display: 'none'});
        setRenderWebsiteServices({display: 'grid'});


    };

    const plusServiceHandler = () => {
        setServiceTile('Launch your online and social medial marketing.');
        setServiceDescription("For a one-time fee, I'll handle the setup of your marketing campaign and social media presence, creating tailored strategies and visuals. Enjoy a stress-free, polished start to your digital marketing efforts, with ongoing support through my monthly Digital Marketing Package.");
        setPlusServiceBTNStyles({ backgroundColor: '#136db0', color: 'white' });
        setBasicServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPremiumServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPurchaseLink('https://buy.stripe.com/aEU5kK6vZdbjci48wG');
        setMonthlyServicePrice('150.00');
        setPurchaseBTNText('Get Marketing');
        setMonthlyServices('Digital Marketing Package');
        setTotalAmount('$1,000.00');
        setRenderAppServices({display: 'none'});
        setRenderWebsiteServices({display: 'grid'});



    };

    const premiumServiceHandler = () => {
        setServiceTile('Get an App or Transform your website into an app.');
        setServiceDescription("Need a custom app? I'll create an intuitive app with a robust database tailored to your needs. Boost engagement, accessibility, and brand loyalty. Let's elevate your digital presence.");
        setPremiumServiceBTNStyles({ backgroundColor: '#136db0', color: 'white' });
        setBasicServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPlusServiceBTNStyles({ backgroundColor: 'white', color: '#136db0' });
        setPurchaseLink('https://buy.stripe.com/bIYbJ86vZ2wFeqc6oz');
        setMonthlyServicePrice('240.00');
        setPurchaseBTNText('Get App');
        setMonthlyServices('Updates and Maintenance');
        setTotalAmount('');
        setRenderAppServices({display: 'grid', gap: '10px'});
        setRenderWebsiteServices({display: 'none'});

    };
  
   

    return (
        <div className='Services-Container'>

            <main>
                <ul className='ServicesCard'>
                    <li>
                        <h2>Start Your Digital Presence.</h2>
                        <div className='ServiceCardInfo'>
                            <p>In today’s digital world, having a website or an app is no longer a luxury—it’s a necessity. From enterprises to small local businesses, having a digital presence is essential.</p>
                            <img src="/img/HeroImageMobile.png" alt="" />
                            <section className='Cost-Container'>
                                <main>
                                    <ul className='ServicesCard ServiceBackground'>
                                        <div className="MonthlyOptions">
                                            <button style={basicServiceBTNStyles} onClick={basicServiceHandler}>Website</button>
                                            <button style={plusServiceBTNStyles} onClick={plusServiceHandler}>Marketing</button>
                                            <button style={premiumServiceBTNStyles} onClick={premiumServiceHandler}>App</button>
                                        </div>
                                        {renderWebsiteServices()}
                                        {renderAppServices()}
                                    </ul>
                                </main>
                            </section>
                        </div>
                    </li>
                </ul>
                <ul  className='ServicesCard'>
                    <li>
                        <p>I remember the first time I designed a website for a friend’s restaurant. Watching their business flourish online ignited my passion for web design and development. Since then, I’ve helped businesses establish their online presence and grow their brand.</p>

                        <p>Whether you’re looking to create a new website, revamp an existing one, or develop an app, I can help.</p>

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
