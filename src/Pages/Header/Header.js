
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../Images/logo1.png'
import './Header.css'

const Header = () => {
    const { user, logOut}= useAuth();
    return (
        <div className="container">
            <Navbar  expand="lg" className="fw-bold">
  <Container fluid>
    <Navbar.Brand href="#"><img className="logo" src={logo} alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/covid">Covid-19</Nav.Link>
        <Nav.Link as={Link} to="/doctor">Doctor</Nav.Link>
        <Nav.Link as={Link} to="/contuct">Contuct Us</Nav.Link>
        
        
      </Nav>
      <Form className="d-flex">
      
      <Nav.Link className=" fw-bold text-info" href="/login"> {user?.displayName} </Nav.Link>
     { 
     user.email?
     <Button onClick={logOut} className="btn btn-warning" variant="warning">LogOut</Button>
     :
     
     <Nav.Link className="btn btn-warning fw-bold text-white" href="/login"> <i className="fas fa-user-check"></i>  Log In</Nav.Link>

     }
         

    
      
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;