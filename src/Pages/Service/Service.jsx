import React from 'react'
import { Link } from "react-router-dom";

import '../../Styles/Services.scss';
import data from '../../API/fakeData'

const Service = ({type}) =>  {
    let boxes = []
    console.log(data.vehicleTypes)
    data.vehicleTypes.map((services, index) => {
        boxes.push(<Box data={services} key={index} />)
        return boxes
    })

    return (
        <div className='service content'>
             <h1>Repair Services</h1>
             <div className='service-wrapper'>
                {boxes}
             </div>
        </div>
        )
}

export default Service;





const Box = ({data}) => {
    let list = []

    data.Services.map((e, index) => {
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
        <div className={`box  ` + data.Name}>
            <h3>{data.Name}</h3>
            <img src={data.Image} alt={data.Name + ' image'}/>
            <ul>
                {list}
            </ul>
        </div>
    )
}