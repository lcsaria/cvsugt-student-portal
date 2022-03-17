/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect}from 'react'
import { useHistory } from 'react-router-dom';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
import axios from '../../api/api'
import logo from '../../assets/logo.png';
import logomini from '../../assets/logomini.png';
import Dashboard from '../dashboard/Dashboard';

function Navbars(info) {
  const history = useHistory();

  const logOut = async () => {
    await axios.get('deleterefresh')
    .then(() => {
      alert("Thank you!");
      localStorage.clear();
      history.push("/login");
    })
    .catch((err) => {
      console.log(err.data);
    })
  }
  
    return (
      <Navbar bg="white" expand="lg" sticky="top"> 
        <Container fluid>
        <Navbar.Brand href="/dashboard" className="meowlogo">
          <img
            src={logomini}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        </Navbar.Brand>
        <Navbar.Brand href="/dashboard" className="logomeow d-lg-none">
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <div className = "ms-auto"/>
            <Nav>   
              <Nav.Link className="d-lg-none" href="/dashboard"><i className="fas fa-user-graduate mr-3"/>Student Profile</Nav.Link>
              <Nav.Link className="d-lg-none" href="/subjects"><i className="fas fa-book-open mr-3"/>Enrolled Subjects</Nav.Link>
              <Nav.Link className="d-lg-none" href="/grades"><i className="fas fa-table mr-3"/>List of Grades</Nav.Link>
              <Nav.Link className="d-lg-none" href="/deficiency"><i class="fas fa-exclamation-triangle mr-3"/>Deficiency</Nav.Link>
              <Nav.Link className="d-lg-none" href="/schedule"><i class="fas fa-scroll mr-3"/>Subjects Portal</Nav.Link>
              <Nav.Link className="d-lg-none" href="/enrollment"><i className="fas fa-file mr-3"/>Online Enrollment</Nav.Link>
              <Nav.Link className="d-lg-none" href="/request" target = "_blank" rel="noreferrer"><i className="fas fa-file-download mr-3"/>Request Documents</Nav.Link>
              <NavDropdown title={<div style={{display: "inline-block"}}><i class="fas fa-user-graduate mr-2"/> {localStorage.getItem('name')}</div> } id="basic-nav-dropdown" clas>
                <NavDropdown.Item href="/settings">Account Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Navbars
