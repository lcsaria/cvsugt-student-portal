import React, { useState } from 'react'

function EnrolledSubjects() {
    const [isData, setIsData] = useState(true);

    
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
            (!isData) ? 
            <div className="text-center">
                No enrolled subjects
            </div>
            :
            <div class="table-responsive table-striped table-hover">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Course Code</th>
                        <th scope="col">Course Description</th>
                        <th scope="col">Units</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">DCIT 21</th>
                        <td>Computer Programming I</td>
                        <td>3</td>
                        <td>NOT GRADED</td>
                    </tr>
                    <tr>
                        <th scope="row">DCIT 21</th>
                        <td>Computer Programming I</td>
                        <td>3</td>
                        <td>NOT GRADED</td>
                    </tr>
                    <tr>
                        <th scope="row">DCIT 21</th>
                        <td>Computer Programming I</td>
                        <td>3</td>
                        <td>NOT GRADED</td>
                    </tr>
                </tbody>
            </table>
        </div>
        }
    </div>
    )
}

export default EnrolledSubjects
