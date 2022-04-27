import React from 'react'
import { Link } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/fa';
import MainTab from '../../components/UI/MainTab/MainTab'
import Button from '../../components/UI/Button/index'
import './ConfirmPost.css'

import Image1 from '../../assets/images/house1.jpg'
import Image2 from '../../assets/images/house2.jpg'
import Image3 from '../../assets/images/house3.jpg'
import Image4 from '../../assets/images/house4.jpg'
import Image5 from '../../assets/images/house5.jpg'
// import ImageTrial from '../../assets/images/img-trial.jpg'


const ConfirmPost = ({ setIsSubmitted, selectedImages, form, uploadShortlet, loading }) => {


  return (
    <>
      <div className='destination_body'>
        <div className='destination_header'>
          <div>
            <p className='destination_title'>
              {form.houseTitle}
            </p>
            <div className='location_desc'>Location: <span> {form.state} </span></div>
            <div className='amount'>N {form.amount}</div>
          </div>

          <div className='link_to'>
            <a className='link_to_link' onClick={() => setIsSubmitted(false)} > <span className='upload__icon'><FaAngleLeft size={24} /> </span> <span className='upload__text'>Back</span> </a>
          </div>

        </div>
        <div className='image_grid'>
          <div className='img1'>
            <img className='img_size' src={selectedImages[0]} alt="uploaded image" />
          </div>

          <div className='in_grid'>

            {
              
            selectedImages.slice(1).map((image, i) => (
              <div className={`img${i !== 3 ? 1 : 5 }`} key={i}>
                <img className='img_size' src={image} alt="uploaded image" />
              </div>
            ))
          }
          </div>

        </div>
        <MainTab description={form.description} rules={form.houseRules} />
        <div className='btn_width'>
          <Button onClick={uploadShortlet} primary bigCard authBtn name={`${loading ? 'loading...' : 'Publish'}`} />
        </div>
      </div>

    </>
  )
}

export default ConfirmPost