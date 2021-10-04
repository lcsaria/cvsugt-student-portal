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
              
            <div class="card mb-1 d-block">
              <div class="card-body">
                  <span class="card-title card text-center p-2"
                  style={{position: "relative", top: "-30px", backgroundColor: "white", border: 
                  "1px black solid",display: 'block',
                  width: '200px'}}>
                    BASIC INFORMATION
                  </span>
                  <h6 class="card-subtitle mb-2 text-weight-bold text-muted">SURNAME, FIRST NAME (MIDDLE NAME)</h6>
                  <p class="card-text" style={{fontSize: "12px;"}}>
                  201515782 <br/>
                  MALE<br/>
                  BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY
                  </p>

              </div>
              </div>

              <div class="card mt-3">
                <div class="card-body">
                    <span class="card-title card text-center p-2"
                    style={{position: "relative", top: "-30px", backgroundColor: "white", border: 
                    "1px black solid",display: 'block',
                    width: '200px'}}>
                      DASHBOARD
                    </span>
                    <button type="button" class="btn btn-primary btn-lg btn-block" onClick={onEnrolledSubjects}>
                      <i class="fas fa-book mr-3"/>
                      Enrolled Subjects
                    </button>
                    <button type="button" class="btn btn-primary btn-lg btn-block">
                      <i class="fas fa-th-list mr-3"/>
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
