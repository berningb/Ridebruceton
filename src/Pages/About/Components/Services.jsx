import React from 'react'
import '../../../Styles/Services.scss';
import fakedata from '../../../API/fakeData'

const Services = () => {
    return (
        <div id='service-section'>
            <h1>Services</h1>
            <div id='services-wrapper'>
                <ServiceBox type='HYDROGRAPHICS'/>
                <ServiceBox type='ATV'/>
                <ServiceBox type='CYCLES'/>
            </div>
        </div>
    )
}
export default Services;



const ServiceBox = ({title, link, type}) => {
    let services = []

    const values = Object.values(fakedata.Services[type])
    shuffle(values)
    values.forEach(element => {
        services.push(
            <div className='service-type'>
                <div className='icon'>
                    <img src={element.icon}/>
                </div>
                <span>{element.name}</span>
            </div>)
    })
    return (
        <div className='service-box-container'>
            <div className='service-box-type'>{type}</div>
            <div className='service-box card'>
                {services}
            </div>
        </div>

        
    )
}

// shuffle array to make the lists never be the same order. 
// Helps enhance a visual aspect.
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }