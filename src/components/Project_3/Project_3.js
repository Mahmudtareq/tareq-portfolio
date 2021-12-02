import React from 'react';
import image1 from '../../image/Assingnment-10/banner.png';
import image2 from '../../image/Assingnment-10/service.png';
import image3 from '../../image/Assingnment-10/service1.png';
import image4 from '../../image/Assingnment-12/login.png';
import Card from 'react-bootstrap/Card'
import { Col, Container, Row,Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Project_3.css';

const Project_3 = () => {
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
                <p className="p-text">Health service-related websites, patients can make appointments for their treatment</p>
                <p  className="p-text"> Also, users can be booked for diagnostic treatment like x-ray </p>
                <p className="p-text">We provide lot of service like as  Lot of Experiences Doctors,our Emergency Ambulance service is available in 24 hours</p>
                    <Button className="px-5 m-1"  href="https://health-revolation.web.app/" variant="secondary" target="_blank">Live site </Button>
                    <Button  className="px-5 m-1"   href="https://github.com/Mahmudtareq/health-care-diagnostic" variant="secondary" target="_blank">Client Side </Button>
                
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
                        <div className="p-3 border bg-light text-center">Netlify</div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Project_3;