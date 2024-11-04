import React from 'react'

function Footer(props) {
  return (
    <div className='footer-container'>
        {/* <a href="/">LC Website Solutions</a>        */}
                  
                      <button className='MainBTN'>
                          <a href="tel:925-809-2738">
                            <img src="/img/Icons/IconPhone.png" alt="" />
    
                          </a>
                          </button>
                          <button className='MainBTN'>
                          <a href="sms:925-809-2738">
                            <img src="/img/Icons/IconText.png" alt="" />
                          </a>
                          </button>
    
                          {/* <a href="mailTo:LCwebsitesolutions@outlook.com?subject=Website&body= Hello Luis Cardona">
                            <img src="/img/Icons/IconEmail.png" alt="" />
                          </a>
                         
     */}
    </div>
  )
}


export default Footer
