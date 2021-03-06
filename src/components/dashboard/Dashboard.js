import React, { useEffect, useState } from 'react'
import Footer from '../templates/Footer'
import Navbar from '../templates/Navbar'
import Sidebar from '../templates/sidebar'
import GradeModal from './modals/GradeModal';
import SubjectModal from './modals/SubjectModal';
import axios from '../../api/api'

function Dashboard() {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState("");
  const [info, setInfo] = useState('');

  useEffect(() => {
    let id = localStorage.getItem('student_number');
    console.log('ror : ', localStorage.getItem('token'));
    console.log(id);
    const config = {
      headers: {
        Authorization : 'Bearer ' + localStorage.getItem('token')
      }
    }
    axios.get(`userInfo/${id}`, config)
    .then((response) => {
      setInfo(response.data);
      console.log(response.data);
    })
    .catch((err) => {
      console.log('err : ',err);
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
          <Sidebar />
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <Navbar/>
            <div className="container-fluid">
              <div className="d-sm-flex justify-content-between align-items-center mb-4" />
            </div>
            <div className="container">
              { /* BASIC INFORMATION */ }
            <div className="card mb-4 d-block shadow">
              <div className="card-body">
                <span className="card-title card text-center p-2"
                style={{position: "relative", top: "-30px",  border: 
                "1px black solid",display: 'block',
                width: '200px'}}>
                  <b className="text-uppercase text-black">Basic Information</b>
                </span>
                <div className="row">
                  <div className = "col-lg-4 mb-3" >
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                    <h6 className="card-subtitle mb-1 text-weight-bold text-black"> <i class="fas fa-user-graduate mr-3"/>  Name: <b>{info 
                      ? 
                      `${info[0].last_name}, 
                      ${info[0].first_name} 
                      ${info[0].suffix} 
                      (${info[0].middle_name !== "" ? info[0].middle_name : "N/A"})`
                      :
                      ''
                      }</b> </h6>
                    </h6>
                  </div>
                  <div className = "col-lg-4 mb-3" >
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                    <h6 className="card-subtitle mb-1 text-weight-bold text-black"> <i class="fas fa-id-card mr-3"/>Student Number:  <b>{info ? info[0].student_number : ''}</b></h6> 
                    </h6>
                    </div>
                    <div className = "col-md-4" >
                    <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                    <h6 className="card-subtitle mb-1 text-weight-bold text-black"> <i class="fas fa-venus-mars mr-3"/>Gender: <b>{info ? info[0].gender : ''}</b></h6>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            { /* Course and Major */ }
            <div className="card mb-4 d-block shadow">
              <div className="card-body">
                <span className="card-title card text-center p-2"
                  style={{position: "relative", top: "-30px",  border: 
                  "1px black solid",display: 'block',
                  width: '200px'}}>
                    <b className="text-uppercase text-black">Education</b>
                </span>
                <div className="row">
                  <div className = "col-md-8 mb-3" >
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                  <h6 className="card-subtitle mb-1 text-weight-bold text-black"> <i class="fas fa-graduation-cap mr-3"/>Course:  </h6>
                    <b>{info ? info[0].course_name : ''}</b>
                  </h6>
                  </div>
                  
                  <div className = "col-md-4" >
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                  <h6 className="card-subtitle mb-1 text-weight-bold text-black"> <i class="fas fa-file-alt mr-3"/>Major:  </h6>
                  <b>{info ? info[0].course_major !== "" ? info[0].course_major : 'Not Applicable' : ''}</b>
                  </h6>
                  </div>
                </div>
              </div>
            </div>

            { /* Contact Information */ }
            <div className="card mb-4 d-block shadow">
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
                  <h6 className="card-subtitle mb-1 text-weight-bold text-black"> <i class="fas fa-home mr-3"/>Address:  </h6>
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
                  <h6 className="card-subtitle mb-1 text-weight-bold text-black"> <i class="fas fa-envelope mr-3"/>Email Address:  </h6>
                  <b>{info ? info[0].email : ''}</b>
                  </h6>
                  </div>
                  <div className = "col-12" >
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                  <h6 className="card-subtitle mb-1 text-weight-bold text-black"> <i class="fas fa-envelope mr-3"/>CvSU Email Address and default password :  </h6>
                  <b>{info ? info[0].email : 'Not Available'} | default-password</b>{ /* wala pang data ang info[0].cvsu_email */ }
                  </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-4 shadow">
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
                        <i className="fas fa-book-open mr-3"/>
                        Enrolled Subjects
                      </button>
                    </div>
                    <div className = "col-md-6 mb-2">
                      <button type="button" className="btn btn-bg-dark border-dark btn-lg btn-block text-black" onClick={onMyGrades}>
                        <i className="fas fa-table mr-3"/>
                        <span>List of Grades</span>
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
