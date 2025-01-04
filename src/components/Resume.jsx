import './../styles/Resume.css';
import React from 'react';

export const Resume = () => (
    <section id="resume" className="main special">
        <header className="major">
            <h2>Resume</h2>
        </header>
        <footer className="major">
            <a
                href="https://drive.google.com/file/d/1rTX6HixbiuGejwYXML1cvZfz5D7X5sH4/view?usp=sharing"
                download
                className="button primary"
                target="_blank"
                rel="noreferrer"
            >
                Download
            </a>
        </footer>
    </section>
);
