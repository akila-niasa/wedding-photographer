import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../firebase.init';
import './CheckOut.css'

const Checkout = () => {
    const [user] = useAuthState(auth)
    const submitForm=()=>{
        toast.success('Thanks For Booking!')
    }
    return (
        <div className="form">
            <h1>Fill Up The Form Now!<span>tell me what service you like !</span></h1>
            <div className="section"><span>1</span>First Name & Address</div>
    <div className="inner-wrap">
        <label>Your Full Name <input type="text" name="field1" required/></label>
        <label>Address <textarea name="field2" required></textarea></label>
    </div>
    <div className="section"><span>2</span>Email & Phone</div>
    <div className="inner-wrap">
      <label>Email Address <input type="email" name="field3" required/></label>
   
        <label>Phone Number <input type="text" name="field4" required/></label>

    </div>
    <div className="section"><span>3</span>About Programme</div>
    <div className="inner-wrap">
    <label>What Service You Choose <textarea name="field5" required></textarea></label>
    
    <label>When Your Occasion <input type="date" name="field6" required/></label>
    </div>
    <div className="button-section">
     <input type="submit" onClick={submitForm} name="Sign Up" />
    <Toaster/>
    </div>
        </div>
    );
};

export default Checkout;