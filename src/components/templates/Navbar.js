/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect}from 'react'
import { useHistory } from 'react-router-dom';
import {Nav, Navbar, Container, NavDropdown, img} from 'react-bootstrap';
import api from '../../api/axios';
import logo from '../../assets/logo.png';
import logomini from '../../assets/logomini.png';

function Navbars() {
  const history = useHistory();
  const [name, setName] = useState('');
  useEffect( () => {
    let id = localStorage.getItem('student_number');
    api.get(`userInfo/${id}`)
    .then((response) => {
      console.log(response.data);
      setName(response.data[0].first_name)
    })
    .catch((err) => {
      console.log(err.data);
    })

  })

  const logOut = () => {
    alert("Thank you!");
    localStorage.clear();
    history.push("/login");
  }
  
    return (
      /* NEED TO FIXED */
      <Navbar bg="white" sticky="top"> 
        <Container className="mr-1">
        <Navbar.Brand href="/dashboard">
          <img
            src={logomini}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="ml-5"/>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown title={<div style={{display: "inline-block", marginRight: 15}}> {name ? name : 'User'} <i class="fas fa-user-alt"/></div> } id="basic-nav-dropdown"  className="border border-dark rounded ">
                <NavDropdown.Item href="#action/3.1">Account Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      /*
    <nav
        className="navbar navbar-light navbar-expand bg-white shadow topbar sticky-top"
        style={{ boxShadow: "0px 4px 5px", height: "3rem"}}
      >
        <div className="container-fluid" >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="nav-item ">
                <a
                  className="btn-outline-light"
                  aria-expanded="false"
                  onClick={logOut}
                >
                  <span className="d d-lg-inline mb-4 mr-2 text-gray-600 small">
                  <span className="fa fa-sign-out mr-2" aria-hidden="true"/>
                    Logout
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      */
    )
}
export default Navbars
