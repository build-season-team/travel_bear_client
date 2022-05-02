import React, { useContext, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import { MdOutlineStar, MdOutlineStarOutline, MdOutlineStarHalf } from "react-icons/md";

import MainTab from '../../components/UI/MainTab/MainTab'
import Button from '../../components/UI/Button/index'
import classes from './Booking.module.css'
import Header from '../../components/UI/Header';
import FooterWrap from '../../components/UI/Footer';
import {ShortletContext} from '../../store/shortletContext/ShortletProvider';

import Image1 from '../../assets/images/house1.jpg'
import Image2 from '../../assets/images/house2.jpg'
import Image3 from '../../assets/images/house3.jpg'
import Image4 from '../../assets/images/house4.jpg'
import Image5 from '../../assets/images/house5.jpg'
import getOneShortlet from '../../store/shortletContext/actionCreators/getOneShortlet';
import Skeleton from 'react-loading-skeleton';
import { BASE_SHORTLET_URL_DEV } from '../../constants/base';


const Booking = () => {

  const {shortletDispatch, shortletState: {loading, error, shortlet}} = useContext(ShortletContext);
  const navigate = useNavigate();
  const {houseID} = useParams()
  let startDiv;

  useEffect(() => {
    getOneShortlet(houseID.split('-')[0])(shortletDispatch);
  }, [])

  if (shortlet.ratingsAverage) {
    startDiv = new Array(5).fill(0).map((cur, i) => {
      if (shortlet.ratingsAverage - (i ) < 1 && shortlet.ratingsAverage - (i) >= 0.5) return (<MdOutlineStarHalf key={i} color='gold' size={18} />)
      if (shortlet.ratingsAverage - (i ) <= 0.5) return (<MdOutlineStarOutline key={i} color='gold' size={18} />)
      return (<MdOutlineStar key={i} color='gold' size={18} />)
    });
  }else {
    startDiv = '';
  }

 



  return (
    <>

    <Header />

      <div className={classes.destination_body}>
        <div className={classes.destination_header}>
          <div>
            <p className={classes.destination_title}>
            {loading ? <Skeleton /> : shortlet.houseTitle}
              {/* {form.houseTitle} */}
            </p>
            <div className={classes.location_desc}>
              {loading ? <Skeleton width={100} height={50} /> :
              <>
                  Location: <span> 
               {shortlet.state}
                  </span>
              </>
              }
            </div>
            <div className={classes.amount}>
            {/* {form.amount} */}
            {
                loading ? <Skeleton width={200} height={50} /> :
                <>
                  <div>{`N ${shortlet.amount || ''}`}</div>
                    <div>{startDiv}</div>
                </>
            }
               
            </div>
          </div>

          <div className={classes.link_to}>
            <a className={classes.link_to_link} onClick={() => navigate(-1)} > <span className={classes.upload__icon}><FaAngleLeft size={24} /> </span> <span className={classes.upload__text}>Back</span> </a>
          </div>

        </div>
        <div className={classes.image_grid}>

          <div className={classes.img1}>
            {loading ? <Skeleton width={'100%'} height={'100%'} /> : 
              <img className={classes.first_image} src={shortlet.image?.[0] && BASE_SHORTLET_URL_DEV + shortlet.image?.[0] } alt="beautiful apartment" />
            }
            {/* <img className={classes.img_size} src={selectedImages[0]} alt="uploaded image" /> */}
          </div>

          <div className={classes.in_grid}>
              <div className={classes.img_size}>
              {loading ? <Skeleton width={'100%'} height={'100%'} /> : <img src={shortlet.image?.[1] && BASE_SHORTLET_URL_DEV + shortlet.image?.[1]} alt="uploaded image" />}
              </div>
              <div className={classes.img_size}>
              {loading ? <Skeleton width={'100%'} height={'100%'} /> : <img src={shortlet.image?.[2] && BASE_SHORTLET_URL_DEV + shortlet.image?.[2]} alt="uploaded image" />}
              </div>
              <div className={classes.img_size}>
              {loading ? <Skeleton width={'100%'} height={'100%'} /> : <img src={shortlet.image?.[3] && BASE_SHORTLET_URL_DEV + shortlet.image?.[3]} alt="uploaded image" />}
              </div>
              <div className={classes.img_size}>
              {loading ? <Skeleton width={'100%'} height={'100%'} /> : <img src={shortlet.image?.[4] && BASE_SHORTLET_URL_DEV + shortlet.image?.[4]} alt="uploaded image" />}
              </div>

                
                
                
                

            {/* {
              
            selectedImages.slice(1).map((image, i) => (
              <div className={classes[`img${i !== 3 ? 1 : 5 }`]} key={i}>
                <img className={classes.img_size} src={image} alt="uploaded image" />
              </div>
            ))
          } */}
          </div>

        </div>
        <MainTab rules={shortlet.houseRules || ''} description={shortlet.description || ''} loading={loading}  />
        <div className={classes.btn_width}>

            {loading ? <Skeleton width={'100%'} height={60} /> :<Button  primary bigCard authBtn name='Book Now' />}
          {/* <Button onClick={uploadShortlet} primary bigCard authBtn name={`${loading ? 'loading...' : 'Publish'}`} /> */}
        </div>
      </div>
    <FooterWrap />
    </>
  )
}

export default Booking