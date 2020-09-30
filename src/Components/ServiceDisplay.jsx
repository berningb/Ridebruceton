import React from 'react'
import '../Styles/ServiceDisplay.scss'

const ServiceDisplay = ({match, location}) => {
    
    const { service } = location.state
    return (
     <div className='display'>
         <h2>{service.name}</h2>
         <p>{service.text}</p>
     </div>
    )
}
export default ServiceDisplay;

