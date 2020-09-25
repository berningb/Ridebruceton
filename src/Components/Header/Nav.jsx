import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Dropdown from './Dropdown'
import { useSpring } from 'react-spring'
import data from '../../API/fakeData'
import '../../Styles/Nav.scss';

const Nav = () => {


    const move = useSpring({
        height: 300,
        from: { height: 0 },
        config: { duration: 0 },
        reset: true,
    })
    const moveBack = useSpring({
        height: 0,
        from: { height: 300 },
        config: { duration: 0 },
        reset: true,
    })

    const fade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 100 },
        reset: true,
    })

    
    const fadeOut = useSpring({
        opacity: 0,
        from: { opacity: 1 },
        config: { duration: 0 },
        reset: true,
    })


    const [servIsShown, setServIsShown] = useState(false);

    const [style, setStyle] = useState(move);
    const [styleFade, setStyleFade] = useState(fade);
   
    const closeServDropdown = () => {
        setServIsShown(false)
        setStyleFade(fadeOut)
    }   
     const openServDropdown = () => {
        setServIsShown(true)
        setStyle(move)
        setStyleFade(fade)
    }
    return (
        <div className='nav'>
            <nav>
                <ul>
                    <li className='nav-link'><Link to="/">Home</Link></li>
                    <li className='nav-link ' 
                        onMouseLeave={() => {
                            setStyle(moveBack)
                            setStyleFade(fadeOut)
                            }}>
                        <Dropdown show={servIsShown} fade= {styleFade}
                        openDropdown={() => openServDropdown()}
                        closeDropdown={() => closeServDropdown()}
                        style={style}
                        type='Repair Services'
                        link={'/service'}
                        data={data.vehicleTypes}/>
                    </li>
                    <li className='nav-link'><Link to="/merch">Merch</Link></li>
                    <li className='nav-link'><Link to="/contact">Contact</Link></li>
                    <li className='nav-link'><a href="https://www.facebook.com/Brucetonriders/">Request an Appointment</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;



