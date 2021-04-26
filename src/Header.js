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
                    I am an ambitious programmer at the beginning of his IT
                    career. My objective is to gain new abilities and experience
                    in programming web applications. I am interested in both
                    backend and frontend aspects of code development.
                </p>
                <ul class="icons">
                    {/* <li><a href="https://twitter.com/krzysiekk_kulig" className="icon brands fa-twitter alt"><span class="label">Twitter</span></a></li> */}
                    <li>
                        <a
                            href="https://www.facebook.com/krzysiek.kulig.5/"
                            className="icon brands fa-facebook-f alt"
                        >
                            <span class="label">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/krzysiekkulig/"
                            className="icon brands fa-instagram alt"
                        >
                            <span class="label">Instagram</span>
                        </a>
                    </li>
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
                    <li>
                        <a
                            href="https://soundcloud.com/krzysiekkulig"
                            className="icon brands fa-soundcloud alt"
                        >
                            <span class="label">SoundCloud</span>
                        </a>
                    </li>
                    {/* <li>
                        <a
                            href="https://www.youtube.com/channel/UCkcHCpxgdjlnSFg8u3RTVmg"
                            className="icon brands fa-youtube alt"
                        >
                            <span class="label">YouTube</span>
                        </a>
                    </li> */}
                </ul>
            </header>
        </div>
    );
}

export default Header;
