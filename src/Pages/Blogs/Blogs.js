import React from 'react';
import Footer from '../../Shared/Footer/Footer';

const Blogs = () => {
    return (
        <div>
            <div className='border p-3 m-5 rounded shadow'>
                <h2>Difference between authorization and authentication</h2>
                <p>Authentication is the process of verify who you are.It verifying the user is a valid user with email and password.It transmit through an ID token.</p>
                <p>Authorization is the permission of a valid user.It is the process of verify that you have access or not in site.It send through an access token.</p>
            </div>
            <div className='border p-3 m-5 rounded shadow'>
                <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p>Firebase is incredibly simple backend solution.In firebase we get Authentication system.It made file storing.we can use Remote Configuration in firebase.All of this reasons I use Firebase.</p>
                <p> Back4App,Parse,AWS Amplify,Supabase,Nhost etc. i have use to implement authentication.</p>
            </div>
            <div className='border p-3 m-5 rounded shadow'>
                <h2>What other services does firebase provide other than authentication</h2>
                <p>Without authentication we can use firebase in another ways.We can use it at hosting any site.We also use it to google analytics.It has cloud storage.It has also cloud functions.All above the site we use in firebase.</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Blogs;