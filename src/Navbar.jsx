import './Navbar.css';
import React from 'react';
import { scroller } from 'react-scroll';

export const Navbar = () => {
    const scrollToSkills = () => {
        scroller.scrollTo('skills', {
            duration: 700,
            smooth: true
        });
    };

    const scrollToProjects = () => {
        scroller.scrollTo('projects', {
            duration: 700,
            smooth: true
        });
    };

    const scrollToResume = () => {
        scroller.scrollTo('resume', {
            duration: 700,
            smooth: true
        });
    };
    return (
        <nav id="nav">
            <ul>
                <li>
                    <a onClick={scrollToSkills}>Skills</a>
                </li>
                <li>
                    <a onClick={scrollToProjects}>Projects</a>
                </li>
                <li>
                    <a onClick={scrollToResume}>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
