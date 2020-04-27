import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';






class Navbar extends React.Component {
    scrollToSkills = () => {
        console.log("elo");
        scroller.scrollTo('skills', {
            duration: 700,
            smooth: true
        })

    }

    scrollToProjects = () => {
        console.log("elow2");
        scroller.scrollTo('projects', {
            duration: 700,
            smooth: true
        })
    }

    scrollToResume = () => {
        console.log("elow3");
        scroller.scrollTo('resume', {
            duration: 700,
            smooth: true
        })
    }
    render() {
        return (
            <nav id="nav">
                <ul>
                    <li><a onClick={this.scrollToSkills}>Skills</a></li>
                    <li><a onClick={this.scrollToProjects}>Projects</a></li>
                    <li><a onClick={this.scrollToResume}>Resume</a></li>
                </ul>
            </nav>


        );
    }
}

export default Navbar;