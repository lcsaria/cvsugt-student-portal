import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/sidebar'
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import { Button, Tabs, Tab, Form} from 'react-bootstrap'

function Settings() {
    const history = useHistory();
    const [data, setData] = useState();
    const [cu, setCU] = useState();
    const [cp, setCP] = useState();

    useEffect(() => {
        let id = localStorage.getItem('student_number');
        axios.get(`getusername/${id}`)
        .then((response) => {
          setData(response.data);
          console.log('data : ', response.data);
        })
        .catch((err) => {
          console.log('err : ',err);
        })
    
      },[]);

    const changeusername = (e) => {
        e.preventDefault();
        // axios for change username
        axios.put('changeuser', {
            username : data,
            newusername : cu.username,
            password: cu.password
        })
        .then(response => {
            alert('Success!')
            localStorage.clear();
            history.push("/login");
        })
        .catch(err => {
            if (err.response.status === 409) /* conflict */ return alert('Username Exist!')
            else if (err.response.status === 401)  /* unauthorized */ return alert('Incorrect Password!')
            else if (err.response.status === 500)  /* unauthorized */ return alert('Please try again later.')
            else return alert('Unknown Error!')
        })
    }

    const changepass = (e) => {
        e.preventDefault();
        if (cp.npassword !== cp.cpassword) return alert('New password not match!')
        axios.put('changepass', {
            username : data,
            password: cp.opassword,
            newpassword: cp.npassword
        })
        .then(response => {
            alert('Success!')
            localStorage.clear();
            history.push("/login");
        })
        .catch(err => {
            if (err.response.status === 409) /* conflict */ return alert('Username Exist!')
            else if (err.response.status === 401)  /* unauthorized */ return alert('Incorrect Password!')
            else if (err.response.status === 500)  /* unauthorized */ return alert('Please try again later.')
            else return alert('Unknown Error!')
        })
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
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">

                                { /* Change username*/ }  
                                    
                                    <Tab eventKey="home" title="Change Username">
                                        <Form onSubmit={e => changeusername(e)}>
                                            <Form.Group className="mb-1" controlId="formBasicEmail">
                                                <Form.Label className="text-black">Current Username : <b>{data ? data : ''}</b></Form.Label>
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-black">New Username</Form.Label>
                                                <Form.Control required type="text" placeholder="Enter Username" onChange={e => {setCU(meowstate => ({ ...meowstate, username : e.target.value}))}} />
                                            </Form.Group>

                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label className="text-black">Password</Form.Label>
                                                <Form.Control type="password" placeholder="Enter Password" onChange={e => {setCU(meowstate => ({ ...meowstate, password : e.target.value}))}}/>
                                            </Form.Group>
                                            <Button variant="success" type="submit">
                                                Save Changes
                                            </Button>
                                        </Form>
                                    </Tab>

                                    { /* Change password */ }  

                                    <Tab eventKey="profile" title="Change Password">
                                    <Form onSubmit={e => changepass(e)}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="text-black">Old Password</Form.Label>
                                            <Form.Control required type="password" placeholder="Old Password" onChange={e => {setCP(meowstate => ({ ...meowstate, opassword : e.target.value}))}}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className="text-black">New Password</Form.Label>
                                            <Form.Control required type="password" placeholder="New Password" onChange={e => {setCP(meowstate => ({ ...meowstate, npassword : e.target.value}))}}/>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label className="text-black">Confirm Password</Form.Label>
                                            <Form.Control required type="password" placeholder="Confirm Password" onChange={e => {setCP(meowstate => ({ ...meowstate, cpassword : e.target.value}))}}/>
                                        </Form.Group>
                                        <Button variant="success" type="submit">
                                            Save Changes
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
