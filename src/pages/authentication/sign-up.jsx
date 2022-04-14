import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import Page from '.'
import FormInput from '../../components/UI/FormInput/Index'
import Button from '../../components/UI/Button'
import './authentication.css'

import show from '../../assets/icons/show.png'
import hide from '../../assets/icons/hide.svg'
import register from '../../store/authContext/actionCreators/register'
import { AuthContext } from '../../store/authContext/AuthProvider'
import { CLEAR_MESSAGE } from '../../constants/actionTypes'

const SignUp = () => {
    return <Page ChildComponent={ChildComponent} title="SignUp"/>   
}

const ChildComponent = () =>{

    const [showPassword, setShowpassword] = useState(false);
    const [borderColor, setBorderColor] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const {authDispatch, authState: {loading, isLoogedIn}} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(isLoogedIn) navigate(-1)
        authDispatch({type: CLEAR_MESSAGE})
    }, []);


    const onInputChange = (e, key)=> {
         setForm({...form, [key]: e.target.value})
         if(key !== '') {
            setErrors((prevState) => {
                return {...prevState, [key]: null}
            })
        }
    }

    const onblur = (e, key) => {
        if(key == 'firstName' && form.firstName.length < 3) {
            setErrors({...errors, firstName: 'First name must be more than 2 letters'})
        }
        if(key == 'lastName' && form.lastName.length < 3) {
            setErrors({...errors, lastName: 'last name must be more than 2 letters'})
        }
        if(key == 'phone' && form.phone.length < 9 ) {
            setErrors({...errors, phone: 'Invalid phone Number'})
        }
        if(key == 'password' && form.password.length < 8) {
            setErrors( {...errors, password: 'password must be more than 7 characters'})
        }
    }
    

    const onSignup = (e)=> {
        e.preventDefault();

        if(Object.values(form).length === 5 && Object.values(form).every(item => item.trim().length > 0) && Object.values(errors).every(item => !item ) ) {
            register(form)(authDispatch)(() => {
                setTimeout(() => {
                    navigate('/login');
                }, 5000);
            });
        }

    }
    
    //Toggle password anonimity
    const togglePassword = ()=> setShowpassword(!showPassword);

    return (
        <>

            
            <span style={{fontWeight: '500', fontSize: '1.4rem', marginTop:'1.5rem'}}>You’re a few steps away from an awesome experience </span>
            <form className="form-control sign-up-form" onSubmit={(e) =>onSignup(e)}>
                <div className='form-group' style={{display: "flex", justifyContent: 'space-between' }}>
                    <div className='form-group-content' style={{width: '49%'}}><FormInput errors={errors} onBlur={onblur} form={form} onChange={onInputChange}  name='firstName' label='First name' placeholder='First name' type='name' required/></div>
                    <div className='form-group-content' style={{width: '49%'}}><FormInput errors={errors} onBlur={onblur}  form={form} onChange={onInputChange} name='lastName' label='Last name' placeholder='Last name' type='name' required/></div>
                </div> 

                <div>
                    <FormInput errors={errors} onBlur={onblur} form={form} onChange={onInputChange} name='email' label='Email address' placeholder='Enter Email' type='email'required />
                </div>
                
                <div>
                    <FormInput errors={errors} onBlur={onblur} pattern="\d*" form={form} onChange={onInputChange} name='phone' label='Phone number' placeholder='+234' type='tel' required/>
                </div>

                <div className="form-item">
                    <label className='label'>Password</label>
                    <div className={`form-group-item ${borderColor && borderColor}`}>
                        <input onFocus={() => setBorderColor('border__blue')} onBlur={(e) => { setBorderColor(null); onblur(e, 'password')}} type={!showPassword ? "password" : "text"} placeholder="Enter password" name="password" onChange={(e) => onInputChange(e, 'password')} value={form?.password ? form?.password : ''} required />
                        <img className='password_icon' width='20px' src={!showPassword ? hide : show} alt="Show password" onClick={togglePassword} />
                    </div>
                    {errors['password'] && <p className={`red__text`}>{errors['password']}</p>}
                </div>

                <div className='agreement'>
                    <input type='checkbox' required />
                    <span>I agree with<span style={{color: '#007AEC', marginLeft: '.3rem', cursor: 'pointer'}}>TravelBear Terms & Conditions </span>  and <span style={{color: '#007AEC', marginLeft: '3px', cursor: 'pointer'}}>Privacy Policy </span></span>
                </div>
                
                    <Button name={loading ? 'Loading....' : 'Create account'} formBtn  bigCard authBtn primary />
                <div style={{fontSize: '1.3rem', textAlign: 'center', marginTop: '1.6rem'}}>
                    <span style={{fontSize: '1.3rem', textAlign: 'center',}} >Have an account? <span style={{color: '#007AEC', textAlign: 'center'}}><Link to="/login">Sign In</Link></span></span>
                </div>
                

            </form>
        </>
    )

}

export default SignUp