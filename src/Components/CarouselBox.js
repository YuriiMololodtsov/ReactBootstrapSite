import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImg from '../assets/1.jpg';
import secondImg from '../assets/2.jpg';
import thirdImg from '../assets/3.jpg';

export default function CaruselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={firstImg} alt="1" />
        <Carousel.Caption>
          <h3>Заголовок1</h3>
          <p>Описание</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={secondImg} alt="1" />
        <Carousel.Caption>
          <h3>Заголовок2</h3>
          <p>Описание</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={thirdImg} alt="1" />
        <Carousel.Caption>
          <h3>Заголовок3</h3>
          <p>Описание</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
