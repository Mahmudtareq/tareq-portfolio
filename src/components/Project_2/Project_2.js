import React from 'react';
import './Project_2.css';
import image1 from '../../image/Assingnment-11/banner.png';
import image2 from '../../image/Assingnment-12/login.png';
import image3 from '../../image/Assingnment-11/banner1.png';
import image4 from '../../image/Assingnment-11/toure.png';
import Card from 'react-bootstrap/Card'
import { Col, Container, Row,Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Project_2 = () => {
    return (
          <div className="" id="project">
            <Container className=" my-5">
                <h1 className="text-center text-class">Web site Image </h1>
                <Row>
                    <Col className="my-2" md={6}>
                         <Card className="bg-dark ">
                           <Card.Img src={image1} alt="Card image" />
                        </Card>
                    </Col>
                    <Col  className="my-2" md={6}>
                         <Card className="bg-dark ">
                           <Card.Img src={image2} alt="Card image" />
                        </Card>
                    </Col>
                </Row>
                   <Row>
                    <Col  className="my-2" md={6}>
                         <Card className="bg-dark ">
                           <Card.Img src={image3} alt="Card image" />
                        </Card>
                    </Col>
                    <Col  className="my-2" md={6}>
                         <Card className="bg-dark ">
                           <Card.Img src={image4} alt="Card image" />
                        </Card>
                    </Col>
                </Row>

            </Container>
            <Container className="my-5">
                <h1 className="text-center text-class">Details About This Projucts</h1>
                <p className="p-text">This is a Website where users can book a tour All over the world, for new users need to create an account and users can also login in using a google account</p>
                <p  className="p-text">Users also get facilities for hotel booking, tickets booking also experiences a guide for safety purpose</p>
                <p className="p-text">Users can be booking a tour also users can add a new tour place if their favorite place is not available</p>
                    <Button className="px-5 m-1"  href="https://tour-and-traveling.web.app/" variant="secondary" target="_blank">Live site </Button>
                    <Button  className="px-5 m-1"   href="https://github.com/Mahmudtareq/booking-toure-client-side" variant="secondary" target="_blank">Client Side </Button>
                    <Button  className="px-5 m-1"  href="https://github.com/Mahmudtareq/booking-toure-server-side" variant="secondary" target="_blank">Server Site</Button>
                
            </Container>
            <Container className="my-5">
                <h1 className="text-center text-class my-3">Technology Used In This Project </h1>
               
                   <div className="">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center ">React Js</div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center ">CSS</div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center">Java Script</div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center"> Bootstrap</div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center shadow">Firebase </div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center">Node Js</div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center">Express Js</div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center">MongoDB</div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center">Heroku</div>
                        </div>
                    </div>
                </div>
            </Container>

           
          
        </div>
    );
};

export default Project_2;