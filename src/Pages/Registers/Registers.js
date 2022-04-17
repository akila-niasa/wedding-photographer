import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const Registers = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const[error,setError]=useState('')
    const navigate=useNavigate()
      
      
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const handleEmail=event=>{
        setEmail(event.target.value);
    }
    const handlePassword=event=>{
        setPassword(event.target.value)
    }
    const handleConfirmPassword=event=>{
        setConfirmPassword(event.target.value)
    }
    const handleSubmit=event=>{
        event.preventDefault()
        if(password!==confirmPassword){
           setError("'your password don't match")
        }
      else{
        createUserWithEmailAndPassword(email,password)
      }
       
    }
    if(user){
        navigate('/checkout')
    }
    return (
        <div className='container card w-50 mx-auto mt-5'>
        <h2 className='text-primary fw-bold text-center mt-4 mb-3'>Please Registration</h2>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail}  type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Confirm Password" required />
            </Form.Group>
           
            <p className='text-danger'>{error?.message}</p>
           
            <Button className='button' variant="primary" type="submit">
                Submit
            </Button>

        </Form>
        <SocialLogin/>
        {/* <p>New in my site? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p> */}
       
    </div>
    );
};

export default Registers;