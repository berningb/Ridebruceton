import React from 'react'
import '../../../Styles/ScheduleContainer.scss'
import facebook from '../../../Assets/facebook.svg'

const ScheduleContainer = () =>  {
    const days = [
                    ['Monday', '9AM - 5PM'],
                    ['Tuesday','9AM - 5PM'],
                    ['Wednesday','9AM - 5PM'],
                    ['Thursday','9AM - 5PM'],
                    ['Friday','9AM - 5PM'],
                    ['Saturday','Closed...'],
                    ['Sunday', 'Closed...']
    ]
    let newDays = []
    days.forEach((element) => {
        console.log(element[0])
        newDays.push(
            <div className='schedule-day'>
                <p>{element[0]}</p>
                <div className='linkx'></div>
                <p className={element[1] === "Closed..." ? 'closed':  'open'}>{element[1]}</p>
            </div>
        )
    })

    return (
        <div className='schedule-container'>
            <div className='schedule-content'>
                {FacebookWidget()}
                <div className='schedule card'>
                    <h3 className='schedule-name'>Shop Hours</h3>
                    {newDays}                    
                </div>
            </div>
        </div>)
}

export default ScheduleContainer;





const FacebookWidget = () => {
    return (
        <div id='facebook-wrapper'>
            <div className='facebook'>
                <a href='https://www.facebook.com/Brucetonriders/'>
                    <div className='cover'></div>
                    <img src={facebook}/>
                </a>
            </div>
        </div>
        
    )
}

