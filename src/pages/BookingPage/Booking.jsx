import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { MdOutlineStar } from "react-icons/md";

import MainTab from '../../components/UI/MainTab/MainTab'
import Button from '../../components/UI/Button/index'
import classes from './Booking.module.css'
import Header from '../../components/UI/Header';
import FooterWrap from '../../components/UI/Footer';

import Image1 from '../../assets/images/house1.jpg'
import Image2 from '../../assets/images/house2.jpg'
import Image3 from '../../assets/images/house3.jpg'
import Image4 from '../../assets/images/house4.jpg'
import Image5 from '../../assets/images/house5.jpg'


const Booking = ({ setIsSubmitted, selectedImages, form, rating, uploadShortlet, loading }) => {


  return (
    <>

    <Header />
      <div className={classes.destination_body}>
        <div className={classes.destination_header}>
          <div>
            <p className={classes.destination_title}>
            Quin Lay Hotel
              {/* {form.houseTitle} */}
            </p>
            <div className={classes.location_desc}>Location: <span> 
                Enugu
                {/* {form.state}  */}
            </span></div>
            <div className={classes.amount}>
            {/* {form.amount} */}
                <div>N 20,000</div>
                <div> <MdOutlineStar color='gold'  size={18}/><MdOutlineStar color='gold'  size={18}/><MdOutlineStar color='gold'  size={18}/><MdOutlineStar color='gold' size={18}/><MdOutlineStar color='gold' size={18}/></div>
            </div>
          </div>

          <div className={classes.link_to}>
            <a className={classes.link_to_link} onClick={() => setIsSubmitted(false)} > <span className={classes.upload__icon}><FaAngleLeft size={24} /> </span> <span className={classes.upload__text}>Back</span> </a>
          </div>

        </div>
        <div className={classes.image_grid}>

          <div className={classes.img1}>
            <img className={classes.first_image} src={Image1} alt="beautiful apartment" />
            {/* <img className={classes.img_size} src={selectedImages[0]} alt="uploaded image" /> */}
          </div>

          <div className={classes.in_grid}>

                <img className={ `${classes.img_size} ${classes.img_size_1}`} src={Image2} alt="uploaded image" />
                <img className={ `${classes.img_size} ${classes.img_size_2}`} src={Image3} alt="uploaded image" />
                <img className={classes.img_size} src={Image4} alt="uploaded image" />
                <img className={classes.img_size} src={Image5} alt="uploaded image" />

            {/* {
              
            selectedImages.slice(1).map((image, i) => (
              <div className={classes[`img${i !== 3 ? 1 : 5 }`]} key={i}>
                <img className={classes.img_size} src={image} alt="uploaded image" />
              </div>
            ))
          } */}
          </div>

        </div>
        <MainTab  />
        <div className={classes.btn_width}>

            <Button  primary bigCard authBtn name='Book Now' />
          {/* <Button onClick={uploadShortlet} primary bigCard authBtn name={`${loading ? 'loading...' : 'Publish'}`} /> */}
        </div>
      </div>
    <FooterWrap />
    </>
  )
}

export default Booking