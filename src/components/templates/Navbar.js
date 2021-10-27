/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect}from 'react'
import { useHistory } from 'react-router-dom';
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
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

  },[])

  const logOut = () => {
    alert("Thank you!");
    localStorage.clear();
    history.push("/login");
  }
  
    return (

      /* NEED TO FIXED */
      <Navbar bg="white" expand="lg" sticky="top"> 
        <Container fluid>
        <Navbar.Brand href="/dashboard" className="d-block d-sm-none">
          <img
            src={logomini}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
        />
        </Navbar.Brand>
        <Navbar.Brand href="/dashboard" className="d-none d-sm-block d-lg-none">
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
              <Nav.Link className="d-lg-none" href="/dashboard"><i className="fas fa-home mr-3"/>Home</Nav.Link>
              <Nav.Link className="d-lg-none" href="/schedule"><i class="fas fa-calendar mr-3"/>Subject Portal</Nav.Link>
              <Nav.Link className="d-lg-none" href="/subjects"><i className="fas fa-book mr-3"/>Enrolled Subjects</Nav.Link>
              <Nav.Link className="d-lg-none" href="/grades"><i className="fas fa-newspaper mr-3"/>My Grades</Nav.Link>
              <Nav.Link className="d-lg-none" href="/addsubject"><i className="fas fa-file-signature mr-3"/>Change Subject</Nav.Link>
              <Nav.Link className="d-lg-none" href="/enrollment"><i className="fas fa-file mr-3"/>Online Enrollment</Nav.Link>
              <Nav.Link className="d-lg-none" href="/request"><i className="fas fa-file-download mr-3"/>Request Documents</Nav.Link>
              <NavDropdown title={<div style={{display: "inline-block"}}><i class="fas fa-user-graduate mr-2"/> {name ? name : 'User'}</div> } id="basic-nav-dropdown" clas>
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
