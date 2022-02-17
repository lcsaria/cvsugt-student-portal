/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import axios from '../../../api/api'

function EnrolledSubjects() {
    const [data, setData] = useState([]);
    const [semdata, setSemdata] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios.get('enrolledSubject')
        .then(response => {
            setData(response.data);
            console.log(response.data);
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setData("");
            setLoading(false)

        })
        axios.get('sem')
        .then(response => {
            setSemdata(response.data);
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const renderTable = () => {
        return data.map(user => {
            return ( 
                <tr key = {user.sched_code}>
                    <td data-label="Subject code : ">{user.subject_code}</td>
                    <td data-label="Title : ">{user.subject_title}</td>
                    <td data-label="Schedule code : "><a className="text-success text-middle" href = {`masterlist/?id=${user.sched_code}`} target = "_blank" rel="noreferrer"><b>{user.sched_code}</b></a></td>
                    <td data-label="Lec Units : ">{user.credit_unit_lec}</td>
                    <td data-label="Lab Units : ">{user.credit_unit_lab}</td> 
                </tr>
            )
        })
    }
    
    return (
    <div>
        <div className="row mb-4">
            <div className="col-md-6">
                <span>
                    <b className="mr-2">School Year:</b>
                    {semdata ? `${semdata[0].sy1} - ${semdata[0].sy2}` : '-'}
                </span>
            </div>
            <div className="col-md-6">
                <span>
                    <b className="mr-2">Semester:</b>
                    {semdata ? semdata[0].semester : '-'}
                </span>
            </div>
        </div>
        {
            (!data) ? 
            <div className="text-center">
                No enrolled subjects
            </div>
            :
            <div className="table-holder">
            <table className="table">
                {
                    (loading) ?
                    <div className="d-flex justify-content-center">
                        <Spinner className="d-flex justify-content-center" animation="border" role="status"/>
                    </div>
                    :
                <>
                    <thead>
                        <tr>
                            <th>SUBJECT CODE</th>
                            <th>TITLE</th>
                            <th>SCHEDULE CODE</th>
                            <th>LEC UNITS</th>
                            <th>LAB UNITS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </>
                }
            </table>
        </div>
        }
    </div>
    )
}

export default EnrolledSubjects
