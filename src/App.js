import React from 'react';
import './css/main.css';
import './css/noscript.css';
import FadeIn from 'react-fade-in';

import Header from './Header';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import Footer from './Footer';

function App() {
    return (
        <div id="wrapper">
            <FadeIn transitionDuration={900}>
                <Header />
            </FadeIn>
            <Navbar />
            <div id="main">
                <Skills />
                <Projects />
                <Resume />
            </div>
            <footer id="footer">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
