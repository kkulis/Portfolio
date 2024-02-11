import React, { useEffect, useState } from 'react';
import { scroller } from 'react-scroll';
import './../styles/Navbar.css';

export const Navbar = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const scrollToSkills = () => {
        scroller.scrollTo('skills', {
            duration: 700,
            smooth: true
        });
    };

    // const scrollToProjects = () => {
    //     scroller.scrollTo('projects', {
    //         duration: 700,
    //         smooth: true
    //     });
    // };

    const scrollToResume = () => {
        scroller.scrollTo('resume', {
            duration: 700,
            smooth: true
        });
    };
    return (
        <nav className={`navigation-bar ${isLoaded ? 'loaded' : ''} `}>
            <ul>
                <li>
                    <a onClick={scrollToSkills}>Skills</a>
                </li>
                {/* <li>
                    <a onClick={scrollToProjects}>Projects</a>
                </li> */}
                <li>
                    <a onClick={scrollToResume}>Resume</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
