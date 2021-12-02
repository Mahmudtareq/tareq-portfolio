import React from 'react';
import About from '../About/About';
import ContactMe from '../ContactMe/ContactMe';
import Home from '../Home/Home';
import PersonalSkills from '../PersonalSkills/PersonalSkills';
import Project from '../Project/Project';
import Services from '../Services/Services';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Services></Services>
            <Project></Project>
            <PersonalSkills></PersonalSkills>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Main;