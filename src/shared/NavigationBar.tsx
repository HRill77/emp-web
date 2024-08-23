import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./styles/NavigationBar.css"

const NavigationBar = () => {
    // const start = (<h4 >Employee Management System</h4>
    // );
    // const items = [
    //     {
    //         label: 'Home'
    //     },
    //     {
    //         label: 'Features'
    //     },]
  return (
    <div>
        <Navbar bg="primary" variant='dark'>
            <Container>
            <Navbar.Brand ><strong>Employee Management System</strong></Navbar.Brand>
            <Nav className='ml-auto'>
            <Nav.Link as={Link} to="/" className='nav-link'>Employees</Nav.Link>
            <Nav.Link as={Link} to="/postemployee" className='nav-link'>Post Employee</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavigationBar