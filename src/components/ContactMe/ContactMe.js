import Button from 'react-bootstrap/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './ContactMe.css';
// import contact from '../../image/contact1.jpg'

const ContactMe = () => {
    
    return (
        <div className="my-5" id="contact">
            <Container className="my-5">
                <div className="heading my-5">
                    <h1 className="heading">Contact With Me</h1>
                </div>

                <Row className=" g-1">
                    <Col className="gx-2" xs={12} md={6} lg={6}>
                        <div className=" p-3 shadow" >
                        <Form action="https://formsubmit.co/tareqlpu5@gmail.com" method="POST">
                                    <Form.Group  className="mb-3"  controlId="exampleForm.ControlInput1">
                                        <Form.Control type="text" placeholder="Enter Name" name="name"/>
                                      </Form.Group>
                           
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Enter Your Email" required name="email"/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={4} placeholder="Write Message" name="message"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">Send</Button>
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