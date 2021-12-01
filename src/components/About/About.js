import React from 'react';
import './About.css';
import  tareq from '../../image/tareq1.jpg'

const About = () => {
    return (
        <div className="about component__space" id="about">
             <h1 className="about__heading text-center">About Me</h1>
            <div className="container">
                <div className="row">
                    <div className="col__2">
                        <img src={tareq} alt="" className="about__img" />
                    </div>
                    <div className="col__2">
                        <div className="about__meta">
                           <h1 className="text-about">Hi My Self Tareq Mahmud</h1>
                            <p className="about__text p__color">
                                 I am front End react developer specializing in React js , I  
                            </p>
                            <p className="about__text p__color">
                                I have some project based experience using  HTML ,CSS, Javascript , React js , Node Js , Express Js, Mongo DB and  others Technology 
                            </p>
                        </div>
                        <div>
                            <h1 className="text-about">Education </h1>
                        
                            <h3>B.Tech in Computer Science And Engineering</h3>
                            <h4>Lovely Professional University </h4>
                            <h5>Punjab, India</h5>
                             
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;