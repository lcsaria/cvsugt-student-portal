import React, { useEffect, useState } from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/Sidebar'
import api from '../../api/axios'
import { Spinner } from 'react-bootstrap'
import { render } from '@testing-library/react'
/*
*************************************** NOTE *****************************************
*                                                                                    *
*   STUDENT MASTERLIST                                                               *
*                                                                                    *
*   Schedule Code: 0909090                                                           *
*   Subject Code: test101                                                            *
*   Subject Title: test subject                                                      *
*   Lecture Units: 3                                                                 *
*   Lab Units: 0                                                                     *
*   Section: BSIT 1-1                                                                *
*   No | Name | Student Number | Course                                              *
*                                                                                    *
**************************************************************************************
*/

function Masterlist() {
    const [data, setData] = useState([])
    const [ddata, setDdata] = useState()
    const [id, setId] = useState([])

    useEffect( () => {
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);
        let tempid = urlParams.get('id')
        setId(tempid)
        console.log('tempid : ', tempid);
        api.get(`studentsbycode/${tempid}`)
        .then(response => {
            setData(response.data)
            setDdata(response.data)
            console.log(response.data);
        })
        .catch(err => {
            console.log(err.data);
            window.location.replace('/dashboard')
        })
    },[])

    const renderTable = () => {
        let count = 1;
        return data.map(user => {
            return ( 
                <tr key = {user.num}>
                <td className="text-center">{count++}</td>
                <td className="text-center">{user.name}</td>
                <td className="text-center">{user.student_number}</td>
                <td className="text-center">{user.course}</td>
                </tr>
            )
        })
    }

    return (
        <div id="wrapper">
            <div className="d-flex flex-column" id="content-wrapper">
                <div id="content">
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
                                <b className="text-uppercase text-black">Student Masterlist</b>
                                </span>
                                <span className="card-subtitle mb-2 text-weight-bold text-black">
                                <h6>Schedule Code: <b>{id}</b> </h6>
                                <h6>Subject Code: <b>{ddata ? ddata[0].subject_code : ''}</b> </h6>
                                <h6>Subject Title: <b>{ddata ? ddata[0].subject_title : ''}</b> </h6>
                                <h6>Lecture Units: <b>{ddata ? ddata[0].credit_unit_lec : ''}</b></h6>
                                <h6>Lab Units: <b>{ddata ? ddata[0].credit_unit_lab : ''}</b> </h6>
                                <h6>Section: <b>{ddata ? ddata[0].section : ''}</b> </h6>
                                </span>
                                { /* dito table for list of students */ }
                                <div className="card mt-3 table-holder">
                                        <table className="table my-0 table-striped" id="dataTable">
                                        <thead>
                                            <tr>
                                            <th className="text-center">No.</th>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Student Number</th>
                                            <th className="text-center">Course</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderTable()}
                                        </tbody>
                                        </table>
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

export default Masterlist