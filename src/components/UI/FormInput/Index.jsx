import React, { useEffect, useState } from 'react'
import classes from './FormInput.module.css'



import CheckMark from '../../../assets/icons/tick.svg'
import QuestionIcon from '../../../assets/icons/question.svg'



const FormInput = ({id, name, label, text, active, required, disabled, type, icon, error, success, iconPosition, placeholder,
  ...props }) => {
   
    const pwdRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#-\$%\^&\*])(?=.{6,})")
    let emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    
    const [valid , setValid] = useState(null)
    const [value, setValue] = useState('')
    const checkValid = (type,value) => {
        
        if(type === 'password') pwdRegex.test(value) ? setValid(true): setValid(false)
        if(type === 'email')  emailRegex.test(value) ? setValid(true): setValid(false)
        return
    }
    const onChange = ({target})=>{
       const {value} = target
       setValue(value)
       
       checkValid(type, value)
    }
   
    let files;
    if(type==='file') {
      files = 'form_file';
    }
  return (
    
    <div>
      <div className={`${classes.form_input} ${classes.form_file}`}>
        {label && <label className={classes.label} htmlFor={id}>{label}</label>}
          <input 
            type={type} 
            id={id} 
            placeholder={placeholder}
            value={value}
            name={name}
            disabled={disabled ? true : false}
            required={required ? true : false}
            onChange={onChange}
            label={label}            
            icon={icon}
            success={success}
            error={error}
            onBlur = {()=>{
              
              if(value === '') setValid(null)
            }}
          />

              {/* {success && <p>""</p>}
              {error && <p className="error_message">"Something is wrong, please check your name."</p>} */}

          <span className={classes.icon}> {icon} </span>
          <span className={classes.error}> {valid === null ? null : valid === true ? <img src= { CheckMark } alt="" /> : <img src= { QuestionIcon } alt="" />} </span>

      </div>
      <p className={classes.some_copy}>{text}</p>
    </div>
  )
}

export default FormInput