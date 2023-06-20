import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faList, faHome, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./App.css"

const NavBarManu = () => {

  // function gotoResturantList() {
  //   navigate('/list');
  // }
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Resto</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link>
              <Link to="/home">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/list">
                <FontAwesomeIcon icon={faList} /> List
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/create">
                <FontAwesomeIcon icon={faPlus} /> Create
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/search">
                <FontAwesomeIcon icon={faSearch} /> Search{' '}
              </Link>
            </Nav.Link>
            {localStorage.getItem('login') ? (
              <Nav.Link href="#link">
                <Link to="/logout">
                  <FontAwesomeIcon icon={faUser} /> Logout{' '}
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link href="#link">
                <Link to="/">
                  <FontAwesomeIcon icon={faUser} color='red' /> Login{' '}
                </Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarManu;
