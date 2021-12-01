import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'
import './Skill.css';

const Skills = () => {
    return (
        <div id="skills">
            <Container>
                <h2 className="text-start">Skills</h2>
                <hr />
                <br />
                <div>
                    <Row className="g-4 ">
                        <Col xs ={12} lg={3} md={3}>
                            <Card className="shadow bg-color bg-color">
                                <Card.Img variant="top" src="" />
                                <Card.Body>
                                    <Card.Title>HTML</Card.Title>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col xs ={12} lg={3} md={3}>
                            <Card className="shadow bg-color">
                                <Card.Body>
                                    <Card.Title>CSS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs ={12} lg={3} md={3}>

                            <Card className="shadow bg-color">
                                <Card.Body>
                                    <Card.Title>JAVASCRIPT</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs ={12} lg={3} md={3}>

                            <Card className="shadow bg-color">
                                <Card.Body>
                                    <Card.Title>BOOTSTRAP</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>

                <div className="my-3">
                    <Row className="g-4">
                        <Col xs ={12} lg={3} md={3}>
                            <Card className="shadow bg-color">
                                <Card.Body>
                                    <Card.Title>REACT JS</Card.Title>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col xs ={12} lg={3} md={3}>
                            <Card className="shadow bg-color">
                                <Card.Body>
                                    <Card.Title>MATERIAL UI</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs ={12} lg={3} md={3}>

                            <Card className="shadow bg-color">
                                <Card.Body>
                                    <Card.Title>NODE JS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs ={12} lg={3} md={3}>

                            <Card className="shadow bg-color">
                                
                                <Card.Body>
                                    <Card.Title>EXPRESS JS</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>

                </div>

            </Container>
        </div>
    );
};

export default Skills;