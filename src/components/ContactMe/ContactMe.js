import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './ContactMe.css';
import contact from '../../image/contact1.jpg'

const ContactMe = () => {
    return (
        <div className="my-5">
            <Container className="my-5">
                <h2 className="my-3">Contact With Me</h2>

                <Row className=" g-1">
                    <Col xs={12} md={5} >
                       <img src={contact} alt="" />
                    </Col>
                    <Col className="gx-2" xs={12} md={7}>
                        <div className=" p-3 shadow" >
                        <Form action="https://formsubmit.co/tareqlpu5@gmail.com" method="POST">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Control type="text" placeholder="Phone Number" />
                                </Form.Group>
                            </Row>
                           
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Enter Your Email" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Subject" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={4} placeholder="Write Message"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Send Message</Button>
                            <input type="hidden" name="_captcha" value="false"></input>
                        </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
    );
};

export default ContactMe;