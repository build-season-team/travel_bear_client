import React from 'react'
import classes from './update.module.css';
import envelope from '../../assets/images/Envelope.svg'
import Button from '../UI/Button'

function update() {
    return (
        <div className={classes.back}>
            <div className={classes.background}>
               <img src={envelope}/>
               <div className={classes.sidebox}>
               <h3>Get notified about any update</h3>
               <div className={classes.sub}>
                   <input type="email" placeholder='Enter email'/>
                   <Button dark name={'Subscribe'} />
               </div>
               </div>
            </div>
        </div>
    );
}

export default update