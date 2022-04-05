import React from 'react'
import classes from "./Button.module.css";

const Button = ({primary, secondary, dark, btnLink, danger, disabled, icon, iconPosition, name, link, onClick}) => {
    let btn;
    if(primary) {
        btn = 'btn__primary';
    }else if(secondary) {
        btn = 'btn__secondary';
    }else if(danger) {
        btn = 'btn__danger';
    }else if(dark) {
        btn = 'btn__dark';
    }


  return (
    <div className={classes.btn}>
        <button disabled={disabled} className={`${classes.btn__link} ${classes[btn]}`} onClick={onClick ? onClick : () =>  {}} to={link ? link : '#'}>{name}</button>
    </div>
  )
}

export default Button;