import React, { useEffect, useState } from 'react';
import './Home.css'
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    const [weddings, setWeddings] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWeddings(data))
    }, [])
    return (
        <div >
            {/* <h1 className='text-bold mx-auto title'>Wedding Photography</h1> */}
            {/* banner */}
            <Banner />
            {/* services */}
            <div className='container'>
                <h1 className='fw-bold mx-auto title m-4'>My Services</h1>
                <div className='row mb-3'>
                    {
                        weddings.map(wedding => <Services key={wedding.id} wedding={wedding}></Services>)
                    }
                </div>
            </div>
            {/* client review */}
            <div className='mt-5 container  mb-5'>
                <h2 className='fw-bold mx-auto title'>Latest Client Review</h2>
                <div className='card'>
                <div className='row p-5'>
                    <div className='col-lg-6 col-12'><img className='img-fluid' src="https://i.ibb.co/tMfzs1K/unnamed-4.webp" alt="" /></div>
                    <div className='col-lg-6 col-12'>
                        <p>He is an amazing photographer.Every wedding is an important occasion and every photograph become part of it. He's capture unique photo at my wedding which is the best memory in my wedding.He is connecting the most important and fascinating thing. </p>
                    </div>
                </div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
};

export default Home;