import React from 'react'
import classes from './FormInput.module.css'

import CheckMark from '../../../assets/icons/check-mark.svg'

const FormInput = ({id, name, label, text, active, required, disabled, value, type, size = 'medium', className = '', icon, onChange, iconPosition, placeholder,
  ...props }) => {
  return (
    <div>
      <div className={classes.form_input}>
        {label && <label className={classes.label} htmlFor={id}>{label}</label>}
          <input 
            type={type} 
            id={id} 
            placeholder={placeholder}
            value={value}
            name={name}
            disabled={disabled ? true : false}
            required={required ? true : false}
            className={className}
            onChange={onChange}
            label={label}
            icon={icon}
            
          />
          <span className={classes.icon}> {icon} </span>
      </div>
      <p className={classes.some_copy}>{text}</p>
    </div>
  )
}

export default FormInput