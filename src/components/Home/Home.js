// import Button from '@restart/ui/esm/Button';
import Button from 'react-bootstrap/Button'
import React from 'react';
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import './Home.css';
import resume from '../../image/about/TAREQ MAHMUD RESUME.pdf'
// import logo from '../../image/logo/t.jpg'

const Home = () => {
    return (
        <div className="home" id="home">
            {/* -------- */}
            <div>

                <Navbar bg="black" expand="lg"  variant="red" fixed="top" >
                    <Container>
                        <Navbar.Brand href="#home">Tareq Mahmud</Navbar.Brand>
                        <Navbar.Toggle variant="red"  aria-controls="collapse navbar-collapse" />
                        <Navbar.Collapse id="navbarNavDropdown">
                        <Nav className="ms-auto">
                            <NavLink href="#home">Home</NavLink>
                            <NavLink href="#about">About</NavLink>
                            <NavLink href="#services">Services</NavLink>
                            <NavLink href="#project">Project</NavLink>
                            <NavLink  href="#skills">Skills</NavLink>
                            <NavLink href="#contact">Contact</NavLink>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
               </Navbar>
               
          </div>
        {/* ---------------- */}
           
                {/* HOME CONTENT */}
                <div className="container">
                    <div className="home__content">
                        <div className="home__meta">
                            <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
                            <h2 className="home__text pz__10">Hi, I’m Tareq Mahmud</h2>
                            <h3 className="home__text sweet pz__10">React  Developer.</h3>
                    </div>
                    <div className="d-md-inline-flex flex-sm-columns my-3">
                        
                        <NavLink href={resume} download >
                            <Button variant="primary">Resume</Button>
                        </NavLink>
                        <NavLink className="text-white" href="#contact">
                          <Button>Hire Me</Button>
                        </NavLink>
                    </div>
                    </div>
                </div>
            </div>
    );
};

export default Home;