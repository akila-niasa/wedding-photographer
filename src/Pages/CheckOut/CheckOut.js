import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { WeddingContext } from '../../App';
import auth from '../../firebase.init';
import useData from '../../hooks/useData';
import './CheckOut.css'

const Checkout = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth)
    // const [weddings, setWeddings] = useContext(WeddingContext)
    
    const [weddings, setWeddings] = useState([])
    const [current,setCurrent]=useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/akila-niasa/services/main/data.json')
            .then(res => res.json())
            .then(data => setWeddings(data))
    }, [])
    console.log(weddings);
    useEffect(()=>{
        if(weddings.length>0){
            const wedding = weddings.find(wedding => wedding.id == id)
        setCurrent(wedding)
        }
    },[weddings,id])
    const submitForm = () => {
        toast.success('Thanks For Booking!')
    }
    console.log(current);
    return (
        <div >
            <h1 className='text-primary text-center mt-4 pt-4 fw-bold'>Check Out</h1>
            <div className='container card p-5 m-4' >
                <div className='row'>
                    <div className='col-lg-6'><img src={current.image} alt="" /></div>
                    <div className='col-lg-6 p-3'>
                        <h3>Name: {current.name}</h3>
                        <p>Details: {current.details}</p>
                        <p>Price: ${current.price}</p>
                    </div>
                </div>
            </div>
            <div className="form">
                <h1>Fill Up The Form Now!<span>tell me what service you like !</span></h1>
                <div className="section"><span>1</span>First Name & Address</div>
                <div className="inner-wrap">
                    <label>Your Full Name <input type="text" name="field1" required /></label>
                    <label>Address <textarea name="field2" required></textarea></label>
                </div>
                <div className="section"><span>2</span>Email & Phone</div>
                <div className="inner-wrap">
                    <label>Email Address <input type="email" name="field3" value={user?.email} readOnly required /></label>

                    <label>Phone Number <input type="text" name="field4" required /></label>

                </div>
                <div className="section"><span>3</span>About Programme</div>
                <div className="inner-wrap">
                    <label>What Service You Choose <textarea value={current.name} readOnly name="field5" required></textarea></label>
                    <label>Price <input type="text" value={current.price} readOnly name="field1" required /></label>
                    <label>When Your Occasion <input type="date" name="field6" required /></label>
                </div>
                <div className="button-section">
                    <input type="submit" onClick={submitForm} name="Sign Up" />
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default Checkout;