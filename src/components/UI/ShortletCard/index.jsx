import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import Button from '../Button';
import Divider from '../Divider';
import classes from './ShortletCard.module.css';

const ShortletCard = ({big, image, header, text, amount, rating}) => {
  return (
    <div className={`${classes.card} ${big ? classes.card__big : ''}`}>
        <div className={`${classes.card__img} ${big ? classes.card__big__img : ''}`}>
            <img src={image}  alt="card img" />
        </div>
        <div className={`${classes.card__rate} ${big ? classes.card__big__rate : ''}`}> <MdOutlineStar color='gold'  size={18}/> <div>{rating}</div> </div>
        <div className={`${classes.card__writeups} ${big ? classes.card__big__writeups : ''}`}>
            <div className={`${classes.card__header} ${big ? classes.card__big__header : ''}`}>{header}</div>
            <div className={`${classes.card__text} ${big ? classes.card__big__text : ''}`}>{text}</div>
        </div>
        <Divider />
        <div className={`${classes.card__footer} ${big ? classes.card__big__footer : ''}`}>
            <div className={`${classes.card__footer_text} ${big ? classes.card__big__footer_text : ''}`}> {amount} </div>
            {big ? <Button name='Book Now' bigCard  primary /> : <Button name='Book Now'   primary />}
        </div>
    </div>
  )
}

export default ShortletCard