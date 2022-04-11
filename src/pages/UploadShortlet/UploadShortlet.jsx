import React from 'react'
import FormInput from '../../components/UI/FormInput/Index'

import './UploadShortlet.css'

const UploadShortlet = () => {
  return (
    <div className='upload_shortlet'>
        <div className='upload_form'>
            <p className='shortlet_info'>Shortlet Information</p>
            <p className='shortlet_sub_info'>Kindly provide us with the correct details as required below.</p>

            <form action="">
                <div className='house_details'>
                    <div className='form_input'>
                        <FormInput placeholder='House Title' />
                    </div>
                    <div>
                        <FormInput placeholder='Address' />
                    </div>
                    
                </div>

                <div className='house_details'>
                    <FormInput placeholder='Enter State' />
                    <FormInput placeholder='Enter City' />
                </div>
                <div className='house_details1'>
                    <FormInput placeholder='Enter City' />
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

                <FormInput placeholder='Brief description of the house condition' />
                <FormInput placeholder='List the house rules and each can be seperated with comma i.e. no repainting , no re-adjustments' />

                <div className='upload_images'>
                    <p className='upload_images_Box'>
                        Upload Images
                    </p>
                    <p className='image_details'>
                    Provide clear images that best shows vital areas of the shortlet.
                    </p>
                    
                    <FormInput type='file' style={{width: "20%"}} />
                </div>
            </form>
        </div>

        <div>
            <a href="#">Back</a>
            {/* <Link to='/' >Back</Link> */}
        </div>
    </div>
  )
}

export default UploadShortlet