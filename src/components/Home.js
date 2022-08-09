import React from 'react';
import office from '../resources/imgs/office.png';
import resume from '../resources/resume2.pdf';
import { FaGithub,FaLinkedinIn } from 'react-icons/fa';

function Home() {
    return (
        <section className='container homeSection' id="home">
            <div className="homeText">
                <h2>Hi,I'm</h2>
                <h1>Jiaqi Xu</h1>
                <p>A web developer, based in New York City. Naturally inquisitive and dedicated to my work. Before moving to development, I was an architect.</p>
                <div>
                    <a href = {resume} target ="_blank" rel="noreferrer"><button className="btn btn-outline-secondary">Resume</button></a>
                    <a className="icon ms-3" href="https://github.com/Jackie-GitHub" target="_blank" rel="noreferrer"><FaGithub size='32px'/></a>
                    <a className="icon ms-3" href="https://www.linkedin.com/in/jiaqi-xu-57222986/" target="_blank" rel="noreferrer"><FaLinkedinIn size='32px' /></a>
                </div>
            </div>
            <div className="homeImg">
                <img src={office} alt="Office Illustration" /> 
            </div>
        </section>
    )
}

export default Home;