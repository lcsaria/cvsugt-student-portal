import React from 'react'

function EnrolledSubjects() {
    const sem = [
        { label: "1ST SEM 2021-2022", value: "2021-1" },
        { label: "2ND SEM 2021-2022", value: "2021-2" }
    ]

    const grade = [
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"},
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"},
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"},
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"},
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"}
    ]

    const average = "1.00";

    const renderTable = () => {
       return (
        grade.map(grade => {
            return (
             <tr key = {grade.scode}>
                <td>{grade.scode}</td>    
                <td>{grade.desc}</td>
                <td>{grade.grade}</td>
                <td>{grade.completion}</td>
                <td>{grade.unit}</td>
                <td>{grade.credit_unit}</td>
             </tr>
            )
         })
       )
    }
    return (
    <div>
        <div>
        <div className="dropdown">
              <select className="form-control dropdown-toggle" id="grade_type"> 
                {sem.map((gender) => <option key={gender.value} value={gender.value}>{gender.label}</option>)}
              </select>
              </div>
        </div>
        <div className="card mt-3">
        <table className="table my-0 table-striped table-hover" id="dataTable">
              <thead>
                <tr>
                  <th>Subject Code</th>
                  <th>Description</th>
                  <th>Grade</th>
                  <th>Completion</th>
                  <th>Unit</th>
                  <th>Credit Unit</th>
                </tr>
              </thead>
              <tbody>
                {renderTable()}
              </tbody>
            </table>
            <div className="mt-2 mr-2 mb-2 px-3 text-right">
                Average: {average}
            </div>
        </div>
    </div>
    )
}

export default EnrolledSubjects
