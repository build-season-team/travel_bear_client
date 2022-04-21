import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";

import FormInput from '../../components/UI/FormInput/Index'

import './UploadShortlet.css'
import FooterWrap from '../../components/UI/Footer'
import Header from '../../components/UI/Header'
import Button from '../../components/UI/Button'
import FileUpload from '../../components/UI/FileUpload/FileUpload'
import ConfirmPost from '../ConfirmPost/ConfirmPost';

const UploadShortlet = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true)
    }
  return (
      <>
        <Header />
        {
            !isSubmitted ? 
        (
        <>
            <div className='upload_header'>
                <div className='upload__text'>
                    <p className='shortlet_info'>Shortlet Information</p>
                    <p className='shortlet_sub_info'>Kindly provide us with the correct details as required below.</p>
                </div>
                <div className='link_to'>
                    <Link className='link_to_link' to='/login' > <span className='upload__icon'><FaAngleLeft  size={24}   /> </span> <span className='upload__text'>Back</span> </Link>
                </div>
            </div>
            <div className='upload_shortlet'>
                <div className='upload_form'>
                    <form onSubmit={onSubmit} action="">
                        <div className='house_details'>
                            <div className='form_input'>
                                <FormInput placeholder='House Title'  type='text'  onChange={() => {}} />
                            </div>
                            <div className='form_input'>
                                <FormInput type='text' placeholder='Address' />
                            </div>
                            
                        </div>

                        <div className='house_details'>
                            <div className='form_input'>
                                <FormInput type='text' placeholder='Enter State' />
                            </div>

                            <div className='form_input'>
                                <FormInput type='text' placeholder='Enter City' />
                            </div>
                            
                            
                        </div>
                        <div className='house_details1'>
                            <FormInput type='number' placeholder='Enter Amount' />
                        </div>
                        

                        <p className='house_condition'>
                            What condition best describes your shortlet?
                        </p>
                        
                        <div className='radio_input'>
                            {/* <FormInput type={'radio'} label={'fdf'} />
                            <FormInput type={'radio'} label={'fdf'} /> */}

                            <input type="radio" id="good" name="fav_language" value="HTML"/>
                            <label for="good">Good</label>
                            <input type="radio" id="excellent" name="fav_language" value="CSS" />
                            <label for="excellent">Excellent</label>
                            <input type="radio" id="others" name="fav_language" value="JavaScript" />
                            <label for="others">Others</label>
                        </div>
                        
                        <div className='description_input'>
                            <textarea name="rules" id="rules" cols="30" placeholder='Brief description of the house condition' rows="10">
                                
                            </textarea>
                        </div>

                        <div className='description_input'>
                            <textarea name="rules" id="rules" cols="30" placeholder='List the house rules and each can be seperated with comma i.e. no repainting , no re-adjustments' rows="10">
                                    
                            </textarea>
            
                        </div>
                        
                        

                        <div className='upload_images'>
                            <p className='upload_images_Box'>
                                Upload Images
                            </p>
                            <p className='image_details'>
                            Provide clear images that best shows vital areas of the shortlet.
                            </p>

                            <div className='file_upload'>
                                <FileUpload />
                            </div> 
                            
                        </div>
                        <div className='btn'>
                            <Button formBtn primary bigCard authBtn  name='Proceed' />
                        </div>
                        
                    </form>
                </div>

            
            </div>
        </>)
        :
        <ConfirmPost setIsSubmitted={setIsSubmitted} />
        }
        <FooterWrap />
      </>
    
  )
}

export default UploadShortlet