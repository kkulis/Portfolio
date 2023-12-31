import React from 'react';
import './css/main.css';
import './css/noscript.css';

import Header from './Header';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import Footer from './Footer';

function App() {
    return (
        <div id="wrapper">
            <Header />
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
