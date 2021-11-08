import React from 'react'
import Footer from '../templates/Footer'
import Navbar from '../templates/Navbar'
import Sidebar from '../templates/sidebar'
import EnrolledSubjects from './table/EnrolledSubjects'

function Subjects() {
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
      <div className="card mt-1 mb-4">
                <div className="card-body">
                    <span className="card-title card text-center p-2"
                    style={{position: "relative", top: "-30px",  border: 
                    "1px black solid",display: 'block',
                    width: '200px'}}>
                      <b className="text-uppercase text-black">ENROLLED SUBJECTS</b>
                    </span>
                      <div className="p-3">
                      <EnrolledSubjects/>
                      </div>
                  </div>
                </div>
      </div>
    </div>
    <Footer/>
  </div>
</div>
    )
}

export default Subjects
