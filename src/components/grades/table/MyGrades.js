import React, {useState, useEffect} from 'react'
import { Spinner } from 'react-bootstrap'
import axios from '../../../api/api'

function EnrolledSubjects() {
  let id = localStorage.getItem('student_number')
  const [data, setData] = useState([])
  const [grades, setGrades] = useState([])
  const [isGrade, setIsGrade] = useState(false)
  const [isSelected, setSelected] = useState(false)
  const [loading, setLoading] = useState(false)
  const [average, setAverage] = useState({"average": 0, "totalunits" : 0})


  useEffect(() => {
    const tae = async () => {
      axios.get(`semforgrades/${id}`)
      .then(result => {
        setData(result.data)
        setIsGrade(true)
        console.log(result.data)
      })
      .catch(err => { 
        setIsGrade(false)
      })
    }
    tae()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

    const sem = data

    //display grade
    const displayGrade = async (e) => {
      let selected = JSON.parse(e.target.value)
      let tempvar = 0
      let tempgrade = 0
      let gradelength = 0
      setSelected(true)
      setLoading(true)
      await axios.post('userGrades', selected).then(
        response => {
          setGrades(response.data)
          for (var x = 0; x < response.data.length; x++)
          {
            let vals = response.data[x].units;
            let vals1 = parseFloat(response.data[x].grade);
            if (isNaN(vals1)) continue
            if (response.data[x].subject_code == "NSTP 1" || response.data[x].subject_code == "NSTP 2") continue
            tempgrade += vals1
            tempvar += vals
            gradelength ++
          }
          tempgrade /= gradelength;
          let jatot = tempgrade.toFixed(2)
          isNaN(jatot) ? jatot = 0 :
          setAverage(meowstate => ({
            ...meowstate, totalunits: tempvar, average: jatot
          }));
          renderTable()
          setLoading(false)
        }
      ).catch((err) => {
        console.log(err)
        setLoading(false)
      })
    }

    const renderTable = () => { 
       return (
        grades.map(grade => {
            return (
             <tr key = {grade.subject_code}>
                <td data-label="Subject Code : ">{grade.subject_code}</td>    
                <td data-label="Description : ">{grade.subject_title}</td>
                <td data-label="Grade : ">{grade.grade}</td>
                <td data-label="Completion : ">{grade.completegrade}</td>
                <td data-label="Unit : ">{grade.units}</td>
             </tr>
            )
         })
       )
    }
    return (
    <div>
        {
          (isGrade) ? 
          <>
          <div>
            <div className="dropdown input-group">
                  <select className="form-control form-dropdown dropdown-toggle" defaultValue="default" id="grade_type" onChange={(e) => displayGrade(e)} > 
                    <option value = "default" disabled hidden>SEMESTER | SCHOOL YEAR</option>
                    {sem.map((semdata) => <option key={semdata.num} value={JSON.stringify({semester : semdata.semester, schoolyear: semdata.schoolyear, student_number: id})}>{semdata.semester + " | " + semdata.schoolyear}</option>)}
                  </select>
                  </div>
            </div>
            {
              isSelected ? 
              <>
              <div className="mt-3 table-holder">
                <table className="table" id="dataTable">
                {
                    (loading) ?
                    <div className="d-flex justify-content-center">
                        <Spinner className="d-flex justify-content-center" animation="border" role="status"/>
                    </div>
                    :
                    <>
                    <thead>
                      <tr>
                        <th>Subject Code</th>
                        <th>Description</th>
                        <th>Grade</th>
                        <th>Completion</th>
                        <th>Unit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {renderTable()}
                    </tbody>
                    <tfoot>
                      <div className="row ml-1"> 
                        <div className="col-12">
                          Total Units: <b>{average.totalunits}</b>
                        </div>
                        <div className="col-12" style={{marginTop: -15}}>
                          Average: <b>{average.average}</b>
                        </div>
                      </div>
                    </tfoot>
                    </>
                }
                  </table>
              </div>
              </> :
              <div className="card mt-3 table-holder text-center">
                Select the semester and year
              </div>
            }
          </>
          :
          <>
          <div className="text-center">
            No grades available.
          </div>
          </>
        }
    </div>
    )
}

export default EnrolledSubjects
