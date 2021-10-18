import React, { useEffect, useState } from 'react'
import Footer from '../templates/Footer'
import Navbar from '../templates/Navbar'
import Sidebar from '../templates/Sidebar'
import GradeModal from './modals/GradeModal';
import SubjectModal from './modals/SubjectModal';
import api from '../../api/axios';

function Dashboard() {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState("");
  const [info, setInfo] = useState('');

  useEffect(() => {
    let id = localStorage.getItem('student_number');
    console.log(id);
    api.get(`userInfo/${id}`)
    .then((response) => {
      setInfo(response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err.data);
    })

  },[]);
    const onEnrolledSubjects = () => {
      setShow(true)
      setModal("subjects")
    }

    const onMyGrades = () => {
      setShow(true)
      setModal("grades")
    }

    const handleClose = () => {
      setModal("")
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
              { /* BASIC INFORMATION */ }
            <div className="card mb-4 d-block">
              <div className="card-body">
                <span className="card-title card text-center p-2"
                style={{position: "relative", top: "-30px",  border: 
                "1px black solid",display: 'block',
                width: '200px'}}>
                  <b className="text-uppercase text-black">Basic Information</b>
                </span>
                <div className="row">
                  <div className = "col-md-4" >
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black"> <i class="fas fa-user-graduate mr-3"/>Name:  </h6>
                      <b>{info 
                      ? 
                      `${info[0].last_name}, 
                      ${info[0].first_name} 
                      ${info[0].suffix} 
                      (${info[0].middle_name !== "" ? info[0].middle_name : "N/A"})`
                      :
                      ''
                      }</b>
                    </h6>
                  </div>
                  <div className = "col-md-4" >
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black"> <i class="fas fa-id-card mr-3"/>Student Number:  </h6> 
                      <b>{info ? info[0].student_number : ''}</b>
                    </h6>
                    </div>
                    <div className = "col-md-4" >
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black"> <i class="fas fa-venus-mars mr-3"/>Gender:  </h6>
                      <b>{info ? info[0].gender : ''}</b>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            { /* Course and Major */ }
            <div className="card mb-4 d-block">
              <div className="card-body">
                <span className="card-title card text-center p-2"
                  style={{position: "relative", top: "-30px",  border: 
                  "1px black solid",display: 'block',
                  width: '200px'}}>
                    <b className="text-uppercase text-black">Education</b>
                </span>
                <div className="row">
                  <div className = "col-md-8" >
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black"> <i class="fas fa-graduation-cap mr-3"/>Course:  </h6>
                    <b>{info ? info[0].course : ''}</b>
                  </h6>
                  </div>
                  
                  <div className = "col-md-4" >
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black"> <i class="fas fa-file-alt mr-3"/>Major:  </h6>
                    <b>Not Applicable</b>
                  </h6>
                  </div>
                </div>
              </div>
            </div>

            { /* Contact Information */ }
            <div className="card mb-4 d-block">
              <div className="card-body">
                <span className="card-title card text-center p-2"
                  style={{position: "relative", top: "-30px",  border: 
                  "1px black solid",display: 'block',
                  width: '200px'}}>
                    <b className="text-uppercase text-black">Contact Details</b>
                </span>
                <div className="row">
                  <div className = "col-12 mb-3" >
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black"> 
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black"> <i class="fas fa-home mr-3"/>Address:  </h6>
                  <b>{info 
                      ? 
                      `${info[0].add_no}, 
                      ${info[0].add_brgy},
                      ${info[0].add_town}, 
                      ${info[0].add_province}`
                      :
                      ''
                      }</b>
                  </h6>
                  </div>
                  <div className = "col-12 mb-3" >
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black"> <i class="fas fa-envelope mr-3"/>Email Address:  </h6>
                  <b>{info ? info[0].email : ''}</b>
                  </h6>
                  </div>
                  <div className = "col-12" >
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black"> <i class="fas fa-envelope mr-3"/>CvSU Email Address and default password :  </h6>
                  <b>{`${info[0].cvsu_email ? info[0].cvsu_email : 'usernamahaba.testing@cvsu.edu.ph'} | ${info[0].cvsu_email_pass ? info[0].cvsu_email_pass : 'Not Available'}` }</b> { /* wala pang data ang info[0].cvsu_email */ }
                  </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-body ">
                  <span className="card-title card text-center p-2 "
                  style={{position: "relative", top: "-30px",  border: 
                  "1px black solid",display: 'block',
                  width: '200px'}}>
                    <b className="text-uppercase text-black">Quick Access</b>
                  </span>
                  <div className = "row">
                    <div className = "col-md-6 mb-2">
                      <button type="button" className="btn btn-bg-dark border-dark btn-lg btn-block text-black" onClick={onEnrolledSubjects}>
                        <i className="fas fa-book mr-3"/>
                        Enrolled Subjects
                      </button>
                    </div>
                    <div className = "col-md-6 mb-2">
                      <button type="button" className="btn btn-bg-dark border-dark btn-lg btn-block text-black" onClick={onMyGrades}>
                        <i className="fas fa-newspaper mr-3"/>
                        <span>Latest Grades</span>
                      </button>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          {
            modal==="subjects" && (<SubjectModal show={show} close={handleClose}/>)
          }
          {
             modal==="grades" && (<GradeModal show={show} close={handleClose}/>)
          }
          <Footer/>
        </div>
      </div>
    )
}

export default Dashboard
