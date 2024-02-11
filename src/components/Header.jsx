import './../styles/Header.css';
import React, { useEffect, useState } from 'react';
import avatar from './../images/portfolio_image.jpeg';

export const Header = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className={`header-content ${isLoaded ? 'loaded' : ''} `}>
            <header id="header" className="alt">
                <div className="logo">
                    <img src={avatar} alt="avatar"></img>
                </div>
                <h1>Krzysiek Kulig</h1>
                <p>
                    Frontend-preferring full stack developer. Image processing
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
};
