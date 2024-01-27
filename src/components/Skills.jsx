import './../styles/Skills.css';
import React from 'react';

export const Skills = () => (
    <section id="skills" className="main">
        <div className="spotlight">
            <div className="content">
                <header className="major">
                    <h2>Skills</h2>
                </header>
                <h4 style={{ fontWeight: 'bold' }}>Frontend</h4>
                <p>React.js, TypeScript, Web Workers, IndexedDb</p>
                <h4 style={{ fontWeight: 'bold' }}>.NET</h4>
                <p>C#, ASP.NET, Entity Framework, SQL</p>
                <h4 style={{ fontWeight: 'bold' }}>AWS</h4>
                <p>S3, CloudFront, Lambda</p>
                <h4 style={{ fontWeight: 'bold' }}>Azure</h4>
                <p>Basics</p>
                <h4 style={{ fontWeight: 'bold' }}>Python</h4>
                <p>Image processing, FastAPI, Pipenv </p>
            </div>
        </div>
    </section>
);
