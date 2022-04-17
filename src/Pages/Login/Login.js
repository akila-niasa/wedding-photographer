import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
    const[error,setError]=useState('')
    const navigate=useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useSignInWithEmailAndPassword(auth);
  
    const handleEmail=event=>{
        setEmail(event.target.value);
    }
    const handlePassword=event=>{
        setPassword(event.target.value)
    }
    const handleSubmit=event=>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password)
    }
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div className='container card w-50 mx-auto mt-5'>
        <h2 className='text-primary fw-bold text-center mt-4 mb-3'>Please Login</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail}  type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>
           
           
           
            <Button className='button' variant="primary" type="submit">
                Submit
            </Button>
            <SocialLogin/>
        </Form>
        <p>New in my site? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
       
    </div>
    );
};

export default Login;