import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/Sidebar'
import api from '../../api/axios'
import { Button, Tabs, Tab, Form} from 'react-bootstrap'

function Settings() {
    const [data, setData] = useState();

    useEffect(() => {
        let id = localStorage.getItem('student_number');
        api.get(`getusername/${id}`)
        .then((response) => {
          setData(response.data);
          console.log('data : ', response.data);
        })
        .catch((err) => {
          console.log('err : ',err);
        })
    
      },[]);

    const changepass = (e) => {
        // change password
    }

    const changeusername = (e) => {
        // change username 
    }

    return (
        <div id="wrapper">
            <Sidebar/>
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
                <Navbar/>
                     <div className="container-fluid">
                         <div className="d-sm-flex justify-content-between align-items-center mb-4" />
                     </div>
                    <div className="container">
                        <div className="card mb-3">
                            <div className="card-body">
                                <span className="card-title card text-center p-2"
                                style={{position: "relative", top: "-30px",  border: 
                                "1px black solid",display: 'block',
                                width: '200px'}}>
                                <b className="text-uppercase text-black">Account Settings</b>
                                </span>
                                { /* content sa loob ng card */ }  

                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                                    <Tab eventKey="home" title="Change Username">
                                        <Form onSubmit={e => changepass(e)}>
                                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                                <Form.Label className="text-black">Current Username : <b>{data ? data : ''}</b></Form.Label>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-black">New Username</Form.Label>
                                                <Form.Control required type="text" placeholder="Enter email" />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="text-black">Password</Form.Label>
                                                <Form.Control type="password" placeholder="Password" />
                                            </Form.Group>
                                            <Button variant="success" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Tab>
                                    <Tab eventKey="profile" title="Change Password">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-black">Old Password</Form.Label>
                                            <Form.Control required type="password" placeholder="Old Password" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className="text-black">New Password</Form.Label>
                                            <Form.Control required type="password" placeholder="New Password" />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className="text-black">Confirm Password</Form.Label>
                                            <Form.Control required type="password" placeholder="Confirm Password" />
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                    </Tab>
                                </Tabs>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Settings
