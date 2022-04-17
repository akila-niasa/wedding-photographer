import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer h-50 w-100 py-8 mt-8'>
      <div className='text-center text-light  p-10   mb-4'>
       <h3> Contract me</h3>
        <p>500 Dhanmondi Road,Dhaka</p>

         <p> Mail: ino@gmail.com

          Tel: 123456789</p>
      </div>
      <div className='text-center text-light  p-10  d-flex justify-content-center'>
        All Rights Reserved By &copy; Independent Photography | 2020-2026
      </div>

    </footer>
  );
};

export default Footer;