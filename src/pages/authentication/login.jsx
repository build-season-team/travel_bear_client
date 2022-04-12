import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import Page from '..'
import FormInput from '../../components/UI/FormInput/Index'
import Button from '../../components/UI/Button'

import './login.css'

import show from '../../assets/icons/show.png'
import hide from '../../assets/icons/hide.svg'
import './authentication.css'


const Login = () => {
    const [user, setUser] = useState({firstname: '', lastname: '', email: '', phonenumber:'',});
    return <Page ChildComponent={ChildComponent} title="Login" caption="Sign up today to get started" />
}

const ChildComponent = () =>{

    const [showPassword, setShowpassword] = useState(false);

    const navigate = useNavigate();
    const [user, setUser] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'password': '',
    });

    const onInputChange = (e)=> {

        setUser({...user, [e.target.name]: e.target.value});
    }

    const onSignup = (e)=> {
        e.preventDefault();



        const users = localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')) : [];
        const updatedUsers = [...users, user];

        localStorage.setItem('users', JSON.stringify(updatedUsers));

        setUser({
            'firstname': '',
            'lastname': '',
            'email': '',
            'phonenumber': '',
            'password': ''
        })

        // alert('Congratulations, you have be signed up. We are taking you to the login page now!');
        // navigate("/login");

        
    }


       //Toggle password anonimity
       const togglePassword = ()=> setShowpassword(!showPassword);


    return(
        <>
        <span style={{fontWeight: '500', fontSize: '1.4rem', marginTop:'1.5rem'}}>We’re glad to have you back.</span>
        <form className="form-control sign-up-form" onSubmit={onSignup}>


            <div className='form_email'>
                <FormInput label='Email address' placeholder='Enter Email' type='email' />
            </div>
            


            <div className="form-item">
                <label className='label'>Password</label>
                <div className="form-group-item">
                    <input type={!showPassword ? "password" : "text"} placeholder="Enter password" name="password" onChange={onInputChange} value={user.password} />
                    <img className='password_icon' width='20px' src={!showPassword ? hide : show} alt="Show password" onClick={togglePassword} />
                </div>
            </div>

            <div className='agreement'>
                <div style={{display: 'flex'}}>
                    <input type='checkbox' />
                    <p style={{color: '#007AEC', marginLeft: '3px', cursor: 'pointer', }} > Keep me signed in </p>
                </div>
                
                <p style={{color: '#007AEC', cursor: 'pointer'}}> Forgot Password</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Button name='Sign in' primary />
            </div>
            <div style={{fontSize: '1.3rem', textAlign: 'center', marginTop: '1.6rem'}}>
                <span style={{fontSize: '1.3rem', textAlign: 'center'}} >Not a member? <span style={{color: '#007AEC', textAlign: 'center'}}><a href="/login">Sign Up</a></span></span>
            </div>
            

        </form>
    </>
    )
}

export default Login