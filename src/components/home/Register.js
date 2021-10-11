import React from 'react'
import { useHistory } from 'react-router'
import api from '../../api/axios';

import logo from '../../assets/school-logo-small.png'

function Register() {
    const history = useHistory();

    const sumbit = () => {
        let studentnum = document.getElementById('inputStudentNumber').value;
        let bday = document.getElementById('inputbday').value;
        let username = document.getElementById('inputUsername').value;
        let pass = document.getElementById('inputPassword').value;
        let pass2 = document.getElementById('inputPassword2').value;
        
        if (pass != pass2) return alert('password mismatch.')
        api.post('register',{
            username : username,
            password: pass,
            student_number: studentnum,
            birthday: bday
        })
        .then(response => {
            alert('success!')
            history.push("/login");
        })
        .catch(err => {
            alert('incorrect credentials.')
        })
    }

    const register = () => {
        history.push("/login");
    }
    return (
        <div className="maincontainer">
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <img className="center" src={logo} alt="logo"/>
                                    <h4 className="display-5 text-center">CvSU - General Trias</h4>
                                    <p className="text-muted text-center">ACCOUNT REGISTRATION</p>
                                    <form onSubmit={sumbit}>
                                        <div className="mb-3">
                                            <input id="inputStudentNumber" type="number" placeholder="Student Number" required autoFocus="" className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputbday" type="date" placeholder="Date" required autoFocus="" className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputUsername" type="text" placeholder="Username" required className="form-control  border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required className="form-control  border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword2" type="password" placeholder="Confirm Password" required className="form-control  border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <button type="submit" className="btn btn-success btn-block text-uppercase mb-2  shadow-sm">Register</button>
                                        <button onClick={register} className="btn btn-dark btn-block text-uppercase mb-2  shadow-sm">Back to Login</button>
                                        </div>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
            </div>
        </div>
      </div>
    )
}

export default Register
