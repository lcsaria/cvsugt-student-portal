import React, { useState } from 'react'
import Footer from '../templates/Footer'
import Navbar from '../templates/Navbar'
import Sidebar from '../templates/Sidebar'
import SubjectModal from './modals/SubjectModal';

function Dashboard() {
  const [show, setShow] = useState(false);

    const onEnrolledSubjects = () => {
      console.log("SUBJECTS")
      setShow(true)
    }

    const handleClose = () => {
      setShow(false)
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
              
            <div className="card mb-1 d-block">
              <div className="card-body">
                  <span className="card-title card text-center p-2"
                  style={{position: "relative", top: "-30px", backgroundColor: "white", border: 
                  "1px black solid",display: 'block',
                  width: '200px'}}>
                    <b className="text-uppercase text-dark">Basic Information</b>
                  </span>
                  <h6 className="card-subtitle mb-2 text-weight-bold text-muted">SURNAME, FIRST NAME (MIDDLE NAME)</h6>
                  <p className="card-text" style={{fontSize: "12px"}}>
                  201515782 <br/>
                  MALE<br/>
                  BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
                  </p>

              </div>
              </div>

              <div className="card mt-3">
                <div className="card-body">
                    <span className="card-title card text-center p-2"
                    style={{position: "relative", top: "-30px", backgroundColor: "white", border: 
                    "1px black solid",display: 'block',
                    width: '200px'}}>
                      <b className="text-uppercase text-dark">Dashboard</b>
                    </span>
                    <button type="button" className="btn btn-success btn-lg btn-block" onClick={onEnrolledSubjects}>
                      <i className="fas fa-book mr-3"/>
                      Enrolled Subjects
                    </button>
                    <button type="button" className="btn btn-success btn-lg btn-block">
                      <i className="fas fa-newspaper mr-3"/>
                      <span>Latest Grades</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
          <SubjectModal show={show} close={handleClose}/>
          <Footer/>
        </div>
      </div>
    )
}

export default Dashboard
