import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import Button from '../Button';
import Divider from '../Divider';
import classes from './ShortletCard.module.css';
import test from './../../../assets/images/test.png'

const ShortletCard = () => {
  return (
    <div className={classes.card}>
        <div className={classes.card__img}>
            <img src={test}  alt="card img" />
        </div>
        <div className={classes.card__rate}> <MdOutlineStar color='gold'  size={18}/> <div>4.5</div> </div>
        <div className={classes.card__writeups}>
            <div className={classes.card__header}>Horison Ultima Bandung</div>
            <div className={classes.card__text}>clean 3bedrorom apartment with seperate toilets but shared kitchen.</div>
        </div>
        <Divider />
        <div className={classes.card__footer}>
            <div className={classes.card__footer_text}> N16,700 </div>
            <Button name='Book Now' primary />
        </div>
    </div>
  )
}

export default ShortletCard