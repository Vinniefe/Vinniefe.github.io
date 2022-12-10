import React from 'react';
import './About.css';
import ME from '../../assests/ME1.jpg';
import {BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="A headshot of Lucas"/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>North Eastern Mindanao State University <br/> Computer Science</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Hobbies</h5>
                        <small>Traveling, Play Games, Movies</small>
                    </article>
                </div>
                <p>
                I am a fourth-year student majoring in computer science at 
                North Eastern Mindanao State University. 
                I am currently living in Lianga. 
                I have two rabbits, namely Unno and Doss.
                </p>

                <a href="#contact" className='btn btn-primary'>Know more about me.</a>
            </div>
        </div>
    </section>
  );
}

export default About;