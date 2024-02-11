import React from 'react';
import './../styles/Skills.css';

export const Skills = () => (
    <section id="skills" className="main">
        <div className="spotlight">
            <div className="content">
                <header className="major">
                    <h2>Skills</h2>
                </header>
                <h4 style={{ fontWeight: 'bold' }}>Frontend</h4>
                <p>
                    React.js, Typescript, Web Workers, IndexedDb, Redux,
                    fabric.js, OpenCV.js, npm, webpack
                </p>
                <h4 style={{ fontWeight: 'bold' }}>Backend</h4>
                <p>
                    C#, .NET, ASP.NET, Entity Framework, IdentityServer, SQL,
                    Node.js
                </p>
                <h4 style={{ fontWeight: 'bold' }}>AWS</h4>
                <p>S3, CloudFront, Lambda, IAM</p>
                <h4 style={{ fontWeight: 'bold' }}>Azure</h4>
                <p>AppServices, Application Insights, Key Vault</p>
                <h4 style={{ fontWeight: 'bold' }}>Python</h4>
                <p>FastAPI, pip, venv, OpenCV, numpy </p>
            </div>
        </div>
    </section>
);
