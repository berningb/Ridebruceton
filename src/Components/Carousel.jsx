import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../Styles/Carousel.scss';

const MyCarousel = ({height, data, showCover}) => {

    const carouselItems = []

    data.forEach((element, i) => {

        carouselItems.push(
        <Carousel.Item key={i}>
            <div className='image'
            style={{
                backgroundImage: "url(" + element.image + ")",
                height: height,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%'
            }}
            />
            <div className={showCover ? 'inner-caption show' : 'hide'}></div>
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
