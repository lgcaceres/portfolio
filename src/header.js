import React from 'react';
import './header.css';

const Header = ()=> {
    return (
        <div className = 'header'>
            <a href='./home.js'>Home</a>
            <a href='./aboutMe.js'>About</a>
            <a href='./footer.js'>Contact</a>
        </div>
    )
}

export default Header;