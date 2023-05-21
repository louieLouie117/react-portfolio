import React from 'react'
import HeroBanner from './HeroBanner'

function AfterPayment(props) {
  return (
    <div>
        <main className='Form-Container'>
        <iframe title='FormPayment' width="2640px" height="1080px" src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__lqWrRdUMFU1RE1CMDlQS0tPRk5XN1EzRzZXNElOMy4u&embed=true" frameborder="0" marginwidth="0" marginheight="0" style={{border: "none", maxWidth: "100%", maxHeight:"120vh"}} allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
        </main>
        <HeroBanner></HeroBanner>
 
    </div>
  )
}


export default AfterPayment
