import React from 'react'
import classes from './dropdown.module.css'

const DropDown = ({select, opt1, opt2, opt3, opt4, opt5, ...props}) => {

    

  return (
    <div >
        <div className='dropdown'>
            <div className='select'>{select}</div>
                <div>
                    <p className='options'>{opt1}</p>
                    <p className='options'>{opt2}</p>
                    <p className='options'>{opt3}</p>
                </div>
        </div>    
        
    </div>
  )
}

export default DropDown