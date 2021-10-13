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
              
            <div className="card mb-1 d-block">
              <div className="card-body">
                  <span className="card-title card text-center p-2"
                  style={{position: "relative", top: "-30px",  border: 
                  "1px black solid",display: 'block',
                  width: '200px'}}>
                    <b className="text-uppercase text-black">Basic Information</b>
                  </span>
                  <h6 className="card-subtitle mb-2 text-weight-bold text-black">
                    <i class="fas fa-user-alt mr-4"/>
                    {info 
                    ? 
                    `${info[0].last_name}, 
                     ${info[0].first_name} 
                     ${info[0].suffix} 
                     (${info[0].middle_name !== "" ? info[0].middle_name : "N/A"})`
                     :
                     ''
                    }
                  </h6>
                  <p className="card-text" style={{fontSize: "12px"}}>
                  <i class="fas fa-id-card mr-4"/>{info ? info[0].student_number : ''} <br/>
                  <i class="fas fa-venus-mars mr-4"/>{info ? info[0].gender : ''} <br/>
                  <i class="fas fa-laptop mr-4"/>{info ? info[0].course : ''}
    
                  </p>
              </div>
              </div>

              <div className="card mt-3">
                <div className="card-body ">
                    <span className="card-title card text-center p-2 "
                    style={{position: "relative", top: "-30px",  border: 
                    "1px black solid",display: 'block',
                    width: '200px'}}>
                      <b className="text-uppercase text-black">Dashboard</b>
                    </span>
                    <button type="button" className="btn btn-bg-dark border-dark btn-lg btn-block text-black" onClick={onEnrolledSubjects}>
                      <i className="fas fa-book mr-3"/>
                      Enrolled Subjects
                    </button>
                    <button type="button" className="btn btn-bg-dark border-dark btn-lg btn-block text-black" onClick={onMyGrades}>
                      <i className="fas fa-newspaper mr-3"/>
                      <span>Latest Grades</span>
                    </button>
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
