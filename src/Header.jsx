import './Header.css';
import React from 'react';
import avatar from './portfolio_image.jpeg';

export const Header = () => (
    <div>
        <header id="header" className="alt">
            <span className="logo">
                <img src={avatar} alt="avatar"></img>
            </span>
            <h1>Krzysiek Kulig</h1>
            <p>
                Frontend-prefering full stack developer. Image processing
                passionate with a weakness for python.
            </p>
            <ul className="icons">
                <li>
                    <a
                        href="https://github.com/kkulis"
                        className="icon brands fa-github alt"
                    >
                        <span className="label">GitHub</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/krzysztof-kulig-3965781a5/"
                        className="icon brands fa-linkedin alt"
                    >
                        <span className="label">LinkedIn</span>
                    </a>
                </li>
            </ul>
        </header>
    </div>
);
