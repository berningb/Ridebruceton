import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Header.scss';

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <ul>
                    <li className='nav-link'><Link to="/">About</Link></li>
                    <li className='nav-link'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;
