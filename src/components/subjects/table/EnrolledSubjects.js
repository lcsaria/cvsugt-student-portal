/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import api from '../../../api/axios'

function EnrolledSubjects() {
    const [data, setData] = useState([]);
    const [semdata, setSemdata] = useState();
    const [loading, setLoading] = useState(false);

    let id = localStorage.getItem('student_number');
    useEffect(() => {
        setLoading(true)
        api.get(`enrolledSubject/${id}`)
        .then(response => {
            setData(response.data);
            setSemdata(response.data);
            console.log(response.data);
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setData("");
            setLoading(false)

        })
    }, []);

    const renderTable = () => {
        return data.map(user => {
            return ( 
                <tr key = {user.sched_code}>
                    <td className="text-center">{user.subject_code}</td>
                    <td className="text-center">{user.subject_title}</td>
                    <th className="text-center"><a className="text-success text-middle" href = {`masterlist/?id=${user.sched_code}`} target = "_blank" rel="noreferrer">{user.sched_code}</a></th>
                    <td className="text-center">{user.credit_unit_lec}</td>
                    <td className="text-center">{user.credit_unit_lab}</td> 
                </tr>
            )
        })
    }
    
    return (
    <div>
        <div className="d-flex justify-content-between mb-3 text-dark">
            <span>
                <b className="mr-3">School Year:</b>
                {semdata ? `${semdata[0].sy1} - ${semdata[0].sy2}` : ''}
            </span>
            <span>
                <b className="mr-3">Semester:</b>
                {semdata ? semdata[0].semester : ''}
            </span>
        </div>
        {
            (!data) ? 
            <div className="text-center">
                No enrolled subjects
            </div>
            :
            <div className="table-responsive table-striped table-hover">
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
                            <th scope="col" className="text-center">SUBJECT CODE</th>
                            <th scope="col" className="text-center">TITLE</th>
                            <th scope="col" className="text-center">SCHEDULE CODE</th>
                            <th scope="col" className="text-center">LECTURE UNITS</th>
                            <th scope="col" className="text-center">LAB UNITS</th>
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
