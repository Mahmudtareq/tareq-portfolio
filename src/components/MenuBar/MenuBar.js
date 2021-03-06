import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';


const MenuBar = () => {
    return (

        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">PortFolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                           
                            <NavLink to="/about">About
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default MenuBar;