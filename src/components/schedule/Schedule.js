import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/Sidebar'
import api from '../../api/axios'
import { Spinner } from 'react-bootstrap'

/*
*************************************** NOTE *****************************************
* • walang laman table default.                                                      *
* • pag search lang at walang laman yung filter display lahat from renderTable()     *
* • sa search bar category ay subject code ( subject_code )                          *
* • sa dropdown category ay by section ( section )                                   *
* • clickable yung schedule code. pag na click to may lalabas na new tab or window   *
* • laman ng new window for schedule code ay masterlist ng students enrolled under   *
*   ng schedule code na yon. ( api.) format below                                    *
*   *****************************************************************************    *
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

function Schedule() {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true)
        api.get('offeredSubjects')
        .then(response => {
            setData(response.data);
            console.log(response.data);
            setLoading(false)
        })
        .catch(err => {
            console.log(err.data);
            setLoading(false)
        })
    },[]);

    const renderTable = () => {
        return data.map(user => {
            return(
                <tr key = {user.num}>
                    <td className="text-center">{user.subject_code}</td>
                    <td className="text-center">{user.subject_title}</td>
                    <th className="text-center"><a className="text-success text-middle" href = '#'>{user.sched_code}</a></th>
                    <td className="text-center">{user.section}</td>
                    <td className="text-center">{user.credit_unit_lec + user.credit_unit_lab}</td>
                </tr>
            )
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
                        <div class="card">
                            <div class="card-body">
                                <span className="card-title card text-center p-2"
                                style={{position: "relative", top: "-30px",  border: 
                                "1px black solid",display: 'block',
                                width: '200px'}}>
                                <b className="text-uppercase text-black">SUBJECT PORTAL</b>
                                </span>
                                <div class="input-group rounded">
                                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                                        <span class="input-group-text border-0" id="search-addon">
                                            <i class="fas fa-search"/>
                                        </span>
                                </div>
                                    <select className="form-control mt-4">
                                        <option className="form-control" value="1">One</option>
                                        <option className="form-control" value="2">Two</option>
                                        <option  className="form-control" value="3">Three</option>
                                    </select>
                                    <div className="mt-4">
                                        <button className="form-control btn-bg-dark">
                                            SEARCH
                                         </button>
                                    </div>
                                    
                                    {
                                        (loading) ?
                                        <div className="d-flex justify-content-center mt-4">
                                            <Spinner className="d-flex justify-content-center" animation="border" role="status"/>
                                        </div>
                                        :
                                        <>
                                        <div className="card mt-3 table-holder">
                                        <table className="table my-0 table-striped" id="dataTable">
                                        <thead>
                                            <tr>
                                            <th className="text-center">SUBJECT CODE</th>
                                            <th className="text-center">TITLE</th>
                                            <th className="text-center">SCHEDULE CODE</th>
                                            <th className="text-center">SECTION</th>
                                            <th className="text-center">UNITS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderTable()}
                                        </tbody>
                                        </table>
                                        </div>
                                        </>
                                    }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Schedule
