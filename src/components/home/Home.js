import React, { useState } from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { useHistory } from 'react-router'
//import api from '../../api/axios'
import axios from '../../api/api'

import logo from '../../assets/school-logo-small.png'

function Home() {
    
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const sumbit = async (e) => {
        e.preventDefault();
        setLoading(true)
        let uname = document.getElementById('inputStudentNumber').value;
        let pass = document.getElementById('inputPassword').value;
        await axios.post('login',{
            username : uname,
            password : pass
        })
        .then(response => {
            console.log(response);
            //console.log('token : ',response.data.accessToken)
            alert('Welcome')
            localStorage.setItem('student_number',response.data.student_number)
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            localStorage.setItem("isAuthenticated", true)
            history.push("/dashboard")
            setLoading(false)
            
        })
        .catch((err) => {
            console.log(err)
            alert('Incorrect username / password.')
            setLoading(false)
        })
    }

    const register = () => {
        history.push("/register");
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
                                    <p className="text-muted text-center">STUDENT PORTAL</p>
                                    <form>
                                        <div className="mb-3">
                                            <input id="inputStudentNumber" type="text" placeholder="Username" required="" autoFocus="" className="form-control  border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password" required="" className="form-control  border-0 shadow-sm px-4 text-dark" />
                                        </div>
                                        <div className="d-grid gap-2 mt-2">
                                        <button 
                                            onClick={sumbit} 
                                            className="btn btn-success btn-block text-uppercase mb-2  shadow-sm"
                                            disabled={loading}
                                        >
                                            {
                                                loading ? (
                                                    <div>
                                                      <span>
                                                        <ReactBootstrap.Spinner animation="border" className="spinner-border spinner-border-sm mr-2"/>
                                                      </span>
                                                      <span>Login</span>
                                                    </div>
                                                    ) : (
                                                    <span>Login</span>
                                                    )
                                            }
                                        </button>

                                        <button onClick={register} className="btn btn-dark btn-block text-uppercase mb-2  shadow-sm">Register</button>
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

export default Home
