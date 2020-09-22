import React from 'react'
import '../Styles/ServiceDisplay.scss'

const Services = ({match, location}) => {
    
    const { service } = location.state
    return (
     <div className='display'>
         <img src={service.image} alt={service.name + ' image'} />
         <h2>{service.name}</h2>
         <p>{service.text}</p>
     </div>
    )
}
export default Services;

