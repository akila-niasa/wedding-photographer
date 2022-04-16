import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className='nav' variant="dark">
  <Container>
  <Navbar.Brand href="#home">Independent Photography</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
    <Link to='/' className='text-decoration-none text-light p-2 m-2'>Home</Link>
        <Link to='/about'className='text-decoration-none text-light p-2 m-2'>About Me</Link>
        <Link to='/login'className='text-decoration-none text-light p-2 m-2'>Login</Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;