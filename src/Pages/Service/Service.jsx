import React from 'react'
import { Link } from "react-router-dom";
import '../../Styles/Services.scss';
import Schedule from '../../Components/Schedule'

import data from '../../API/fakeData'

const Service = ({type}) =>  {
    let boxes = []
    console.log(data)
    data.vehicleTypes.map((services, index) => {
        boxes.push(<div className='box-wrapper'>
            <h2>{services.Name}</h2>
                <Box data={services} key={index} />
            </div>)
        return boxes
    })

    return (
        <div className='service content'>
            <div className='banner'>
                <h1>Repair Services</h1>
            </div>
            <Schedule />
            <div className='service-intro'>
            <p>
                We use high-tech diagnostic equipment to guarantee your bike 
                is repaired and/or serviced correctly the first time around, 
                and we only use the highest quality replacement parts, filters, 
                oils, and components when it comes to your bike.
                </p>
                <p>
                To keep your bike running properly at all times, we offer
                a number of services that are carried 
                out by our certified, expert service and repair technicians 
                who have years of experience performing everything from oil 
                changes to a complete engine overhaul.
                </p>
            </div>
             <div className='service-wrapper'>
                {boxes}
             </div>
        </div>
        )
}

export default Service;





const Box = ({data}) => {
    let list = []
    data.Options.map((e, index) => {
        list.push(
        <li key={index}><Link key={'link_' + index} to={{
            pathname: `/service/${e.name}`,
            state: {
                service: e
            }
        }}>{e.name}</Link></li>
        )


        return list
    })

    return (
        <div className="container box">
            <img src={data.Image} alt="Avatar" className="image"/>
            <div className="overlay">
                <ul className='text'>
                    {list}
                </ul>
            </div>
        </div>
    )
}