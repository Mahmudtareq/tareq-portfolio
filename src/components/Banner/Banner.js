import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div class="container my-3">
                <div class="row">
                    <div class="col">
                        <h4 className="text-start text-red">Hello, My name is </h4>
                        <h1 className="text-start txt-color">Tareq Mahmud</h1>
                        <h5 className="text-start mt-2">Wev Developer</h5>
                        <p className="text-start">I'm developer focused on crafting user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                        <Button className="btn btn-primary px-3">Hire me</Button>
                        <Button className="btn btn-primary ms-4">Download Resume</Button>
                    </div>
                    <div class="col">
                       <h2>Image </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;