import React from 'react';
import './aboutMe.css';
import example from './home.jpg'

const AboutMe = ()=>{

    return (

        <div>
            <div>
                <p>I've studied computer science at San Agustin university. Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Eum accusantium possimus, quibusdam, rerum odit id a labore nihil perspiciatis 
                    doloribus maxime. Nemo magnam at voluptates consectetur explicabo ex officiis reprehenderit?</p>
            </div>
            <img className='img' src={example}/>
        </div>
    )

}
 export default AboutMe;