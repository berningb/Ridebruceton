import React from 'react'
import Schedule from '../../Components/Schedule'
import Carousel from '../../Components/Carousel'
import GoogleMap from '../../Components/GoogleMap'
import About from '../../Components/About'
import motor from '../../Assets/shop3.jpeg'
import motor2 from '../../Assets/shop1.JPG'
import motor3 from '../../Assets/cycle3.jpg'
import motor4 from '../../Assets/cycle4.jpg'
import honda from '../../Assets/honda2.jpg'
import motor6 from '../../Assets/cycle6.jpg'
import cycle1 from '../../Assets/cycle1.jpg'
import vanity from '../../Assets/vanity3.jpg'

import '../../Styles/Home.scss'


const Home = () =>  {

    const imageDetails = [
        {image: vanity, title: 'Jack Bocker', text: 'Owner and head Mechanic at Ride Bruceton'},
        {image: motor, title: 'Harley Davidson'},
        {image: motor4, title: 'Harley Davidson'},
        {image: motor6, title: 'Triumph'},
        {image: motor2, title: 'Lets Ride Bruceton!'},
        {image: motor3, title: 'Indian'},
        {image: honda, title: 'Honda'},
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
