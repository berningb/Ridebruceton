import React from 'react'
import { Link } from "react-router-dom";
import '../../Styles/Footer.scss';
import Marker from '../../Assets/marker.png'
import Contact from '../../Assets/contact.png'
import Facebook from '../../Assets/facebook.png'
import data from '../../API/fakeData'

const Footer = () => {

    let services = []
    data.services.map((s, i) => {
        services.push(
            <li className='nav-link'>
                <Link key={'link_' + i} to={{
                    pathname: `/service/${s.name}`,
                    state: {service: s}}}>
                {s.name}
                </Link>
            </li>)
        return services
    })


    return (
        <div className='footer'>
            <h1>Call us for Services: (731) 252-0202</h1>
            <div className='footer-backdrop'>
                <div className='footer-container'>
                    <div className='company'>
                        <nav>
                            <ul>
                                <h3>Company</h3>
                                <li className='nav-link'><Link to="/">Home</Link></li>
                                <li className='nav-link'><Link to="/service">Repair Services</Link></li>
                                <li className='nav-link'><Link to="/merch">Merch</Link></li>
                                <li className='nav-link'><Link to="/contact">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='services'>
                        <nav>
                            <ul>
                                <h3>Services</h3>
                                {services}
                            </ul>
                        </nav>
                    </div>
                    <div className='contact'>
                        <nav>
                            <ul>
                                <h3>Contact</h3>
                                <li className='nav-link'>
                                    <Link to="/">
                                        <img alt='marker' style={{height: 30, width: 30}} src={Marker}/> 
                                        <p>
                                            Ride Bruceton inc. - Jack 30530-30560, US-70, Bruceton, TN 38317
                                        </p>
                                    </Link></li>
                                    <li className='nav-link'>
                                    <Link to="/">
                                        <img alt='mail' style={{height: 30, width: 30, marginRight: 5}} src={Contact}/> 
                                        <p>
                                            Contact Us
                                        </p>
                                    </Link>
                                    </li>
                                    <li className='nav-link'>
                                        <a href="https://www.facebook.com/Brucetonriders/">
                                            <img alt='facebook' style={{height: 30, width: 30, marginRight: 5}} src={Facebook}/> 
                                        </a>
                                    </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
