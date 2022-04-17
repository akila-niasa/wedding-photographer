import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate=useNavigate()
    let location=useLocation()
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        navigate(from, { replace: true })
    }
    return (
        <div>
             <div className='d-flex  align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className=' mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>

            </div>
            <div>
                <button onClick={()=>signInWithGoogle()}  className='w-50 mx-auto d-block button'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;