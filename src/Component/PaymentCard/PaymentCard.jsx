import React from 'react'
import css from './payment.module.css'

import py from './Frame 12537.png'

const PaymentCard = () => {

  return (
    <>
    <div className={css.main}>
      
      <nav className={css.row}>
        <div> 
          <p>1</p>
          <p>Sign up</p>
        </div>
        <div> 
          <p>2</p>
          <p>Subscribe</p>
        </div>
        
      </nav>

      <nav className={css.row}>
      Select your subcription plan
      </nav>

      <nav className={css.row}>
      
    
        
       <div className={css.list}>
         <input type="radio" />
         <p>12 Months Subscription</p>
         <p>Total<span>₹99</span><br />₹8/mo</p>
       <p style={{background:"rgba(58, 60, 58, 0.411)"}}  className={css.recommand}><div style={{background:"red"}} >Offer expired  </div></p>
       </div>
       
       <div className={css.list}>
         <input type="radio" />
         <p>12 Months Subscription</p>
         <p>Total<span>₹179</span><br />₹15/mo</p>
       <p style={{background:"rgba(106, 255, 0, 0.489)"}}  className={css.recommand}><div style={{background:"green"}} >Recommended </div></p>
       </div>

       <div className={css.list}>
         <input type="radio" />
         <p>6 Months Subscription</p>
         <p>Total<span>₹149</span><br />₹25/mo</p>
       
       </div>

       <div className={css.list}>
         <input type="radio" />
         <p>3 Months Subscription</p>
         <p>Total<span>₹99</span><br />₹33/mo</p>
       
       </div>





      </nav>
      <nav className={css.row}>

        <div className={css.lis}>
           <ul><li>Subscription Fee</li>
           <li>₹18,500</li></ul>
        </div>
        <div className={css.lis}>
          <ul><li>Limited time offer</li> <li>-₹18,401</li></ul>
         <p>Offer valid till 25th March 2023</p>

        </div>
        <div className={css.lis}>
        <ul><li>Total{"(Inc.of18%GST"}</li>
           <li>₹149</li></ul>
        </div>

         

      </nav>
      <nav className={css.row}>

        <ul>
          <li>CANCEL</li>
          <li>PROCEED TO PAY</li>
        </ul>
        
        <img src={py} alt="" />
      </nav>
      
      </div>
    </>
  )
}

export default PaymentCard