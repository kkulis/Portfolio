import React from 'react';
import './css/main.css';
import './css/noscript.css';
import { Navbar } from './Navbar';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Resume } from './Resume';
import { Footer } from './Footer';
import { Header } from './Header';

export const App = () => (
    <div id="wrapper">
        <Header />
        <Navbar />
        <div id="main">
            <Skills />
            <Projects />
            <Resume />
        </div>
        <Footer />
    </div>
);
