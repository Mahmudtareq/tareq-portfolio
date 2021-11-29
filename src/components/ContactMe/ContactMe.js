import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className="my-5">
            <Container className="my-5">
                <Row>
                    <Col xs={12} md={6} >

                       
                    </Col>
                    <Col xs={12} md={6}>
                        <Form action="https://formsubmit.co/tareqlpu5@gmail.com" method="POST">
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Enter your Name" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Enter Your Email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Write Message"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Send Message</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default ContactMe;