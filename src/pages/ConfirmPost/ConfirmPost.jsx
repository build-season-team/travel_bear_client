import React from 'react'
import { Link } from 'react-router-dom'
import FooterWrap from '../../components/UI/Footer'
import Header from '../../components/UI/Header'
import MainTab from '../../components/UI/MainTab/MainTab'
import Button from '../../components/UI/Button/index'
import './ConfirmPost.css'

import Image1 from '../../assets/images/house1.jpg'
import Image2 from '../../assets/images/house2.jpg'
import Image3 from '../../assets/images/house3.jpg'
import Image4 from '../../assets/images/house4.jpg'
import Image5 from '../../assets/images/house5.jpg'
// import ImageTrial from '../../assets/images/img-trial.jpg'


const ConfirmPost = () => {
  return (
    <>
      <Header/>
        <div className='destination_body'>
          <div className='destination_header'>
            <div>
                <p className='destination_title'>
                  Quin Lay Hotel
                </p>
                <div className='location_desc'>Location: <span> Enugu </span></div>
                <div className='amount'>N 45,000</div>
            </div>
            
            <div className='link_to'>
                <span>&#x2039;</span>
                <Link className='link_to_link' to='/upload' > Back</Link>
            </div>
            
          </div>
          <div className='image_grid'>
              <div className='img1'>
                  <img className='img_size' src={Image1} alt="uploaded image" />  
              </div>

              <div className='in_grid'>

                  <div className='img1'>
                      <img className='img_size' src={Image2} alt="uploaded image" />  
                  </div>
                  <div className='img1'>
                      <img className='img_size' src={Image3} alt="uploaded image" />  
                  </div>
                  <div className='img1'>
                      <img className='img_size' src={Image4} alt="uploaded image" />  
                  </div>
                  <div className='img5'>
                      <img className='img_size' src={Image5} alt="uploaded image" />  
                  </div>
              </div>
              
          </div>
          <MainTab />
          <div className='btn_width'>
          <Button primary bigCard authBtn name='Publish' />
          </div>
        </div>
        
      
      <FooterWrap/>
    </>
  )
}

export default ConfirmPost