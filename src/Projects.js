import React from 'react';

function Projects() {
    return (
        <section id="projects" class="main special">
            <header class="major">
                <h2>Projects</h2>
            </header>
            <ul class="features">
                <li>
                    <span className="fas fa-dumbbell fa-7x"></span>
                    <h3>Training Diary</h3>
                    <p>
                        ASP.NET Core MVC web application with React.js views.
                        Made to save trainings progress.
                    </p>
                    <ul class="icons">
                        <li>
                            <a
                                href="https://github.com/kkulis/TrainingsDiary"
                                className="icon brands fa-github alt"
                            >
                                <span class="label">GitHub</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <span class="fas fa-pizza-slice fa-7x"></span>
                    <h3>Foodcore</h3>
                    <p>
                        Made in ASP.Net Core MVC ERP web application for
                        gastronomy.
                    </p>
                    <ul class="icons">
                        <li>
                            <a
                                href="https://github.com/kkulis"
                                className="icon fa-file alt"
                            >
                                <span class="label"></span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <span class="fas fa-id-card fa-7x"></span>
                    <h3>Head's Up!</h3>
                    <p>
                        Simple React.js Web app based on popular game, where
                        player is trying to guess what is being displayed on his
                        forehead.
                    </p>
                    <ul class="icons">
                        <li>
                            <a
                                href="https://github.com/kkulis/Heads_up"
                                className="icon brands fa-github alt"
                            >
                                <span class="label">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://determined-pasteur-26d36e.netlify.com/"
                                className="icon fa-file alt"
                            >
                                <span class="label">Page</span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="fas fa-file-alt fa-7x"></span>
                    <h3>Targetly home page</h3>
                    <p>Home page made for IT Consulting company.</p>
                    <ul class="icons">
                        <li>
                            <a
                                href="https://stupefied-banach-58fe1a.netlify.app/"
                                className="icon fa-file alt"
                            >
                                <span class="label">Page</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default Projects;
