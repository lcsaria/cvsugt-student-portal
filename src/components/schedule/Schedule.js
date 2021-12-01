import React, {useState, useEffect} from 'react'
import Navbar from '../templates/Navbar'
import Footer from '../templates/Footer'
import Sidebar from '../templates/sidebar'
import axios from '../../api/api'
import { Spinner, FloatingLabel, Form } from 'react-bootstrap'

function Schedule() {
const [data, setData] = useState([])
const [sectionlist, setSectionlist] = useState([])
const [loading, setLoading] = useState(false)
const [search,setSearch] = useState()
const [section, setSection] = useState()

    useEffect( () => {
        setLoading(true)
        axios.get('offeredSubjects')
        .then(response => {
            setData(response.data)
            setLoading(false)
        })
        .catch(err => {
            setLoading(false)
        })
        axios.get('sectionsforsubject') 
        .then(response => {
            setSectionlist(response.data)
        })
        .catch(err => {
            setSectionlist('')
        })
    },[])

    const searchSched = () => {
        let sect = document.getElementById('section').value
        let search = document.getElementById('search').value
        search = search.toUpperCase()
        if (sect !== 'default') {
            let testing = sect.split(" ");
            sect = testing
        }
        if (sect === "default" && search === ""){
            setSearch("")
            setSection("")
            renderTable()
        }
        else if (sect !== "default" && search === ""){
            setSearch("")
            setSection(sect)
            renderTable()
        } 
        else if (sect === "default" && search !== ""){
            setSearch(search)
            setSection("")
            renderTable()
        }
        else if (sect !=="default" && search !== ""){
            setSearch(search)
            setSection(section)
            renderTable()
        } 
    }
    const renderTable = () => {
        // eslint-disable-next-line array-callback-return
        
        return data.filter(user => {
            if (!section && !search) return user
            else if (section === "default" && search === "") return user
            else if(search === "" && user.course.includes(section[0]) && user.section.includes(section[1])) return user
            else if(section === "" && user.subject_code.includes(search)) return user
            else if(section === "" && user.subject_code.includes(search)) return user
            else if(section !== "" && search !== ""){
                if (user.course.includes(section[0]) && user.section.includes(section[1]) && user.subject_code.includes(search))
                return user
            } 
        }).map(user => {
            return(
                <tr key = {user.num}>
                    <td data-label="Subject code : ">{user.subject_code}</td>
                    <td data-label="Title : ">{user.subject_title}</td>
                    <td data-label="Schedule code : " className="text-success points" onClick ={()=> window.open(`masterlist/?id=${user.sched_code}`,"_blank")}><b>{user.sched_code}</b></td>
                    <td data-label="Section : ">{user.course + ' ' + user.section}</td>
                    <td data-label="Units : ">{user.credit_unit_lec + user.credit_unit_lab}</td>
                </tr>
            )
        })
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
                        <div className="card mb-3 shadow">
                            <div className="card-body">
                                <span className="card-title card text-center p-2"
                                style={{position: "relative", top: "-30px",  border: 
                                "1px black solid",display: 'block',
                                width: '200px'}}>
                                <b className="text-uppercase text-black">SUBJECT PORTAL</b>
                                </span>
                                <div className="input-group rounded">
                                    <input id="search" type="search" autocomplete="off" className="form-control rounded" placeholder="Enter subject code..." aria-label="Search" aria-describedby="search-addon" />
                                        <span className="input-group-text border-0" id="search-addon">
                                            <i className="fas fa-search"/>
                                        </span>
                                </div>
                                <FloatingLabel label="Select section">
                                    <Form.Select className="form-control mt-4" defaultValue="default" id="section">
                                    <option value="default" selected>---</option>
                                    {sectionlist.map((gender) => <option key={gender.num} value={gender.course + ' ' + gender.section}>{gender.course + ' ' + gender.section}</option>)}
                                    </Form.Select>
                                </FloatingLabel>
                                    <div className="mt-4">
                                        <button className="form-control btn-bg-dark" onClick={searchSched}>
                                            SEARCH
                                         </button>
                                    </div>
                                    
                                    {
                                        (loading) ?
                                        <div className="d-flex justify-content-center mt-4">
                                            <Spinner className="d-flex justify-content-center" animation="border" role="status"/>
                                        </div>
                                        :
                                        <>
                                        <div className="mt-3 table-holder">
                                        <table className="table" id="dataTable">
                                        <thead>
                                            <tr>
                                            <th>SUBJECT CODE</th>
                                            <th>TITLE</th>
                                            <th>SCHEDULE CODE</th>
                                            <th>SECTION</th>
                                            <th>UNITS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {renderTable()}
                                        </tbody>
                                        </table>
                                        </div>
                                        </>
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

export default Schedule
