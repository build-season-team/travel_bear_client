import React from 'react'
import classes from './dropdown.module.css'

const DropDown = () => {



  return (
    <div >
        <div className={classes.dropdown}>
        <ul>
            <li>Dashboard</li>
            <li className={classes.list_item}>Sign Up</li>
        </ul>
               
        </div>    
        
    </div>
  )
}

export default DropDown