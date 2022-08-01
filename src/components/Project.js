import React from 'react';

function Project({img,title,description,webLink,gitLink}) {
    return (
        <div className='card projectSection bg-light'>
        <div className=' row'>
            <div className="projectImg col-lg-6">
                <img src={img} alt={title} />
            </div>
            <div className="projectText col-lg-6">
                <h3>{title}</h3>
                <p>{description}</p>
                <div>
                    <a href={webLink} target="_blank" rel="noreferrer"><button className ="btn btn-outline-secondary me-3">Website</button></a>
                    <a href={gitLink} target="_blank" rel="noreferrer"><button className ="btn btn-outline-secondary">GitHub Repo</button></a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Project;