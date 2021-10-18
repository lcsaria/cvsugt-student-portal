import React, {useState, useEffect} from 'react'
import api from '../../../api/axios'

function EnrolledSubjects() {
  let id = localStorage.getItem('student_number')
  const [data, setData] = useState([])
  const [grades, setGrades] = useState([])

  useEffect(() => {
    console.log(grades)
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

    const average = "1.00";

    //display grade
    const displayGrade = async (e) => {
      let selected = JSON.parse(e.target.value)
      console.log(selected);

      await api.post('userGrades', selected).then(
        response => {
          setGrades(response.data)
          console.log(response.data)
          renderTable()
        }
      ).catch((err) => {
        console.log(err)
      })
    }

    const renderTable = () => { 
       return (
        grades.map(grade => {
            return (
             <tr key = {grade.schedule_code}>
                <td>{grade.subject_code}</td>    
                <td>{grade.subject_title}</td>
                <td>{grade.grade}</td>
                <td>{grade.completegrade}</td>
                <td>{grade.units}</td>
                <td>{grade.creditunits}</td>
             </tr>
            )
         })
       )
    }
    return (
    <div>
        {
          data === null ? 
          <>
          <div className="text-center">
            No grades available.
          </div>
          </>
          :
          <>
          <div>
            <div className="dropdown input-group">
                  <select className="form-control form-dropdown dropdown-toggle" id="grade_type" onChange={(e) => displayGrade(e)} > 
                  {/*JSON.stringfy */}
                    {sem.map((gender) => <option key={gender.num} value={JSON.stringify({semester : gender.semester, schoolyear: gender.schoolyear, student_number: id})}>{gender.semester + " | " + gender.schoolyear}</option>)}
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
          </>
        }
    </div>
    )
}

export default EnrolledSubjects
