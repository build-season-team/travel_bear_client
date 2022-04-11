import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import Page from '..'
import FormInput from '../../components/UI/FormInput/Index'
import Button from '../../components/UI/Button'
import './authentication.css'

import show from '../../assets/icons/show.png'
import hide from '../../assets/icons/hide.svg'

const SignUp = () => {
    return <Page ChildComponent={ChildComponent} title="SignUp" caption="Sign up today to get started" link="Have an account? Sign in" path="/login" />   
}

const ChildComponent = () =>{

    const [showPassword, setShowpassword] = useState(false);

    const navigate = useNavigate();
    const [user, setUser] = useState({
        'fullname': '',
        'email': '',
        'password': ''
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

        alert('Congratulations, you have be signed up. We are taking you to the login page now!');
        navigate("/login");
    }


       //Toggle password anonimity
       const togglePassword = ()=> setShowpassword(!showPassword);

    return (
        <>
            <span style={{fontWeight: '500', fontSize: '1.4rem'}}>You’re a few steps away from an awesome experience </span>
            <form className="form-control sign-up-form" onSubmit={console.log('successful')}>
                <div className='form-group' style={{display: "flex",justifyContent: 'space-between' }}>
                    <div style={{width: '49%'}}><FormInput label='First name' placeholder='First name' type='name' /></div>
                    <div style={{width: '49%'}}><FormInput label='Last name' placeholder='Last name' type='name' /></div>
                </div>

                <div>
                    <FormInput label='Email address' placeholder='Enter Email' type='email' />
                </div>
                
                <div>
                    <FormInput label='Phone number' placeholder='+234' type='number' />
                </div>

                <div className="form-item">
                    <label className='label'>Password</label>
                    <div className="form-group-item">
                        <input type={!showPassword ? "password" : "text"} placeholder="Enter password" name="password" onChange={onInputChange} value={user.password} />
                        <img className='password_icon' width='20px' src={!showPassword ? hide : show} alt="Show password" onClick={togglePassword} />
                    </div>
                </div>

                <div className='agreement'>
                    <FormInput type='checkbox' />
                    <span>I agree with<span style={{color: '#007AEC', marginLeft: '0px'}}>TravelBear Terms & Conditions </span>  and Privacy Policy </span>
                </div>

                <Button name='Create account' primary />

            </form>
        </>
    )

}

export default SignUp