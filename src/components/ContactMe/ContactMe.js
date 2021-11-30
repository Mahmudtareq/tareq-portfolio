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
                    <Col className="" xs={12} md={6} lg={6}>
                        <div className="container px-4">
                            <div className="row my-2">
                                <div className="col">
                                    <div className="p-3 border bg-light"> <span><i class="fas fa-phone-square-alt"></i></span>+8801625072294</div>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col">
                                    <div className="p-3 border bg-light">Custom column padding</div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="p-3 border bg-light">Custom column padding</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="gx-2" xs={12} md={6} lg={6}>
                        <div className=" p-3 shadow" >
                        <Form action="https://formsubmit.co/tareqlpu5@gmail.com" method="POST">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Control type="text" placeholder="Enter Name" name="name"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                        <Form.Control type="text" placeholder="Phone Number" name="phone number" />
                                </Form.Group>
                            </Row>
                           
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Enter Your Email" required name="email"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Subject" required name="subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={4} placeholder="Write Message" name="message"/>
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