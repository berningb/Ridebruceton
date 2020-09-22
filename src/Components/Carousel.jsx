import React from 'react';
import { Carousel } from 'react-bootstrap';
import motor from '../Assets/cycle1.jpg'
import motor3 from '../Assets/cycle3.jpg'
import motor4 from '../Assets/cycle4.jpg'
import '../Styles/Carousel.scss';


const MyCarousel = ({height}) => {

    const imageDetails = [
        {image: motor, title: 'Title 1', text: 'Some text'},
        {image: motor4, title: 'Harley Davidson', text: 'Some text'},
        {image: motor3, title: 'Title 3', text: 'Some text'},
    ]


    const carouselItems = []

    imageDetails.forEach((element, i) => {
        carouselItems.push(
        <Carousel.Item key={i}>
            <img
            className=""
            src={element.image}
            height={height}
            alt="First slide"
            />
            <div className='inner-caption'></div>
            <Carousel.Caption>
                <h3>{element.title}</h3>
                <p>{element.text}</p>
            </Carousel.Caption>
        </Carousel.Item>)
    })

    return (
        <div className='aboutsection'>
            <Carousel style={{height: height, margin: 'auto'}}>
                {carouselItems}
            </Carousel>
        </div>)
};


export default MyCarousel
