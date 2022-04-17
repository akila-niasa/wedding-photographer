import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Registers = () => {
    return (
        <div className='container card w-50 mx-auto mt-5'>
        <h2 className='text-primary fw-bold text-center mt-4 mb-3'>Please Login</h2>
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
           
           
           
            <Button className='button' variant="primary" type="submit">
                Submit
            </Button>

        </Form>
        {/* <p>New in my site? <Link to="/register" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p> */}
       
    </div>
    );
};

export default Registers;