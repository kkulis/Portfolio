import React from 'react';
import avatar from './avatar2.jpg';

function Header() {
    return (
        <div>
            <header id="header" className="alt">
                <span className="logo">
                    <img src={avatar} alt=""></img>
                </span>
                <h1>Krzysiek Kulig</h1>
                <p>
                    Frontend-prefering full stack developer. Image processing passionate with a weakness for python.
                </p>
                <ul class="icons">
                    <li>
                        <a
                            href="https://github.com/kkulis"
                            className="icon brands fa-github alt"
                        >
                            <span class="label">GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/krzysztof-kulig-3965781a5/"
                            className="icon brands fa-linkedin alt"
                        >
                            <span class="label">LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
