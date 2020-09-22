import React from 'react'
import Schedule from '../../Components/Schedule'
import Carousel from '../../Components/Carousel'
import GoogleMap from '../../Components/GoogleMap'
import About from '../../Components/About'


import '../../Styles/Home.scss'


const Home = () =>  {

    return (
        <div className='home content'>
            <Carousel height='720px'/>
            <Schedule />
            <About />
            <GoogleMap width='100%'/>
        </div>
        )
}

export default Home;
