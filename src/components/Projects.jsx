import React from 'react';
import './../styles/Projects.css';

export const Projects = () => (
    <section id="projects" className="main special">
        <header className="major">
            <h2>Projects</h2>
        </header>
        <ul className="features">
            <li>
                <span className="fas fa-dumbbell fa-7x"></span>
                <h3>Training Diary</h3>
                <p>
                    ASP.NET Core MVC web application with React.js views. Made
                    to save trainings progress.
                </p>
                <ul id="one-icon" className="icons">
                    <li>
                        <a
                            href="https://github.com/kkulis/TrainingsDiary"
                            className="icon brands fa-github alt"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="label">GitHub</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <span className="fas fa-pizza-slice fa-7x"></span>
                <h3>Foodcore</h3>
                <p>
                    Made in ASP.Net Core MVC ERP web application for gastronomy.
                </p>
                <ul id="one-icon" className="icons"></ul>
            </li>
            <li>
                <span className="fas fa-id-card fa-7x"></span>
                <h3>Heads Up!</h3>
                <p>
                    Simple React.js Web app based on popular game, where player
                    is trying to guess what is being displayed on his forehead.
                </p>
                <ul
                    className="icons"
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <li>
                        <a
                            href="https://github.com/kkulis/Heads_up"
                            className="icon brands fa-github alt"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="label">GitHub</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <span className="fas fa-file-alt fa-7x"></span>
                <h3>Targetly home page</h3>
                <p>Home page made for IT Consulting company.</p>
                <ul id="one-icon" className="icons">
                    <li>
                        <a
                            href="https://stupefied-banach-58fe1a.netlify.app/"
                            className="icon fa-file alt"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="label">Page</span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
);
