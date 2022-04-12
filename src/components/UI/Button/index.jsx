import React from 'react'
import classes from "./Button.module.css";

const Button = ({primary, secondary, dark, btnLink, bigCard, danger, disabled, icon, iconPosition, name, onClick, navBtn}) => {
    let btn;
    let btnSpace;
    let width;
    if(primary) {
        btn = 'btn__primary';
    }else if(secondary) {
        btn = 'btn__secondary';
    }else if(danger) {
        btn = 'btn__danger';
    }else if(dark) {
        btn = 'btn__dark';
    }else if(btnLink) {
        btn = 'btn__linked';
    }

    if(iconPosition === 'left') {
        btnSpace = 'left__margin';
    }else if(iconPosition === 'right') {
        btnSpace = 'right__margin';
    }

    if(!navBtn) {
        width = 'nav__btn';
    }


  return (
    <div className={classes.btn}>
        <button 
            disabled={disabled} 
            className={`${classes.btn__link} ${classes[btn]} ${bigCard ? classes.btn__big__link : ''} ${width ? classes[width] : ''} `} 
            onClick={onClick ? onClick : () =>  {}} 
            >
                {icon && iconPosition === 'left' && <img  src={icon} alt="btn icon" />}
                {name && <p className={classes[btnSpace]}>{name}</p>}
                {icon && iconPosition === 'right' && <img  src={icon} alt="btn icon"  />}
            
            </button>
    </div>
  )
}

export default Button;