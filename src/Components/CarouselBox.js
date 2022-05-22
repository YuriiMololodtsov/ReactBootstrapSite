import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImg from '../assets/1.jpg';
import secondImg from '../assets/2.jpg';
import thirdImg from '../assets/3.jpg';

export default function CaruselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/845242/pexels-photo-845242.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="1"
        />
        <Carousel.Caption>
          <h3>Street Art City Walks: Montreal</h3>
          <p>
            Street art in Montreal is celebrated. The creativity it brings to
            the multicultural streets has been encouraged by the city for the
            past 60 years.{' '}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1407153/pexels-photo-1407153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="1"
        />
        <Carousel.Caption>
          <h3>Street Art City Walks: Berlin</h3>
          <p>
            Street art in Berlin began with the Berlin Wall. It quickly became a
            place for artists to express their ideas and frustrations and to
            deal with the controversy they faced.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/163811/street-art-shipping-container-freight-highway-163811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="1"
        />
        <Carousel.Caption>
          <h3>Street Art City Walks: Lisbon</h3>
          <p>
            The streets of Lisbon are a blend of traditional and modern,
            derelict and cutting-edge. The artists who claim the walls seem to
            capture this in their work, often bringing together unique mediums
            and techniques.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
