import React from 'react'
import { Carousel } from 'react-bootstrap'

import firstImg from '../assets/slider-images/01.jpg'
import secondImg from '../assets/slider-images/02.jpg'
import thirdImg from '../assets/slider-images/03.jpg'
import fourthImg from '../assets/slider-images/04.jpg'

export default function CarouselBox() {
   return (
      <Carousel>
         <Carousel.Item style={{ maxHeight: '93.6vh' }}>
            <img src={firstImg}
               className="d-block w-100" alt="CarouselImage" />
            <Carousel.Caption>
               <h3>Slider Title</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{ maxHeight: '93.6vh' }}>
            <img src={secondImg}
               className="d-block w-100" alt="CarouselImage" />
            <Carousel.Caption>
               <h3>Slider Title</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{ maxHeight: '93.6vh' }}>
            <img src={thirdImg}
               className="d-block w-100" alt="CarouselImage" />
            <Carousel.Caption>
               <h3>Slider Title</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item style={{ maxHeight: '93.6vh' }}>
            <img src={fourthImg}
               className="d-block w-100" alt="CarouselImage" />
            <Carousel.Caption>
               <h3>Slider Title</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   )
}