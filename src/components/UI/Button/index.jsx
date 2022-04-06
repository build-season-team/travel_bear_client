import React from 'react'
import classes from "./Button.module.css";

const Button = ({primary, secondary, dark, btnLink, danger, disabled, icon, iconPosition, name, onClick}) => {
    let btn;
    let btnSpace;
    if(primary) {
        btn = 'btn__primary';
    }else if(secondary) {
        btn = 'btn__secondary';
    }else if(danger) {
        btn = 'btn__danger';
    }else if(dark) {
        btn = 'btn__dark';
    }

    if(iconPosition === 'left') {
        btnSpace = 'left__margin';
    }else if(iconPosition === 'right') {
        btnSpace = 'right__margin';
    }


  return (
    <div className={classes.btn}>
        <button 
            disabled={disabled} 
            className={`${classes.btn__link} ${classes[btn]}`} 
            onClick={onClick ? onClick : () =>  {}} 
            >
                {icon && iconPosition === 'left' && <img  src={icon} alt="btn icon" />}
                <p className={classes[btnSpace]}>{name}</p>
                {icon && iconPosition === 'right' && <img  src={icon} alt="btn icon"  />}
            
            </button>
    </div>
  )
}

export default Button;