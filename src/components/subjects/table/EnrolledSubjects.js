import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import api from '../../../api/axios'

function EnrolledSubjects() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    let id = localStorage.getItem('student_number');
    console.log({student_number: id});
    useEffect(() => {
        setLoading(true)
        api.get(`enrolledSubject/${id}`)
        .then(response => {
            setData(response.data);
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
                <tr key = {user.num}>
                <td>{user.subject_code}</td>
                <td>{user.subject_title}</td>
                <td>{user.credit_unit_lec}</td>
                <td>{user.credit_unit_lab}</td>
                </tr>
            )
        })
    }
    
    return (
    <div>
        <div className="d-flex justify-content-between mb-3 text-dark">
            <span>
                <b className="mr-3">School Year:</b>
                2021-2022
            </span>
            <span>
                <b className="mr-3">Semester:</b>
                SECOND
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
                            <th scope="col">SUBJECT CODE</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">LECTURE UNITS</th>
                            <th scope="col">LAB UNITS</th>
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
