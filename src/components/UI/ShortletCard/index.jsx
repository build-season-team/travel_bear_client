import React from 'react';
import { MdOutlineStar } from "react-icons/md";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Button from '../Button';
import Divider from '../Divider';
import classes from './ShortletCard.module.css';

const ShortletCard = ({big, image, header, text, amount, rating, loading, onClick}) => {
  // console.log(typeof onClick)
  return (
    <div className={`${classes.card} ${big ? classes.card__big : ''}`}>
        <div className={`${classes.card__img} ${big ? classes.card__big__img : ''}`}>
        {!loading ? <img src={image || ''} alt="card img" /> : <Skeleton  height={'100%'} width={'100%'}  />}
        </div>
        <div className={`${classes.card__rate} ${big ? classes.card__big__rate : ''}`}> {!loading ? <><MdOutlineStar color='gold'  size={18}/> <div>{rating}</div> </>: <Skeleton />} </div>
        <div className={`${classes.card__writeups} ${big ? classes.card__big__writeups : ''}`}>
            <div className={`${classes.card__header} ${big ? classes.card__big__header : ''}`}>{!loading ? header : <Skeleton />}</div>
            <div className={`${classes.card__text} ${big ? classes.card__big__text : ''}`}>{!loading ? text : <Skeleton />}</div>
        </div>
        <Divider />
        <div className={classes.per_night}>Per Night</div>
        <div className={`${classes.card__footer} ${big ? classes.card__big__footer : ''}`}>
        <div className={`${classes.card__footer_text} ${big ? classes.card__big__footer_text : ''}`}> {!loading ? `₦${amount || ''}` : <Skeleton height={60} width={100} />} </div>
        {!loading ? big ? <Button name='Book Now' onClick={onClick} bigCard primary /> : <Button onClick={onClick} name='Book Now' primary /> : <Skeleton height={60} width={100} />}
        
        </div>
    </div>
  )
}

export default ShortletCard