import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/sidebar'
import { Form, FloatingLabel, Button, Spinner } from 'react-bootstrap';
import axios from '../../api/api'

function Online_enrollment() {
    const [open, isOpen] = useState(false)
    const [data, setData] = useState([])
    const [loading, isLoading] = useState(true)
    const [section, setSection] = useState([])


    useEffect(() => {
        const enrollmentstatus =  () => {
            axios.get('enrollment')
            .then((response) => {
                if (response.data[0].isopen === 0) {
                    alert('Online Enrollment is not activated at the moment, please try again later.')
                    isOpen(false)
                    window.location.href = '/dashboard'
                }
                else isOpen(true)
            })
            .catch((err) => {
                isOpen(false)
            })
        }
        const enrollstatus = () => {
            axios.get('enrollmentstatus')
            .then((response) => {
                console.log(response.data);
                if(response.data.status != 0){
                    alert('You already done with pre-register!')
                    window.location.href = '/dashboard'
                }
            })
        }
        const enrollofferedsubjects = () => {
            axios.get('enrollofferedsubjects')
            .then((response) => {
                setSection(response.data)
            })
            .finally(() => {
                isLoading(false)
            })
        }
        enrollmentstatus()
        enrollstatus()
        enrollofferedsubjects()
    },[])
    const enrollnow = (e) => {
        e.preventDefault()
        // throw data to backend
        axios.post('enrollingsubject', data)
        .then((response) => {
            console.log('success!');
        })
        .catch((err) => {
            console.log('failed!');
        })
    }
    const onsectionselect = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        axios.get(`/subjectsonsection/${e.target.value}`)
        .then((response) => {
            setData(response.data)
        })

    }
    const generatetable = () => {
        return(
            data.map(meow => {
                return(
                    <tr key = {meow.sched_code}>
                        <td data-label="SCHEDULE CODE : ">{meow.sched_code}</td>
                        <td data-label="TITLE : ">{meow.subject_title}</td>
                        <td data-label="UNITS : ">{meow.credit_unit_lec + meow.credit_unit_lab}</td>
                        <td data-label="HOURS : ">{meow.contact_hrs_lec + meow.contact_hrs_lab}</td>  
                    </tr>
                )
            })
        ) 
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
                        <div className="card mb-3">
                            <div className="card-body">
                                <span className="card-title card text-center p-2"
                                style={{position: "relative", top: "-30px",  border: 
                                "1px black solid",display: 'block',
                                width: '200px'}}>
                                <b className="text-uppercase text-black">Online Enrollment</b>
                                </span> 
                                { /* content here */ }
                                { open ? 
                                <>
                                    {loading ? 
                                    <>
                                    <div className="d-flex justify-content-center mt-4">
                                        <Spinner className="d-flex justify-content-center" animation="border" role="status"/>
                                    </div></> 
                                    : 
                                    <>
                                    <FloatingLabel label="SELECT SECTION">
                                        <Form.Select className="form-control" defaultValue="default" id="section" onChange={(e) => onsectionselect(e)}>
                                            <option value="default" selected hidden>---</option>
                                            {section.map((meow) => <option key={meow} value={meow.section}>{meow.course} {meow.section}</option>)}
                                        </Form.Select>
                                    </FloatingLabel>
                                    <div className="mt-3">
                                        <div className="mt-3 table-holder">
                                        <form>
                                            <table className="table" id="dataTable">
                                            <thead>
                                                <tr>
                                                <th>SCHEDULE CODE</th>
                                                <th>TITLE</th>
                                                <th>UNITS</th>
                                                <th>HRS</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {generatetable()}
                                            </tbody>
                                            </table>
                                            <Button variant="success" type="submit" size="md" onClick={e => enrollnow(e)}>
                                                    Enroll Subject
                                            </Button>
                                            </form>
                                        </div>
                                    </div>
                                    </>
                                    }
                                </>
                                : 
                                <></>
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

export default Online_enrollment
