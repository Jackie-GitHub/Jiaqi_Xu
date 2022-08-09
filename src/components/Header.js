import React, { useState } from 'react';
import resume from '../resources/resume2.pdf';
import { IoMenu } from 'react-icons/io5';

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <header>
            <nav className="navBarL">
                <div className="container navBarLCon">
                    <ul>
                        <li className="navItem"><a className="nav-link" href="#home">HOME</a></li>
                        <li className="navItem"><a className="nav-link" href="#experience">EXPERIENCE</a></li>
                        <li className="navItem"><a className="nav-link" href="#projects">PROJECTS</a></li>
                        <li className="navItem"><a className="nav-link" href="#contact">CONTACT</a></li>
                        <li className="navItem"><a className="nav-link" href = {resume} target ="_blank" rel="noreferrer">RESUME</a></li>
                    </ul>
                </div>
            </nav>
            <nav className="navBarS">
                <div className="container navBarSCon">
                    <div className="navBarSConN">
                        <div className="navMenuIcon" onClick={() => { setIsNavExpanded(!isNavExpanded) }}>
                            <IoMenu size="40px"/>
                        </div>
                        <ul className={ isNavExpanded ? "show" : "hide"}>
                            <li className="navItem"><a className="nav-link" href="#home">HOME</a></li>
                            <li className="navItem"><a className="nav-link" href="#experience">EXPERIENCE</a></li>
                            <li className="navItem"><a className="nav-link" href="#projects">PROJECTS</a></li>
                            <li className="navItem"><a className="nav-link" href="#contact">CONTACT</a></li>
                            <li className="navItem"><a className="nav-link" href = {resume} target ="_blank" rel="noreferrer">RESUME</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;