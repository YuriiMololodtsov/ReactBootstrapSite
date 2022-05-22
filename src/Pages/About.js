// import { Tab } from 'bootstrap';
import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import firstImg from '../assets/1.jpg';

export default function About() {
  return (
    <Container>
      <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column mt-2">
              <Nav.Item>
                <Nav.Link eventKey="first">Design</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Team</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Programming</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fours">Framworks</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Libraries</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="first">
                <img className="img-fluid" src={firstImg} alt="pic" />
                <p>Описание</p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <img className="img-fluid" src={firstImg} alt="pic2" />
                <p>Описание</p>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <img className="img-fluid" src={firstImg} alt="pic3" />
                <p>Описание</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fours">
                <img className="img-fluid" src={firstImg} alt="pic4" />
                <p>Описание</p>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <img className="img-fluid" src={firstImg} alt="pic5" />
                <p>Описание</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}
