import React from 'react';
import Project from './Project';
import arch from '../resources/imgs/arch.jpg';
import game from '../resources/imgs/game.jpg';
import travel from '../resources/imgs/travel.jpg';

function Projects() {
    const list = {
        arch:{
            img:arch,
            title:"ArchiCommunity",
            description:"A responsive full-stack social media platform, like an Instagram specially designed for architects’ community",
            webLink:"https://polar-lake-72517.herokuapp.com/",
            gitLink:"https://github.com/Jackie-GitHub/Archi-code"
        },
        game:{
            img:game,
            title:"ArchiCommunity",
            description:"A responsive full-stack social media platform, like an Instagram specially designed for architects’ community",
            webLink:"https://jackie-github.github.io/memorygame/",
            gitLink:"https://github.com/Jackie-GitHub/memorygame"
        },
        travel:{
            img:travel,
            title:"On The Road",
            description:"If you don't know where to travel,On The Road can help you find some ideas about your next destination.",
            webLink:"https://jackie-github.github.io/ontheroad/",
            gitLink:"https://github.com/Jackie-GitHub/ontheroad--code"
        },
    }
    return (
        <section className="container projectsSection" id="projects">
            <h1 className="text-center">Projects</h1>
            <p className="text-center titleDescription">All projects listed below were developed by me from initial concept design to implementation</p>
            <Project img={list.arch.img} title={list.arch.title} description={list.arch.description} webLink={list.arch.webLink} gitLink={list.arch.gitLink} />
            <Project img={list.travel.img} title={list.travel.title} description={list.travel.description} webLink={list.travel.webLink} gitLink={list.travel.gitLink} />
            <Project img={list.game.img} title={list.game.title} description={list.game.description} webLink={list.game.webLink} gitLink={list.game.gitLink} />
        </section>
    )
}

export default Projects;