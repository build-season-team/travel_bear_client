import React from 'react'
import Arrow from '../../../assets/images/arrow.svg'
import classes from './back.module.css'

const Back = ({className}) => {
  return (
    <div className={`${classes.main} ${className}`}>
      <div className={classes.body} >
        <img src={Arrow}/>
        <p>Back</p>
      </div>
    </div>
  )
}

export default Back