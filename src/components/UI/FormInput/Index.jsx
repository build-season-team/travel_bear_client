import React, { useState } from 'react'
import classes from './FormInput.module.css'



import CheckMark from '../../../assets/icons/tick.svg'
import QuestionIcon from '../../../assets/icons/question.svg'



const FormInput = ({id, label, text, active, required, disabled, type, icon, errors, success, pattern, iconPosition, placeholder, name, form, onChange, onBlur, className,
  ...props }) => {

    let emailRegex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    let textColor;
    
    const [valid , setValid] = useState(null)
    const [value, setValue] = useState('');
    const [borderColor, setBorderColor] = useState(null)

    const checkValid = (type,value) => {
        if(type === 'email')  emailRegex.test(value) ? setValid(true): setValid(false)
        return
    }

    if(errors) {
      textColor = 'text__red';
    }

  return (
    
    <div>
      <div className={`${classes.form_input} ${classes.form_file} `}>
        {label && <label className={`${classes.label} `} htmlFor={id}>{label}</label>}
        <div className={`${classes.form_outline} ${borderColor ? classes[borderColor] : ''} ${className && className}`}>
            <input 
              type={type} 
              id={id} 
              placeholder={placeholder}
              value={form?.[name] ? form[name] : ''}
              disabled={disabled ? true : false}
              required={required ? true : false}
              onChange={(e) =>{
                  onChange(e, name);
              } }
              pattern={pattern ? pattern : null}
              label={label}            
              icon={icon}
              success={success}
              onFocus={() => setBorderColor('border__blue')}
              onBlur = {(e)=>{
                setBorderColor(null);
                if(value === '') setValid(null);
                onBlur(e, name)

              }}
              {...props}
            />

              {/* {success && <p>""</p>}
              {error && <p className="error_message">"Something is wrong, please check your name."</p>} */}

          
            {icon && <span className={classes.icon}> {icon} </span>}
            {valid && <span className={classes.error}> {valid === null ? null : valid === true ? <img src= { CheckMark } alt="" /> : <img src= { QuestionIcon } alt="" />} </span>}
          </div>
      {errors?.[name] && <p className={`${classes.some_copy} ${textColor ? classes[textColor] : ''}`}>{errors[name]}</p>}

          
      </div>
    </div>
  )
}

export default FormInput