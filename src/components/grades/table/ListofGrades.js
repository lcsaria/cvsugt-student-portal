import React, {useState, useEffect} from 'react'
import { Spinner, Button } from 'react-bootstrap'
import axios from '../../../api/api'

const ListofGrades = () => {
    const [loading, setLoading] = useState(false)
    let id = localStorage.getItem('student_number')
    const [data, setData] = useState([])
    const [grades, setGrades] = useState([])
    const [average, setAverage] = useState({
        totalunits: 0,
        average: 0
    })
    const [meow, setMeow] = useState(false)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        axios.get(`semforgrades/${id}`)
        .then(res => {
            setData(res.data)
            setMeow(true)
            console.log('ok',res.data);
        })
        .catch(err => {
            console.log(err);
        })
    },[])

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

    const displayGrade = async (e) => {
        setAverage(meowstate => ({
            ...meowstate, totalunits: 0, average: 0
          }));
        let selected = JSON.parse(e.target.value)
        let meowaverage = 0
        let meowgrade = 0
        let gradelength = 0
        setLoading(true)
        await axios.post('userGrades', selected)
        .then(response => {
            setGrades(response.data)
            for (var x = 0; x < response.data.length; x++)
            {

                let vals = response.data[x].units;
                let vals1 = parseFloat(response.data[x].grade);
                if (isNaN(vals1)){
                    if (response.data[x].subject_code === "NSTP 1" || response.data[x].subject_code === "NSTP 2" || response.data[x].subject_code === "CVSU 101") continue
                    meowaverage += vals
                }
                else if (response.data[x].subject_code === "NSTP 1" || response.data[x].subject_code === "NSTP 2" || response.data[x].subject_code === "CVSU 101") continue
                else{
                    meowgrade += vals1
                    meowaverage += vals
                    gradelength ++
                }
            }
            meowgrade /= gradelength;
            let jatot = meowgrade.toFixed(2)
            if (isNaN(jatot)) jatot = 0
            if (isNaN(meowaverage)) meowaverage = 0
            setAverage(meowstate => ({
                ...meowstate, totalunits: meowaverage, average: jatot
            }));
            renderTable()
        }
        ).catch((err) => {
          console.log(err)
        })
        .finally(() => {
            setSelected(true)
            setLoading(false)
        })
    }

    return(
        (meow) ? 
        <>
            <div className="dropdown input-group">
                <select className="form-control form-dropdown dropdown-toggle" defaultValue="default" id="grade_type" onChange={(e) => displayGrade(e)} > 
                    <option value = "default" disabled hidden>SEMESTER | SCHOOL YEAR</option>
                    {data.map((semdata) => <option key={semdata.num} value={JSON.stringify({semester : semdata.semester, schoolyear: semdata.schoolyear, student_number: id})}>{semdata.semester + " | " + semdata.schoolyear}</option>)}
                </select>
            </div>
            <div className="mt-3 table-holder">
            <table className="table" id="dataTable">
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
                    {   
                        (loading) ? 
                        <td colSpan="100">
                            <Spinner className="" animation="border" role="status"/>
                        </td>
                        :
                        (selected) ? 
                        renderTable()
                        :
                        <>
                        <tr>
                        <td colSpan="100">Select the semester and year</td>
                        </tr>
                        </>
                        
                    }
                </tbody>
                
                <tfoot>
                    <div className="row ml-1"> 
                        <div className="col-12"> Total Units: <b>{average.totalunits}</b> </div>
                        <div className="col-12" style={{marginTop: -15}}> Average: <b>{average.average}</b> </div>
                    </div>
                </tfoot>
            </table>
            <Button variant="success"onClick={() => alert("Coming soon.")}>Download COG</Button>
            </div>
        </>
        :
        <div className="text-center">NO GRADES AVAILABLE</div>
    )
}

export default ListofGrades