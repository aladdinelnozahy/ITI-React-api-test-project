import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <>

                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/">Home</Link>
                                    <Link to="/about-us" className='mx-2'>About-Us</Link>
                                    <Link to="/contact" className='mx-2' >Contact-Us</Link>
                                    <Link to="/movies"  className='mx-2'>movies</Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

            </>


        );
    }
}

export default Header;

