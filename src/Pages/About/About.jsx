import React from 'react'
import InfoSection from './Components/Info'
import ServiceSection from './Components/Services'
import ScheduleContainer from './Containers/ScheduleContainer'
import '../../Styles/About.scss'


const About = () =>  {

    return (
        <div className='about'>
            <div className='scene'>
                <div className='cover'></div>
            </div>

            <ScheduleContainer />
            <InfoSection />
            <ServiceSection/>

        </div>
        )
}

export default About;
