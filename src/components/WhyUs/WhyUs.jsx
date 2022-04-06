import React from 'react'
import classes from './WhyUs.module.css';
import house from  '../../assets/images/svg-house.svg';
import phone from  '../../assets/images/svg-phone.svg';
import wallet from  '../../assets/images/svg-wallet.svg';
const WhyUs = () => {
  return (
    <div className={classes.whyUs}>
        
        <h1>Why book with TravelBear?</h1>
        <div className={classes.pics}>
        <div className={classes.box}>
            <img src={phone}/>
            <h4> Hassle-Free</h4>
            <p>Make a transaction from anywhere at<br/>any time, from desktop or mobile web. </p>
        </div>
        <div className={classes.box}>
            <img src={house}/>
            <h4>Service You Can Trust</h4>
            <p>You get what you paid for -<br/> guaranteed.</p>
        </div>
        <div className={classes.box}>
            <img src={wallet} />
            <h4>One Time Payment</h4>
            <p>Be sure to never be asked to pay <br/> extra charge as everything is done <br/> from the start.</p>
        </div>
        </div>
    </div>
  )
}

export default WhyUs