import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container, Row, Col,NavLink } from 'react-bootstrap';
import banner1 from '../../image/Assingnment-12/banner.png';
import banner2 from '../../image/Assingnment-11/banner.png';
import banner3 from '../../image/Assingnment-10/banner.png';

const Project = () => {
    return (
      <div id="project">
        <div className="heading">
                <h1 className="heading my-3">My Awesome Work</h1>
            </div>
        <Container>
        
                <Row>
                    <Col sx={12} md={4} lg={4}>
                        <Card className=" shadow my-2" >
                        <Card.Img height="300" variant="top" src={banner1} />
                        <Card.Body>
                          <Card.Title>Confident Count</Card.Title>
                          <Card.Text>
                            This is a E-commerce website, for new users to create an account or login in using a Google account, they can order a product, also can see his order in the dashboard 


                          </Card.Text>
                        </Card.Body>
                        <Card.Body>
                          <NavLink  href="https://smart-watches-8176d.web.app/" target="_blank">Live Site</NavLink>
                          <NavLink href="https://github.com/Mahmudtareq/smart-watch-client-side"  target="_blank">Client Side Code</NavLink>
                          <NavLink href="https://github.com/Mahmudtareq/smart-watch-server-side"  target="_blank">Server Side Code</NavLink>
                          <Button  className="btn btn primary">Explore</Button>
                </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4} lg={4}>
                        <Card className=" shadow my-2" >
                        <Card.Img height="300" variant="top" src={banner2} />
                        <Card.Body>
                          <Card.Title>Incredible Vacations</Card.Title>
                          <Card.Text>
                           This is a  Website where users can book a tour All over the world, for new users to create an account and  also login in using a Google account
                          </Card.Text>
                        </Card.Body>
                        <Card.Body>
                          <NavLink  href="https://tour-and-traveling.web.app/" target="_blank">Live Site</NavLink>
                          <NavLink href="https://github.com/Mahmudtareq/booking-toure-client-side"  target="_blank">Client Side Code</NavLink>
                          <NavLink href="https://github.com/Mahmudtareq/booking-toure-server-side"  target="_blank">Server Side Code</NavLink>
                          <Button  className="btn btn primary">Explore</Button>
                </Card.Body>
                      </Card>
                    </Col>
                    <Col md={4} lg={4}>
                        <Card className=" shadow my-2" >
                        <Card.Img height="300" variant="top" src={banner3} />
                        <Card.Body>
                          <Card.Title>SAFE HOSPITAL
                               </Card.Title>
                          <Card.Text>
                             Health service-related websites, patients can make appointments for their treatment
                             Also, users can be booked for diagnostic treatment like x-ray



                          </Card.Text>
                        </Card.Body>
                        <Card.Body>
                          <NavLink  href="https://health-revolation.web.app/" target="_blank">Live Site</NavLink>
                          <NavLink href="https://github.com/Mahmudtareq/health-care-diagnostic"  target="_blank">Client Side Code</NavLink>
                          <Button  className="btn btn primary">Explore</Button>
                </Card.Body>
                      </Card>
                    </Col>
                </Row>
                
          </Container>
        </div>
    );
};

export default Project;