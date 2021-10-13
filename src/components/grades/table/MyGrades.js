import React, {useState, useEffect} from 'react'
import api from '../../../api/axios'

function EnrolledSubjects() {
  const [data, setData] = useState([]);
  let id = localStorage.getItem('student_number');

  useEffect(() => {
    const tae = async () => {
      await api.get(`semforgrades/${id}`)
      .then(result => {
        setData(result.data);
        console.log(result.data);
      })
      .catch(err => {
        console.log(err);
      })
    }
    tae()
  }, []);

    const sem = data

    const grade = [
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"},
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"},
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"},
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"},
        { scode: "DCIT 21", desc: "COMPUTER PROGRAMMING 1", grade: "1.00", completion: "-", unit: "3.00", credit_unit: "3.00"}
    ]

    const average = "1.00";

    //display grade
    const displayGrade = (e) => {
      console.log('aa');
    }

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
        <div className="dropdown input-group">
              <select className="form-control form-dropdown dropdown-toggle" id="grade_type"> 
              
                {sem.map((gender) => <option key={gender.num} onChange={displayGrade()} value={{semester : gender.semester, schoolyear: gender.schoolyear}}>{gender.semester + " | " + gender.schoolyear}</option>)}
              </select>
              </div>
        </div>
        <div className="card mt-3 table-holder">
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
