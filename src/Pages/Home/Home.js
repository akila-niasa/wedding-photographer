import React, { useEffect, useState } from 'react';
import './Home.css'
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const[weddings,setWeddings]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setWeddings(data))
    },[])
    return (
        <div >
            <h1 className='text-bold mx-auto title'>Wedding Photography</h1>
            <Banner/>
            {/* services */}
            <div className='container'>
                <h1 className='text-bold mx-auto title'>My Services</h1>
            <div className='row mb-3'>
                {
                    weddings.map(wedding=><Services key={wedding.id} wedding={wedding}></Services>)
                }
            </div>
            </div>
            {/* client review */}
            <div  className='mt-5'>
                <h2  className='text-bold mx-auto title'>Latest Client Review</h2>
            <div className='d-flex justify-content-around mb-5'>
                <div><img  src="https://i.ibb.co/tMfzs1K/unnamed-4.webp" alt="" /></div>
                <div>
                    <p>He is an amazing photographer.Every wedding is a new experience and every photograph become part of it. He's capture unique photo at my wedding which is the best memory in my life.He is connecting the most important and fascinating thing. </p>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;