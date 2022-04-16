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
            <div className='container'>
                <h1 className='text-bold mx-auto title'>My Services</h1>
            <div className='row'>
                {
                    weddings.map(wedding=><Services key={wedding.id} wedding={wedding}></Services>)
                }
            </div>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Home;