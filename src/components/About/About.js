import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
import  tareq from '../../image/tareq1.jpg'

const About = () => {
    return (
        <div>
            <h2 className="text-start">About me</h2>
            <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa.</p>

            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6} >
                        <img className="img-fluid" src={tareq} alt="" />
                    </Col>
                    <Col xs={12} md={6}>
                        <h2>about me</h2>
                    </Col>
                </Row>
            </Container>



          
            
        </div>
    );
};

export default About;