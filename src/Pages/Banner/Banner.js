import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className=' banner w-100 h-100'>
            <h1 className=' p-5 mx-5 mb-5 text-light'>Make your memories beautiful and capture it in a frame.</h1>
            <div className='p-5'>
                <Link to='/about'>
                <button className=' button'>
                    About Me
                </button>
                </Link>
            </div>

        </div>
    );
};

export default Banner;