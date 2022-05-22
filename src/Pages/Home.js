import React, { Component } from 'react';
import CaruselBox from '../Components/CarouselBox';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <CaruselBox />
      <Container>
        <h2 className="text-center m-4">Out team</h2>
        <CardGroup>
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1154198/pexels-photo-1154198.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Street Art</Card.Title>
              <Card.Text>2020</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1227497/pexels-photo-1227497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Street Art</Card.Title>
              <Card.Text>2021</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
          <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1152188/pexels-photo-1152188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            <Card.Body>
              <Card.Title>Street Art</Card.Title>
              <Card.Text>2022</Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
}
