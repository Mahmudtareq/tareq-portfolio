import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Banner.css';
import banner from '../../image/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <h4 className="text-start text-red">Hello, My name is </h4>
                        <h1 className="text-start name-color">Tareq Mahmud</h1>
                        <h5 className="text-start my-3 text-red">Front End Developer</h5>
                        <p className="text-start">I'm developer focused on crafting user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                        <Button className="btn btn-primary px-3">Hire me</Button>
                        <Button className="btn btn-primary ms-4">Download Resume</Button>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 mt-2">
                       <img className="img-fluid" src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;