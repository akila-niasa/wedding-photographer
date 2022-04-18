import React from 'react';
import './Services.css'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = ({ wedding }) => {
  const { name, details, price, image,id } = wedding
  return (
    <div className='col-lg-4 col-md-6 g-2'>
      <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Details: {details}
          </Card.Text>
          <Card.Text>
            Price: ${price}
          </Card.Text>
          <Link to={`/checkout/${id}`}>
            <Button className='button'>Go to Checkout</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;