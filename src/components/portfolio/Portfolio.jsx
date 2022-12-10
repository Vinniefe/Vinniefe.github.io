import React from 'react';
import './Portfolio.css';

import logo from '../../assests/logo.jpg';

const projects = [

{ 
    id: 2,
    image: logo,
    title: 'NEMSU ',
    position: 'student',
    date: 'signed on February 22, 201021',
    description: 'SDSSU is composed of six campuses strategically located in the Province of Surigao del Sur. It achieved its status as a university through Republic Act 9998 signed on February 22, 2010. The history of the University dates back to 1982 when Bukidnon State College opened their extension in Tandag. In 1992, it became the Surigaodel Sur Polytechnic College. Six years later in 1998, the College earned the status of a state college by virtue of Republic Act 8628..'
},
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My School</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
           {projects.map((project) => {
            return (
                <article key={project.id} className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={project.image} alt={project.title} />
                    </div> 
                    <h3>{project.title}</h3>
                    <h5>{project.position}</h5>
                    <h6>{project.date}</h6>
                    <small className='portfolio__desc'>
                        {project.description}
                    </small>
               </article>
            )
            }) 
            }
        </div>
    </section>
  );
}

export default Portfolio;