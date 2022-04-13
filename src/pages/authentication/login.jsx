import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import Page from '.'
import FormInput from '../../components/UI/FormInput/Index'
import Button from '../../components/UI/Button'

import './login.css'

import show from '../../assets/icons/show.png'
import hide from '../../assets/icons/hide.svg'
import './authentication.css'
import { AuthContext } from '../../store/authContext/AuthProvider'
import { CLEAR_MESSAGE } from '../../constants/actionTypes'
import login from '../../store/authContext/actionCreators/login'


const Login = () => {
    return <Page ChildComponent={ChildComponent} title="Login" />
}

const ChildComponent = () =>{

    const [showPassword, setShowpassword] = useState(false);
    const [borderColor, setBorderColor] = useState(null);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({err: 'error'});
    const {authDispatch} = useContext(AuthContext);
    const navigate = useNavigate();
    

    // this goes off
   const onInputChange = (e, key)=> {
         setForm({...form, [key]: e.target.value})
         if(key !== '') {
            if(key === 'password') {
                if(key.length < 8) {
                    setErrors((prevState) => {
                        return {...prevState, [key]: 'Password must be more than 7 characters'}
                    })
                }else {
                    setErrors((prevState) => {
                        return {...prevState, [key]: null}
                    })
                }
            }else {
                setErrors((prevState) => {
                    return {...prevState, [key]: null}
                })
            }
        }
    }

    const onLogin = (e)=> {
        e.preventDefault();
        setErrors({});
        if(!form.email || form.email.length < 6) {
            setErrors((prevState) => {
                return {...prevState, email: 'Email must be more than 6 characters'}
            })
        }
        if(!form.password || form.password.length < 8) {
            setErrors((prevState) => {
                return {...prevState, password: 'password must be more than 7 characters'}
            })
        }

        console.log('in login>>>>>');
        console.log(Object.values(errors).every(item => !item ))
        console.log(errors)

        if(Object.values(errors).every(item => !item )) {
            login(form)(authDispatch)(() => {
                console.log('in login');
                setTimeout(() => {
                    navigate('/');
                }, 5000);
            });
        }

    }
       //Toggle password anonimity
    const togglePassword = ()=> setShowpassword(!showPassword);

    useEffect(() => {
        authDispatch({type: CLEAR_MESSAGE})
    }, [])

    return(
        <>
            <span style={{fontWeight: '500', fontSize: '1.4rem', marginTop:'1.5rem'}}>We’re glad to have you back.</span>
            <form className="form-control sign-up-form" onSubmit={(e) => onLogin(e)}>
                <div className='form_email'>
                    <FormInput label='Email address' placeholder='Enter Email' name='email' type='email' errors={errors} form={form} onChange={onInputChange} />
                </div>
                <div className="form-item">
                    <label className='label'>Password</label>
                    <div className={`form-group-item ${borderColor && borderColor}`}>
                        <input onFocus={() => setBorderColor('border__blue')} onBlur={() => setBorderColor(null)} type={!showPassword ? "password" : "text"} placeholder="Enter password" name="password" onChange={(e) => onInputChange(e, 'password')} value={form?.password ? form?.password : ''} required />
                        <img className='password_icon' width='20px' src={!showPassword ? hide : show} alt="Show password" onClick={togglePassword} />
                    </div>
                    {errors['password'] && <p className={`red__text`}>{errors['password']}</p>}
                </div>

                <div className='agreement'>
                    <div style={{display: 'flex'}}>
                        <input type='checkbox' />
                        <p style={{color: '#007AEC', marginLeft: '3px', cursor: 'pointer', }} > Keep me signed in </p>
                    </div>
                    
                    <p style={{color: '#007AEC', cursor: 'pointer'}}> Forgot Password</p>
                </div>
                    <Button name='Sign in' formBtn bigCard authBtn primary />
                <div style={{fontSize: '1.3rem', textAlign: 'center', marginTop: '1.6rem'}}>
                    <span style={{fontSize: '1.3rem', textAlign: 'center'}} >Not a member? <span style={{color: '#007AEC', textAlign: 'center'}}><Link to="/signup">Sign Up</Link></span></span>
                </div>
            </form>
        </>
    )
}

export default Login