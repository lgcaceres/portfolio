import React from 'react';
import {Router,Link} from 'react-router-dom'
import './header.css';

const Header = ()=> {
    return (
        
            <div className = 'header'>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>

            </div>  
        
    )
}



export default Header;