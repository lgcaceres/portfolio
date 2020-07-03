import React from 'react';
import './home.css'
import photo from './photo.png'

const Home = ()=> {
    return (
        <div className="home">
            <div className ="home-title">hi</div>
            <div className = "home-content">
                <p className = "home-content-1">I'm Luis,</p>
                <p className = "home-content-2">a front-end developer</p>
            </div>
            <img className = "home-img" src={photo}/>
        </div>
        )   
}



export default Home;