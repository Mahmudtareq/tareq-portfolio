import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './PersonalSkills.css';

const PersonalSkills = () => {
    return (
        <div className="" id="skills">
            <Container className=" p-3 my-5">
                <h1 className="text-center my-4 header-text fs-900">Personal Skills</h1>
                <Row>
                    <div>
                        <label variant="success" className="text-color">HTML</label>
                         <ProgressBar animated now={90}/>
                    </div>
                    <div>
                        <label variant="success" className="text-color">CSS</label>
                         <ProgressBar animated now={80}/>
                    </div>
                    <div>
                        <label variant="success" className="text-color">JAVASCRIPT</label>
                         <ProgressBar animated now={75}/>
                    </div>
                    <div>
                        <label variant="success" className="text-color">BOOTSTRAP</label>
                         <ProgressBar animated now={80}/>
                    </div>
                    <div>
                        <label variant="success" className="text-color">REACT JS</label>
                         <ProgressBar animated now={75}/>
                    </div>
                    <div>
                        <label variant="success" className="text-color">MATERIAL UI</label>
                         <ProgressBar animated now={80}/>
                    </div>
                    <div>
                        <label variant="success" className="text-color">NODE JS</label>
                         <ProgressBar animated now={60}/>
                    </div>
                    <div>
                        <label variant="success" className="text-color">EXPRESS JS</label>
                         <ProgressBar animated now={70}/>
                    </div>
                    <div>
                        <label variant="success" className="text-color">MONGO DB</label>
                         <ProgressBar animated now={70}/>
                    </div>
                    


                </Row>
            </Container>
            
        </div>
    );
};

export default PersonalSkills;