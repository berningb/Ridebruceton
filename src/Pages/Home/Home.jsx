import React from 'react'
import Schedule from '../../Components/Schedule'
import Carousel from '../../Components/Carousel'
import GoogleMap from '../../Components/GoogleMap'
import About from '../../Components/About'
import motor from '../../Assets/shop3.jpeg'
import motor2 from '../../Assets/shop1.JPG'
import motor3 from '../../Assets/cycle3.jpg'
import motor4 from '../../Assets/cycle4.jpg'
import motor5 from '../../Assets/banner2.jpg'
import motor6 from '../../Assets/cycle6.jpg'
import cycle1 from '../../Assets/cycle1.jpg'

import '../../Styles/Home.scss'


const Home = () =>  {

    const imageDetails = [
        {image: motor, title: 'Harley Davidson'},
        {image: motor4, title: 'Harley Davidson'},
        {image: motor6, title: 'Triumph'},
        {image: motor2, title: 'Lets Ride Bruceton!'},
        {image: motor3, title: 'Indian'},
        {image: motor5, title: 'Triumph'},
        {image: cycle1, title: ''},
    ]

    return (
        <div className='home content'>
            <Carousel height='720px' data={imageDetails} showCover={true}/>
            <Schedule />
            <About />
            <GoogleMap width='100%'/>
        </div>
        )
}

export default Home;
