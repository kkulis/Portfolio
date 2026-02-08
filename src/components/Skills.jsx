import React from 'react';
import './../styles/Skills.css';

export const Skills = () => (
    <section id="skills" className="main">
        <div className="spotlight">
            <div className="content">
                <header className="major">
                    <h2>Skills</h2>
                </header>
                <h4 style={{ fontWeight: 'bold' }}>AI & Machine Learning</h4>
                <p>
                    Deep Neural Networks (DNNs) · Transformer Architecture
                    (Encoders, Decoders, Self-Attention, Multi-Head Attention,
                    Feed-Forward Networks) · Large Language Models ·
                    Retrieval-Augmented Generation (RAG) · Pretraining ·
                    Fine-Tuning · PyTorch
                </p>
                <h4 style={{ fontWeight: 'bold' }}>Frontend</h4>
                <p>React · Next.js · JavaScript / TypeScript · HTML · CSS</p>
                <h4 style={{ fontWeight: 'bold' }}>Backend</h4>
                <p>.NET · ASP.NET · SQL</p>
                <h4 style={{ fontWeight: 'bold' }}>Cloud</h4>
                <p>AWS · Azure</p>
            </div>
        </div>
    </section>
);
