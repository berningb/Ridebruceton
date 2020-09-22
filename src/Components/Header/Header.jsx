import React from 'react'
import Nav from './Nav'
import '../../Styles/Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='main-info'>
                <div className='logo'>
                    <h1>Ride Bruceton inc</h1>
                    <p style={{color: 'white'}}>Lets Ride Bruceton!</p>
                </div>
                <div>
                    <h1>Our Location</h1>
                    <p>30530-30560, US-70, Bruceton, TN 38317</p>
                </div>
                <div>
                    <h1>Call Us Now</h1>
                    <p>(731) 252-0202</p>
                </div>
            </div>
            <Nav />
        </div>
    )
}

export default Header;
