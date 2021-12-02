import React from 'react';
import image1 from '../../image/Assingnment-12/banner.png';
import image2 from '../../image/Assingnment-12/login.png';
import image3 from '../../image/Assingnment-12/product.png';
import image4 from '../../image/Assingnment-12/story.png';
import Card from 'react-bootstrap/Card'
import { Col, Container, Row,Button } from 'react-bootstrap';
import './Project_1.css';
import { Link, NavLink } from 'react-router-dom';

const Project_1 = () => {
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
                <p className="p-text">It is a product selling website, For a new user need to create an account, he can order a product, he can see his order in the dashboard</p>
                <p  className="p-text">The review section is available for users, he can add product review after adding a new review it is shown on the home page</p>
                <p className="p-text">An admin can see all user orders, admin can add a new product, remove a product and make an admin</p>
                    <Button className="px-5 m-1"  href="https://smart-watches-8176d.web.app/" variant="secondary" target="_blank">Live site </Button>
                    <Button  className="px-5 m-1"   href="https://github.com/Mahmudtareq/smart-watch-client-side" variant="secondary" target="_blank">Client Side </Button>
                    <Button  className="px-5 m-1"  href="https://github.com/Mahmudtareq/smart-watch-server-side" variant="secondary" target="_blank">Server Site</Button>
                
            </Container>
            <Container className="my-5">
                <h1 className="text-center text-class my-3">Technology Used In This Project </h1>
               
                   <div className="">
                    <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center ">React Js</div>
                        </div>
                        <div className="col-12">
                        <div className="p-3 border bg-light text-center shadow-lg ">Material Ui</div>
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

export default Project_1;