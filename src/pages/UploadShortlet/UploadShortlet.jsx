import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { FaAngleLeft } from "react-icons/fa";

import FormInput from '../../components/UI/FormInput/Index'
import './UploadShortlet.css'
import FooterWrap from '../../components/UI/Footer'
import Header from '../../components/UI/Header'
import Button from '../../components/UI/Button'
import FileUpload from '../../components/UI/FileUpload/FileUpload'
import ConfirmPost from '../ConfirmPost/ConfirmPost';
import { ShortletContext } from '../../store/shortletContext/ShortletProvider';
import Toast from './../../components/UI/Toast';
import addShortlet from '../../store/shortletContext/actionCreators/addShortlet';
import { CLEAR_MESSAGE } from '../../constants/actionTypes';

const UploadShortlet = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [form, setForm] = useState({roomCondition: 'good'});
    const [errors, setErrors] = useState({images: 'Use 5 images'});
    const [images, setImages] = useState([]);
    const [imageFiles, setImageFiles] = useState([]);
    const [isChanged, setIsChanged] = useState(0);
    const { shortletDispatch, shortletState: {loading, message, error}} = useContext(ShortletContext)

    const onInputChange = (e, key)=> {
         setForm({...form, [key]: e.target.value})
         if(key !== '') {
            setErrors((prevState) => {
                return {...prevState, [key]: null}
            })

        }
    }
    useEffect(() => {
        shortletDispatch({
            type: CLEAR_MESSAGE
        })
    }, [])
   
    const onblur = (e, key) => {
        // console.log(Object.values(form).length)
        if (Object.values(form).length > 0) {
            if(key == 'houseTitle' && form.houseTitle.length < 4) {
                setErrors({...errors, houseTitle: 'house title must be more than 4 letters'});
            }
            if(key == 'address' && form.address.length < 4) {
                setErrors({...errors, address: 'address must be more than 4 letters'})
            }
            if(key == 'city' && form.city.length < 4 ) {
                setErrors({...errors, city: 'city must be more than 4 characters'})
            }
            if(key == 'state' && form.state.length < 3) {
                setErrors( {...errors, state: 'state must be more than 2 characters'})
            }
            if (key == 'amount' && form.amount < 1) {
                setErrors({ ...errors, amount: 'amount must be more than N0' })
            }
            if (key == 'houseRules' && form.houseRules.length < 4) {
                setErrors({ ...errors, houseRules: 'house Rules must be more than 4 characters' })
            }
            if (key == 'description' && form.description.length < 4) {
                setErrors({ ...errors, description: 'description must be more than 4 characters' })
            }
            if(key == 'images' && images.length > 0 && images.length <  5) {
                setErrors({ ...errors, images: 'Images must be 5 images' })
            }
        }
    }
    

    const onRadioChange =  (e, index) => {
        setIsChanged(index)
        setForm((prevState) =>{
           return {...prevState, roomCondition: e.target.value}
        } );
    }

    const onFileSelected = (e) => {
        const files = e.target.files; 
        setImageFiles([...e.target.files])
        const newArr = [];
        Object.values(files).forEach((image, i) => {
            if(i == 4) {
                setErrors({...errors, images: null});
            }
            if (i > 4) {
                 setErrors({...errors, images: 'Images should not be more than 5' });
            }
            const reader = new FileReader();
             reader.readAsDataURL(image);
             reader.onloadend = (() => {
                 let dataUrl = reader.result;
                 newArr.push(dataUrl);
             })
        })
        setImages(newArr);

        
    }


    const uploadShortlet = () => {
        const forms = new FormData();
        forms.append('houseTitle', form.houseTitle);
        forms.append('houseRules', form.houseRules);
        forms.append('description', form.description);
        forms.append('amount', form.amount);
        forms.append('address', form.address);
        forms.append('city', form.city);
        forms.append('state', form.state);
        forms.append('roomCondition', form.roomCondition);
        imageFiles.forEach((image, i) => {
            forms.append(`image`, image);
        });

        addShortlet(forms)(shortletDispatch);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submit')
        if (Object.values(form).length === 8 && Object.values(form).every(item => item.trim().length > 0) && Object.values(errors).every(item => !item)) {
            console.log('submited')
                setIsSubmitted(true)
        };
    }

    const radioCount = [{name: 'good'}, {name: 'excellent'}, {name: 'others'}]; 
        
    
  return (
      <>
        <Header />
        {message && <Toast success message={message} emoji="🥳" />}
        {error && <Toast danger message={error} emoji="😱" />}
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
                    <form onSubmit={onSubmit} encType='multipart/form-data' >
                        <div className='house_details'>
                            <div className='form_input'>
                                <FormInput errors={errors} onBlur={onblur} form={form} placeholder='House Title' name='houseTitle'   type='text'  onChange={onInputChange} required={true} />
                            </div>
                            <div className='form_input'>
                                <FormInput errors={errors} onBlur={onblur} form={form} onChange={onInputChange} type='text' name='address' placeholder='Address' required={true} />
                            </div>
                            
                        </div>

                        <div className='house_details'>
                            <div className='form_input'>
                                              <FormInput errors={errors} onBlur={onblur} form={form} onChange={onInputChange} type='text' name='state' placeholder='Enter State' required={true}/>
                            </div>

                            <div className='form_input'>
                                              <FormInput errors={errors} onBlur={onblur} form={form} onChange={onInputChange} type='text' name='city' placeholder='Enter City' required={true}/>
                            </div>
                            
                            
                        </div>
                        <div className='house_details1'>
                                          <FormInput errors={errors} onBlur={onblur} form={form} onChange={onInputChange} type='number' name='amount' placeholder='Enter Amount' required={true}/>
                        </div>
                        

                        <p className='house_condition'>
                            What condition best describes your shortlet?
                        </p>
                        
                        <div className='radio_input'>
                            {/* <FormInput type={'radio'} label={'fdf'} />
                            <FormInput type={'radio'} label={'fdf'} /> */}
                            {
                                radioCount.map(({name}, index) => (
                                    <React.Fragment key={index}>
                                        <input  type="radio" id={name} onChange={(e) => onRadioChange(e, index)} name="fav_language" value={name}  checked={index == isChanged} />
                                        <label for={name}>{name}</label>
                                    </React.Fragment>
                                )

                                )
                            }

                            
                        </div>
                        
                        <div className='description_input'>
                            <textarea value={ form?.description ? form?.description : ''} name="rules" id="rules" onBlur={(e) => onblur(e, 'description')} onChange={(e) => {onInputChange(e, 'description')}} cols="30" placeholder='Brief description of the house condition' rows="10" required>
                                
                            </textarea>
                                          {errors['description'] && <p className={`red__text`}>{errors['description']}</p>}
                        </div>

                        <div className='description_input'>
                            <textarea value={form?.houseRules ? form?.houseRules : ''} name="houseRules" onChange={(e) => onInputChange(e, 'houseRules')} onBlur={(e) => onblur(e, 'houseRules')} id="rules" cols="30" placeholder='List the house rules and each can be seperated with comma i.e. no repainting , no re-adjustments' rows="10" required>
                                     
                            </textarea>
                                          {errors['houseRules'] && <p className={`red__text`}>{errors['houseRules']}</p>}
            
                        </div>
                        
                        

                        <div className='upload_images'>
                            <p className='upload_images_Box'>
                                Upload Images
                            </p>
                            <p className='image_details'>
                                Provide five (5) clear images that best shows vital areas of the shortlet.
                            </p>

                            <div className='file_upload'>
                                <FileUpload onBlur={onblur} onChangeFile={onFileSelected}  />
                            </div> 
                                          {errors['images'] && <p className={`red__text`}>{errors['images']}</p>}
                            
                        </div>
                        <div className='btn'>
                            <Button  formBtn primary  bigCard authBtn  name='Proceed' />
                        </div>
                        
                    </form>
                </div>

            
            </div>
        </>)
        :
        <ConfirmPost loading={loading} uploadShortlet={uploadShortlet} form={form} setIsSubmitted={setIsSubmitted}  selectedImages={images}/>
        }
        <FooterWrap />
      </>
    
  )
}

export default UploadShortlet