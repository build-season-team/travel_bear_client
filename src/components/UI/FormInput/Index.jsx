import React from 'react'
import classes from './FormInput.module.css'


import CheckMark from '../../../assets/icons/check-mark.svg'
import QuestionIcon from '../../../assets/icons/question.svg'



const FormInput = ({id, name, label, text, active, required, disabled, value, type, icon, error, success, onChange, iconPosition, placeholder,
  ...props }) => {

    // let successCheck;
    // if(error) {
    //   successCheck = 'error';
    // }else if(success){
    //   successCheck = 'error';
    // }else{
    //   successCheck=''
    // };

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
            onChange={onChange}
            label={label}            
            icon={icon}
            success={success}
            error={error}
          />

              {/* {success && <p>""</p>}
              {error && <p className="error_message">"Something is wrong, please check your name."</p>} */}

          <span className={classes.icon}> {icon} </span>
          <span className={classes.error}> {success ? <img src= { CheckMark } alt="" /> : <img src= { QuestionIcon } alt="" />} </span>

      </div>
      <p className={classes.some_copy}>{text}</p>
    </div>
  )
}

export default FormInput