import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import Page from '.'
import FormInput from '../../components/UI/FormInput/Index'
import Button from '../../components/UI/Button'

import './login.css'

import show from '../../assets/icons/show.png'
import hide from '../../assets/icons/hide.svg'
import './authentication.css'


const Login = () => {
    const [user, setUser] = useState({firstname: '', lastname: '', email: '', phonenumber:'',});
    return <Page ChildComponent={ChildComponent} title="Login" />
}

const ChildComponent = () =>{

    const [showPassword, setShowpassword] = useState(false);
    const [borderColor, setBorderColor] = useState(null);

    const navigate = useNavigate(false);
    const [isValid, setIsValid] = useState(false);
    const [progress, setProgress] = useState(0); //Monitors progress, 1 is forward, -1 is backward 
    
    // This goes off
    const [user, setUser] = useState({
        'firstname': '',
        'lastname': '',
        'email': '',
        'password': '',
    });
// Here upwards

//Validate email and password on value change
    const validateInput = (e)=> {
        if(e.target.type === 'email'){
            setUser({...user, email: e.target.value});
            const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]+))$/;
            
            if(regex.test(user.email || e.target.value)) setIsValid(true);
            else setIsValid(false);

            //Check if input is empty
            if(e.target.value === '') setIsValid(false);
            
        } else {

            //Check if password is upto 6 characters
            if(e.target.value.length < 6) setIsValid(false);
            else setIsValid(true);

            //Update user state password value with input value
            setUser({...user, password: e.target.value});
        }     
        
    }

    // this goes off
    const onInputChange = (e)=> {

        setUser({...user, [e.target.name]: e.target.value});
    }

    const nextStep = (e)=> {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users')); //Load users from localDB
        const you = users.filter(singleUser => singleUser.email === user.email)[0];

        if(progress === 1){
            //Login
            if(you.password === user.password) navigate(`/signup/}`);
            else {
                alert("Password incorrect. Please input a valid password");
            }
            

        } else {
            
            //Check if you exist in the DB
            if(you) {
                setUser({...user, fullname: you.fullname});
                setProgress(1);
            } else {
                alert("Invalid login details");
                // Navigate("/signup");
            }

            
        }
        
    }

    const backStep = ()=> setProgress(-1);


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
        // to here

       //Toggle password anonimity
       const togglePassword = ()=> setShowpassword(!showPassword);


    return(
        <>
            <span style={{fontWeight: '500', fontSize: '1.4rem', marginTop:'1.5rem'}}>We’re glad to have you back.</span>
            <form className="form-control sign-up-form" onSubmit={onSignup}>
                <div className='form_email'>
                    <FormInput label='Email address' placeholder='Enter Email' type='email' value={user.email} onInput={validateInput} />
                </div>
                <div className="form-item">
                    <label className='label'>Password</label>
                    <div className={`form-group-item ${borderColor && borderColor}`}>
                        <input onFocus={() => setBorderColor('border__blue')} onBlur={() => setBorderColor(null)} type={!showPassword ? "password" : "text"} placeholder="Enter password" name="password" onChange={onInputChange} value={user.password} />
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
                    <Button name='Sign in' authBtn primary />
                <div style={{fontSize: '1.3rem', textAlign: 'center', marginTop: '1.6rem'}}>
                    <span style={{fontSize: '1.3rem', textAlign: 'center'}} >Not a member? <span style={{color: '#007AEC', textAlign: 'center'}}><Link to="/signup">Sign Up</Link></span></span>
                </div>
            </form>
        </>
    )
}

export default Login