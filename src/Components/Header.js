import { Button } from 'react-bootstrap';
import React, { element } from 'react';
import { Container, Form, Nav, Navbar, FormControl } from 'react-bootstrap';
import logo from './logo192.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';

export default function Header() {
  return (
    <>
      <Router>
        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              {/* <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{' '} */}
              StreetArt
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About us
                </Nav.Link>
                <Nav.Link as={Link} to="/contacts">
                  Contacts
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  Blog
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="me-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="contacts" element={<Contacts />} />
          <Route exact path="blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}
