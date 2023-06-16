import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">React Bootstrap Navigation</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/customInteriors/#residence">Residence</Nav.Link>
        <Nav.Link href="http://www.kitekitchens.com/">ModularKitchens</Nav.Link>
        <Nav.Link href="/customInteriors">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
