import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import  tareq from '../../image/tareq1.jpg'

const About = () => {
    return (
        <div>
            

            <Container className="my-5">
                <h2 className="text-start">About me</h2>
                <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa.</p>
                <Row>
                    <Col xs={12} md={5} lg={5}>
                        <img className="img-fluid" src={tareq} alt="" />
                    </Col>
                    <Col xs={12} md={7} lg={7}>
                        <div>
                            <h1>I'm Tareq Mahmud</h1>
                            <h6 className="">A Lead Visual Artist based in America</h6>

                            <p className="text-start">I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through meaningful interactions. Check out my Portfolio</p>
                        </div>
                        
                        <div>
                            <h2>Personal Information</h2>
                            <Row>
                                <Col xs={12} md={6} lg={6} >
                                    hello
                                </Col>
                                <Col xs={12} md={6} lg={6}>
                                    hello
                                </Col>
                            </Row>

                        </div>
                      
                    </Col>
                </Row>
            </Container>



          
            
        </div>
    );
};

export default About;