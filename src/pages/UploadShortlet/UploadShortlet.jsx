import React from 'react'
import { Link } from 'react-router-dom'
import FormInput from '../../components/UI/FormInput/Index'

import './UploadShortlet.css'
import FooterWrap from '../../components/UI/Footer'
import Header from '../../components/UI/Header'
import Button from '../../components/UI/Button'

const UploadShortlet = () => {
  return (
      <>
      <Header />
            <div className='upload_shortlet'>
                <div className='upload_form'>
                    <p className='shortlet_info'>Shortlet Information</p>
                    <p className='shortlet_sub_info'>Kindly provide us with the correct details as required below.</p>

                    <form>
                        {/* <div className='house_details'>
                            <div className='form_input'>
                                <FormInput placeholder='House Title' />
                            </div>
                            <div className='form_input'>
                                <FormInput placeholder='Address' />
                            </div>
                            
                        </div> */}

                        {/* <div className='house_details'>
                            <div className='form_input'>
                                <FormInput placeholder='Enter State' />
                            </div>

                            <div className='form_input'>
                                <FormInput placeholder='Enter City' />
                            </div>
                            
                            
                        </div> */}
                        {/* <div className='house_details1'>
                            <FormInput placeholder='Enter Amount' />
                        </div> */}
                        

                        {/* <p className='house_condition'>
                            What condition best describes your shortlet?
                        </p> */}
                        
                        <div className='radio_input'>
                            

                            <input type="radio" id="good" name="good" value="good"/>
                             <label for="good">Good</label>
                              <input type="radio" id="excellent" name="excellent" value="excellent" />
                              <label for="excellent">Excellent</label>
                              <input type="radio" id="others" name="others" value="others" />
                              <label for="others">Others</label>
                        </div>
                        
                        {/* <div className='description_input'>
                        <FormInput placeholder='Brief description of the house condition' />
                        </div> */}

                        {/* <div className='description_input'>
                        <FormInput placeholder='List the house rules and each can be seperated with comma i.e. no repainting , no re-adjustments' />
                        </div> */}
                        
                        

                        {/* <div className='upload_images'>
                            <p className='upload_images_Box'>
                                Upload Images
                            </p>
                            <p className='image_details'>
                            Provide clear images that best shows vital areas of the shortlet.
                            </p>

                            <div className='file_upload'>
                            <FormInput type='file' style={{width: "20%"}} />
                            </div> 
                            
                        </div> */}
                        {/* <div className='btn'>
                            <Button primary name='Proceed' />
                        </div> */}
                        
                    </form>
                </div>

            <div className='link_to'>
                <span>&#x2039;</span>
                <Link className='link_to_link' to='/login' > Back</Link>
            </div>
        </div>
      <FooterWrap />
      </>
    
  )
}

export default UploadShortlet