import React from 'react'
import '../Styles/Schedule.scss'
import { Link } from "react-router-dom";

import facebook from '../Assets/facebook.png'

const Schedule = () =>  {
    const days = [
                    ['Monday', 'Closed...'],
                    ['Tuesday','9:00AM - 5:00PM'],
                    ['Wednesday','9:00AM - 5:00PM'],
                    ['Thursday','9:00AM - 5:00PM'],
                    ['Friday','9:00AM - 5:00PM'],
                    ['Saturday','9:00AM - 5:00PM'],
                    ['Sunday', 'Closed...']
    ]
    let newDays = []
    days.forEach((element, i) => {
        newDays.push(
            <div className='schedule-day' key={i}>
                <div className='day'>{element[0]}</div>
                <div className='time'>{element[1]}</div>
            </div>
        )
    })

    return (
        <div className='schedule-container'>
            <div className='schedule'>
                <div className='card'>
                    <div className='shop'>
                        <h3 className='title'>Shop Hours</h3>
                        <div className='row-containers'>
                            {newDays}     
                        </div>
                    </div>
                    <div className='quicklinks'>
                        <h3 className='title'>Link Up</h3>
                        <div className='link-containers'>
                            <div className='item-container facebook-container'>
                                <a href='https://www.facebook.com/Brucetonriders/'>
                                    <img className='facebook' src={facebook} alt='facebook'/>
                                </a>
                            </div>
                            <div className='item-container'>
                                <Link to="/contact">
                                    <div className='item-box'>Email Us</div>
                                </Link>
                                <br />
                                <Link to="/contact">
                                    <div className='item-box'>Get Directions</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default Schedule;

