import './../styles/App.css';
import React from 'react';
import { Navbar } from './Navbar';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Resume } from './Resume';
import { Footer } from './Footer';
import { Header } from './Header';
import { ContentWrapper } from './ContentWrapper';

export const App = () => (
    <div id="wrapper">
        <Header />
        <Navbar />
        <ContentWrapper>
            <Skills />
            <Projects />
            <Resume />
        </ContentWrapper>
        <Footer />
    </div>
);
