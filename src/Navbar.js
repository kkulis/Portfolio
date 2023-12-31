import React from 'react';
import { scroller } from 'react-scroll';

class Navbar extends React.Component {
    scrollToSkills = () => {
        scroller.scrollTo('skills', {
            duration: 700,
            smooth: true,
        });
    };

    scrollToProjects = () => {
        scroller.scrollTo('projects', {
            duration: 700,
            smooth: true,
        });
    };

    scrollToResume = () => {
        scroller.scrollTo('resume', {
            duration: 700,
            smooth: true,
        });
    };
    render() {
        return (
            <nav id="nav">
                <ul>
                    <li>
                        <a onClick={this.scrollToSkills}>Skills</a>
                    </li>
                    <li>
                        <a onClick={this.scrollToProjects}>Projects</a>
                    </li>
                    <li>
                        <a onClick={this.scrollToResume}>Resume</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
